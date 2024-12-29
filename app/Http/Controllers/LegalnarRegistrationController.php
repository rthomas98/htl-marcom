<?php

namespace App\Http\Controllers;

use App\Models\Legalnar;
use App\Models\LegalnarAttendee;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class LegalnarRegistrationController extends Controller
{
    public function show(Legalnar $legalnar)
    {
        // Check if user is already registered
        $existingRegistration = LegalnarAttendee::where('user_id', auth()->id())
            ->where('legalnar_id', $legalnar->id)
            ->first();

        if ($existingRegistration) {
            return redirect()->route('legalnars.my-registrations')
                ->with('message', 'You are already registered for this Legalnar.');
        }

        return Inertia::render('Legalnar/Register', [
            'legalnar' => $legalnar->load('instructor'),
        ]);
    }

    public function create(Request $request, Legalnar $legalnar)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'nullable|string|max:255',
            'special_requirements' => 'nullable|string|max:1000',
        ]);

        // Check if user is already registered
        $existingRegistration = LegalnarAttendee::where('user_id', auth()->id())
            ->where('legalnar_id', $legalnar->id)
            ->first();

        if ($existingRegistration) {
            return back()->with('error', 'You are already registered for this Legalnar.');
        }

        // Create registration
        $attendee = LegalnarAttendee::create([
            'user_id' => auth()->id(),
            'legalnar_id' => $legalnar->id,
            'name' => $request->name,
            'email' => $request->email,
            'company' => $request->company,
            'special_requirements' => $request->special_requirements,
            'status' => 'registered',
            'registered_at' => now(),
            'meta_data' => [
                'registration_ip' => $request->ip(),
                'user_agent' => $request->userAgent(),
            ],
        ]);

        // If the Legalnar is free, complete the registration immediately
        if ($legalnar->price <= 0) {
            $attendee->update([
                'payment_status' => 'completed',
                'amount_paid' => 0,
            ]);

            return redirect()->route('legalnars.my-registrations')
                ->with('success', 'Registration completed successfully!');
        }

        // For paid registrations, redirect to payment page
        return Inertia::render('Legalnar/Payment', [
            'legalnar' => $legalnar,
            'attendee' => $attendee,
        ]);
    }

    public function cancel(LegalnarAttendee $attendee)
    {
        // Verify the attendee belongs to the authenticated user
        if ($attendee->user_id !== auth()->id()) {
            abort(403);
        }

        // Check if legalnar hasn't started yet
        $legalnar = $attendee->legalnar;
        if ($legalnar->type === 'live' && now() >= $legalnar->scheduled_start) {
            return back()->with('error', 'Cannot cancel registration for a session that has already started.');
        }

        // Delete the registration
        $attendee->delete();

        return redirect()->route('legalnars.my-registrations')
            ->with('success', 'Registration cancelled successfully.');
    }
}
