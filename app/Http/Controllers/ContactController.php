<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormSubmission;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Http;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        // Rate limiting: 3 attempts per IP address per minute
        $executed = RateLimiter::attempt(
            'contact-form:'.$request->ip(),
            3,
            function() {},
            60
        );

        if (!$executed) {
            return redirect()->back()
                ->withInput()
                ->with('error', 'Too many attempts. Please try again in a minute.');
        }

        // Validate reCAPTCHA
        $response = Http::asForm()->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret' => config('services.recaptcha.secret_key'),
            'response' => $request->input('recaptcha_token'),
        ]);

        if (!$response->successful() || !$response->json('success') || $response->json('score') < 0.5) {
            return redirect()->back()
                ->withInput()
                ->with('error', 'Invalid request. Please try again.');
        }

        $validated = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'serviceType' => 'required|string|max:255',
            'clientType' => 'required|string|max:255',
            'message' => 'required|string|max:5000',
            'acceptTerms' => 'required|boolean|accepted',
            'honey_pot' => 'size:0', // Honeypot field should be empty
        ]);

        // Remove honeypot field before sending email
        unset($validated['honey_pot']);

        try {
            Mail::send(new ContactFormSubmission($validated));
            return redirect()->back()->with('success', 'Thank you for your message. We will get back to you soon!');
        } catch (\Exception $e) {
            return redirect()->back()
                ->withInput()
                ->with('error', 'Sorry, there was an error sending your message. Please try again later.');
        }
    }
}
