<?php

namespace App\Http\Controllers;

use App\Models\LegalnarAttendee;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeSession;

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

        // Initialize Stripe
        Stripe::setApiKey(config('services.stripe.secret'));

        try {
            // Create Stripe Checkout Session
            $session = StripeSession::create([
                'payment_method_types' => ['card'],
                'line_items' => [[
                    'price_data' => [
                        'currency' => 'usd',
                        'unit_amount' => $legalnar->price * 100, // Convert to cents
                        'product_data' => [
                            'name' => $legalnar->title,
                            'description' => "Registration for {$legalnar->title}",
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
                ],
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
            return back()->with('error', 'Unable to initialize payment. Please try again later.');
        }
    }

    public function success(LegalnarAttendee $attendee)
    {
        // Verify the attendee belongs to the authenticated user
        if ($attendee->user_id !== auth()->id()) {
            abort(403);
        }

        // Update the attendee status
        $attendee->update([
            'payment_status' => 'completed',
            'amount_paid' => $attendee->legalnar->price,
        ]);

        return redirect()->route('legalnars.my-registrations')
            ->with('success', 'Payment completed successfully! You are now registered for the Legalnar.');
    }

    public function cancel(LegalnarAttendee $attendee)
    {
        return redirect()->route('legalnars.payment', ['attendee' => $attendee->id])
            ->with('error', 'Payment was cancelled. Please try again to complete your registration.');
    }
}
