import React, { useEffect, useState } from 'react';
import { Head, usePage } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';
import { loadStripe } from '@stripe/stripe-js';

export default function Payment({ legalnar, attendee }) {
    const { stripe_key } = usePage().props;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Initialize payment automatically when the component mounts
        handlePayment();
    }, []);

    const handlePayment = async () => {
        try {
            setIsLoading(true);
            setError(null);

            if (!stripe_key) {
                throw new Error('Stripe key not found');
            }

            console.log('Initializing payment with Stripe key:', stripe_key);

            // Initialize payment with the backend
            const response = await fetch(route('legalnars.payment.process', attendee.id), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'same-origin',
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Payment initialization failed');
            }

            const { sessionId } = await response.json();
            if (!sessionId) {
                throw new Error('No session ID received from server');
            }

            console.log('Got session ID:', sessionId);

            // Load Stripe and redirect to checkout
            const stripe = await loadStripe(stripe_key);
            if (!stripe) {
                throw new Error('Failed to load Stripe');
            }

            console.log('Redirecting to Stripe checkout...');
            const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
            if (stripeError) {
                throw stripeError;
            }
        } catch (error) {
            console.error('Payment initialization error:', error);
            setError(error.message || 'Unable to process payment. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <MarcomLayout>
            <Head title="Complete Payment" />

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl">
                            Complete Your Registration
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-cod-gray-light">
                            {isLoading 
                                ? 'Initializing payment...'
                                : 'Please complete your payment to confirm your registration for ' + legalnar.title
                            }
                        </p>
                        {error && (
                            <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                                {error}
                            </div>
                        )}
                    </div>

                    <div className="mt-16">
                        <div className="bg-white rounded-lg shadow-sm p-8 max-w-xl mx-auto">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-heading font-semibold text-cod-gray">
                                        Registration Details
                                    </h3>
                                    <dl className="mt-4 space-y-4">
                                        <div className="flex justify-between">
                                            <dt className="text-cod-gray-light">Session</dt>
                                            <dd className="font-medium text-cod-gray">{legalnar.title}</dd>
                                        </div>
                                        {legalnar.scheduled_start && (
                                            <div className="flex justify-between">
                                                <dt className="text-cod-gray-light">Date</dt>
                                                <dd className="font-medium text-cod-gray">
                                                    {new Date(legalnar.scheduled_start).toLocaleDateString()}
                                                </dd>
                                            </div>
                                        )}
                                        {legalnar.scheduled_start && (
                                            <div className="flex justify-between">
                                                <dt className="text-cod-gray-light">Time</dt>
                                                <dd className="font-medium text-cod-gray">
                                                    {new Date(legalnar.scheduled_start).toLocaleTimeString()}
                                                </dd>
                                            </div>
                                        )}
                                        <div className="flex justify-between">
                                            <dt className="text-cod-gray-light">Type</dt>
                                            <dd className="font-medium text-cod-gray capitalize">
                                                {legalnar.type} Session
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                <div className="border-t border-gray-100 pt-6">
                                    <h4 className="text-lg font-heading font-semibold text-cod-gray">
                                        Payment Summary
                                    </h4>
                                    
                                    <div className="mt-6 flex flex-col gap-y-4">
                                        <div className="flex justify-between">
                                            <span className="text-cod-gray-light">Registration Fee</span>
                                            <span className="font-medium text-cod-gray">
                                                ${parseFloat(legalnar.price).toFixed(2)}
                                            </span>
                                        </div>
                                        <div className="flex justify-between border-t border-gray-100 pt-4 font-heading font-semibold text-cod-gray">
                                            <span>Total</span>
                                            <span>${parseFloat(legalnar.price).toFixed(2)}</span>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        {error && (
                                            <Button
                                                onClick={handlePayment}
                                                disabled={isLoading}
                                                className="w-full justify-center bg-cod-gray text-white hover:bg-cod-gray-light"
                                            >
                                                Try Again
                                            </Button>
                                        )}
                                        <p className="mt-4 text-center text-sm text-cod-gray-light">
                                            Secure payment processed by Stripe
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MarcomLayout>
    );
} 