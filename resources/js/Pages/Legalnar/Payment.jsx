import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

export default function Payment({ legalnar, attendee }) {
    const handlePayment = async () => {
        try {
            // Initialize payment with the backend
            const response = await fetch(route('legalnars.payment.initialize', attendee.id), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                },
            });

            const { sessionId } = await response.json();

            // Load Stripe and redirect to checkout
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (error) {
                console.error('Payment error:', error);
            }
        } catch (error) {
            console.error('Payment initialization error:', error);
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
                            Please complete your payment to confirm your registration for {legalnar.title}.
                        </p>
                    </div>

                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200">
                        <div className="p-8 sm:p-10">
                            <h3 className="text-2xl font-heading font-bold tracking-tight text-cod-gray">
                                Registration Details
                            </h3>
                            
                            <div className="mt-6 flex flex-col gap-x-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-cod-gray-light">Name:</span>
                                    <span className="font-medium text-cod-gray">{attendee.name}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-cod-gray-light">Email:</span>
                                    <span className="font-medium text-cod-gray">{attendee.email}</span>
                                </div>
                                {attendee.company && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-cod-gray-light">Company:</span>
                                        <span className="font-medium text-cod-gray">{attendee.company}</span>
                                    </div>
                                )}
                            </div>

                            <div className="mt-8 border-t border-gray-100 pt-8">
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
                                    <Button
                                        onClick={handlePayment}
                                        className="w-full justify-center bg-cod-gray text-white hover:bg-cod-gray-light"
                                    >
                                        Proceed to Payment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MarcomLayout>
    );
} 