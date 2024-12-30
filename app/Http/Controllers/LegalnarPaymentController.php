<?php

namespace App\Http\Controllers;

use App\Models\LegalnarAttendee;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeSession;
use App\Notifications\LegalnarRegistrationConfirmed;
use Inertia\Inertia;

class LegalnarPaymentController extends Controller
{
    public function initialize(LegalnarAttendee $attendee)
    {
        // Verify the attendee belongs to the authenticated user
        if ($attendee->user_id !== auth()->id()) {
            abort(403);
        }

        // Get the legalnar details
        $legalnar = $attendee->legalnar;

        \Log::info('Loading payment page', [
            'attendee_id' => $attendee->id,
            'legalnar_id' => $legalnar->id,
            'price' => $legalnar->price
        ]);

        return Inertia::render('Legalnar/Payment', [
            'legalnar' => $legalnar,
            'attendee' => $attendee,
            'stripeKey' => config('services.stripe.key'),
        ]);
    }

    public function processPayment(LegalnarAttendee $attendee)
    {
        // Verify the attendee belongs to the authenticated user
        if ($attendee->user_id !== auth()->id()) {
            abort(403);
        }

        // Get the legalnar details
        $legalnar = $attendee->legalnar;

        \Log::info('Initializing payment', [
            'attendee_id' => $attendee->id,
            'legalnar_id' => $legalnar->id,
            'price' => $legalnar->price
        ]);

        // Initialize Stripe
        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            // Create Stripe Checkout Session
            $session = StripeSession::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'unit_amount' => (int)($legalnar->price * 100), // Convert to cents
                        'product_data' => [
                            'name' => $legalnar->title,
                            'description' => "Registration for {$legalnar->title}",
                            'images' => $legalnar->featured_image_url ? [$legalnar->featured_image_url] : [],
                        ],
                    ],
                    'quantity' => 1,
                ]],
                'mode' => 'payment',
                'success_url' => route('legalnars.payment.success', ['attendee' => $attendee->id]),
                'cancel_url' => route('legalnars.payment.cancel', ['attendee' => $attendee->id]),
                'customer_email' => $attendee->email,
                'metadata' => [
                    'attendee_id' => $attendee->id,
                    'legalnar_id' => $legalnar->id,
                    'type' => 'legalnar',
                ],
            ]);

            \Log::info('Stripe session created', [
                'session_id' => $session->id,
                'attendee_id' => $attendee->id
            ]);

            // Update the attendee record with the session ID
            $attendee->update([
                'payment_status' => 'pending',
                'meta_data' => array_merge($attendee->meta_data ?? [], [
                    'stripe_session_id' => $session->id,
                ]),
            ]);

            // Return the session ID to the frontend
            return response()->json([
                'sessionId' => $session->id,
            ]);

        } catch (\Exception $e) {
            \Log::error('Payment initialization failed', [
                'error' => $e->getMessage(),
                'attendee_id' => $attendee->id
            ]);

            return response()->json([
                'error' => 'Unable to initialize payment. Please try again later.',
            ], 500);
        }
    }

    public function success(LegalnarAttendee $attendee)
    {
        // Verify the attendee belongs to the authenticated user
        if ($attendee->user_id !== auth()->id()) {
            abort(403);
        }

        \Log::info('Payment success callback', [
            'attendee_id' => $attendee->id
        ]);

        // Update the attendee status
        $attendee->update([
            'payment_status' => 'completed',
            'amount_paid' => $attendee->legalnar->price,
            'payment_completed_at' => now(),
        ]);

        // Send confirmation notification
        $attendee->user->notify(new LegalnarRegistrationConfirmed($attendee));

        return redirect()->route('legalnars.my-registrations')
            ->with('success', 'Payment completed successfully! You are now registered for the Legalnar.');
    }

    public function cancel(LegalnarAttendee $attendee)
    {
        // Verify the attendee belongs to the authenticated user
        if ($attendee->user_id !== auth()->id()) {
            abort(403);
        }

        \Log::info('Payment cancelled', [
            'attendee_id' => $attendee->id
        ]);

        return redirect()->route('legalnars.show', $attendee->legalnar)
            ->with('error', 'Payment was cancelled. Please try again to complete your registration.');
    }
}
