<?php

namespace App\Http\Controllers;

use App\Models\LegalnarAttendee;
use Illuminate\Http\Request;
use Laravel\Cashier\Http\Controllers\WebhookController as CashierController;

class StripeWebhookController extends CashierController
{
    /**
     * Handle payment intent succeeded.
     *
     * @param  array  $payload
     * @return void
     */
    public function handlePaymentIntentSucceeded($payload)
    {
        if ($payload['data']['object']['metadata']['type'] !== 'legalnar') {
            return;
        }

        $attendeeId = $payload['data']['object']['metadata']['attendee_id'];
        $attendee = LegalnarAttendee::find($attendeeId);

        if ($attendee) {
            $attendee->update([
                'payment_status' => 'completed',
                'payment_completed_at' => now(),
                'stripe_payment_intent_id' => $payload['data']['object']['id'],
                'stripe_payment_method_id' => $payload['data']['object']['payment_method'],
            ]);
        }
    }

    /**
     * Handle payment intent payment failed.
     *
     * @param  array  $payload
     * @return void
     */
    public function handlePaymentIntentPaymentFailed($payload)
    {
        if ($payload['data']['object']['metadata']['type'] !== 'legalnar') {
            return;
        }

        $attendeeId = $payload['data']['object']['metadata']['attendee_id'];
        $attendee = LegalnarAttendee::find($attendeeId);

        if ($attendee) {
            $attendee->update([
                'payment_status' => 'failed',
                'payment_notes' => $payload['data']['object']['last_payment_error']['message'] ?? 'Payment failed',
            ]);
        }
    }

    /**
     * Handle charge refunded.
     *
     * @param  array  $payload
     * @return void
     */
    public function handleChargeRefunded($payload)
    {
        if ($payload['data']['object']['metadata']['type'] !== 'legalnar') {
            return;
        }

        $attendeeId = $payload['data']['object']['metadata']['attendee_id'];
        $attendee = LegalnarAttendee::find($attendeeId);

        if ($attendee) {
            $attendee->update([
                'payment_status' => 'refunded',
                'refunded_at' => now(),
                'stripe_refund_id' => $payload['data']['object']['refunds']['data'][0]['id'],
            ]);
        }
    }
}
