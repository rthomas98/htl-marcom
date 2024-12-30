<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Stripe\Exception\SignatureVerificationException;
use Stripe\WebhookSignature;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class VerifyStripeWebhook
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     *
     * @throws \Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            $this->verifySignature($request);
        } catch (SignatureVerificationException $exception) {
            throw new AccessDeniedHttpException($exception->getMessage(), $exception);
        }

        return $next($request);
    }

    /**
     * Verify the Stripe webhook signature.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     *
     * @throws \Stripe\Exception\SignatureVerificationException
     */
    protected function verifySignature(Request $request)
    {
        $payload = $request->getContent();
        $signature = $request->header('Stripe-Signature');
        $secret = config('services.stripe.webhook.secret');

        WebhookSignature::verifyHeader(
            $payload,
            $signature,
            $secret,
            config('services.stripe.webhook.tolerance', 300)
        );
    }
} 