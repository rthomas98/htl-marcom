import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Button } from '@relume_io/relume-ui';

// Load Stripe outside of the component to avoid recreating the Stripe object
const stripePromise = loadStripe(window.stripe_key);

const CheckoutForm = ({ clientSecret, amount, onSuccess, onError }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!stripe || !elements) {
            return;
        }

        setProcessing(true);
        setError(null);

        try {
            const { error: submitError } = await stripe.confirmPayment({
                elements,
                confirmParams: {
                    return_url: `${window.location.origin}/legalnar/payment/complete`,
                },
                redirect: 'if_required',
            });

            if (submitError) {
                setError(submitError.message);
                onError?.(submitError);
            } else {
                onSuccess?.();
            }
        } catch (err) {
            setError('An unexpected error occurred.');
            onError?.(err);
        }

        setProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <PaymentElement />
            
            {error && (
                <div className="text-red-600 text-sm mt-2">
                    {error}
                </div>
            )}
            
            <button
                type="submit"
                disabled={!stripe || processing}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {processing ? 'Processing...' : `Pay $${(amount / 100).toFixed(2)}`}
            </button>
        </form>
    );
};

export default function PaymentForm({ clientSecret, amount, onSuccess, onError }) {
    const options = {
        clientSecret,
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#141414', // cod-gray
                colorBackground: '#ffffff',
                colorText: '#141414', // cod-gray
                colorDanger: '#ef4444',
                fontFamily: 'Poppins, ui-sans-serif, system-ui, sans-serif',
                spacingUnit: '4px',
                borderRadius: '8px',
            },
        },
    };

    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-4">
                <h3 className="text-lg font-heading font-semibold">Payment Details</h3>
                <p className="text-sm text-gray-600">
                    Secure payment processed by Stripe
                </p>
            </div>
            
            {clientSecret ? (
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm
                        clientSecret={clientSecret}
                        amount={amount}
                        onSuccess={onSuccess}
                        onError={onError}
                    />
                </Elements>
            ) : (
                <div className="text-center py-4">
                    Loading payment form...
                </div>
            )}
        </div>
    );
}
