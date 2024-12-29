import React from 'react';
import { Head } from '@inertiajs/react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@relume_io/relume-ui';
import MarcomLayout from '@/Layouts/MarcomLayout';

export default function PaymentComplete({ status, payment_intent }) {
    const isSuccess = status === 'succeeded';

    return (
        <MarcomLayout
            title={`Payment ${isSuccess ? 'Successful' : 'Failed'} | Hebert Thomas Law`}
            description={isSuccess ? 'Your payment was successful and your registration is complete.' : 'There was an issue processing your payment.'}
        >
            <Head title="Payment Status" />
            
            <div className="py-12">
                <div className="max-w-2xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                        {isSuccess ? (
                            <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                        ) : (
                            <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
                        )}
                        
                        <h2 className="text-2xl font-heading font-semibold mb-4">
                            {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
                        </h2>
                        
                        <p className="text-gray-600 mb-6">
                            {isSuccess
                                ? 'Thank you for your payment. Your registration is now complete.'
                                : 'There was an issue processing your payment. Please try again.'}
                        </p>
                        
                        <div className="space-y-4">
                            <Button
                                onClick={() => window.location.href = '/dashboard'}
                                variant="primary"
                                className="w-full"
                            >
                                Return to Dashboard
                            </Button>
                            
                            {!isSuccess && (
                                <Button
                                    variant="secondary"
                                    onClick={() => window.history.back()}
                                    className="w-full"
                                >
                                    Try Again
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MarcomLayout>
    );
}
