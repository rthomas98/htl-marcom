import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Button } from '@relume_io/relume-ui';
import { Calendar, Clock, X } from 'lucide-react';
import MarcomLayout from '@/Layouts/MarcomLayout';

export default function MyRegistrations({ auth, registrations }) {
    const handleCancelRegistration = (registrationId) => {
        if (confirm('Are you sure you want to cancel this registration?')) {
            router.delete(route('legalnars.registrations.cancel', registrationId));
        }
    };

    const canCancelRegistration = (legalnar) => {
        const now = new Date();
        const startTime = new Date(legalnar.start_time);
        return legalnar.type === 'live' && startTime > now;
    };

    return (
        <MarcomLayout user={auth.user}>
            <Head title="My Registrations" />

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-3xl font-heading font-bold text-cod-gray">My Registrations</h1>
                        <p className="mt-2 text-cod-gray-light">Manage your Legalnar registrations</p>
                    </div>

                    {registrations.length === 0 ? (
                        <div className="rounded-lg border border-cod-gray/10 bg-white p-8 text-center">
                            <p className="text-cod-gray">You haven't registered for any Legalnars yet.</p>
                            <Link href={route('legalnars.index')}>
                                <Button
                                    variant="solid"
                                    size="sm"
                                    className="mt-4 bg-cod-gray text-white hover:bg-cod-gray-light"
                                >
                                    Browse Legalnars
                                </Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {registrations.map((registration) => (
                                <motion.div
                                    key={registration.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-sm"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <h3 className="font-heading text-xl font-semibold text-cod-gray">
                                                    {registration.legalnar.title}
                                                </h3>
                                                <p className="text-sm text-cod-gray-light">
                                                    {registration.legalnar.description}
                                                </p>
                                            </div>
                                            <div className="flex items-center space-x-4">
                                                <Link href={route('legalnars.show', registration.legalnar.id)}>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-cod-gray bg-white text-cod-gray hover:bg-cod-gray hover:text-white"
                                                    >
                                                        View Details
                                                    </Button>
                                                </Link>
                                                {canCancelRegistration(registration.legalnar) && (
                                                    <Button
                                                        onClick={() => handleCancelRegistration(registration.id)}
                                                        variant="outline"
                                                        size="sm"
                                                        className="border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white"
                                                    >
                                                        <X className="mr-2 size-4" />
                                                        Cancel Registration
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="mt-4 flex items-center space-x-6">
                                            <div className="flex items-center space-x-2 text-sm text-cod-gray-light">
                                                <Calendar className="size-4" />
                                                <span>
                                                    {new Date(registration.legalnar.start_time).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm text-cod-gray-light">
                                                <Clock className="size-4" />
                                                <span>
                                                    {new Date(registration.legalnar.start_time).toLocaleTimeString()}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                    registration.legalnar.type === 'live'
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                    {registration.legalnar.type === 'live' ? 'Live Session' : 'On-Demand'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </MarcomLayout>
    );
} 