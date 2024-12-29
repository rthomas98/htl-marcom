import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';
import { Calendar, Clock, User, X } from 'lucide-react';

const placeholderImage = '/images/placeholders/legalnar-placeholder.svg';
const placeholderAvatar = '/images/placeholders/avatar-placeholder.svg';

export default function MyRegistrations({ auth, registrations }) {
    const handleCancelRegistration = (registrationId) => {
        if (confirm('Are you sure you want to cancel this registration? This action cannot be undone.')) {
            router.delete(route('legalnars.registrations.cancel', registrationId));
        }
    };

    const canCancelRegistration = (legalnar) => {
        const now = new Date();
        const startTime = new Date(legalnar.scheduled_start);
        return legalnar.type === 'live' && startTime > now;
    };

    return (
        <MarcomLayout user={auth.user}>
            <Head title="My Registrations" />

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl">
                            My Registrations
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-cod-gray-light">
                            Manage your Legalnar registrations
                        </p>
                    </div>

                    {registrations.data.length === 0 ? (
                        <div className="mt-16 rounded-lg border border-cod-gray/10 bg-white p-8 text-center">
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
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12">
                            {registrations.data.map((registration) => (
                                <article key={registration.id} className="flex flex-col overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-sm">
                                    <div className="flex flex-col-reverse lg:flex-row">
                                        <div className="flex-1 p-6 lg:p-8">
                                            <div className="flex items-start justify-between">
                                                <div className="space-y-1">
                                                    <h3 className="font-heading text-xl font-semibold text-cod-gray">
                                                        {registration.legalnar.title}
                                                    </h3>
                                                    <p className="text-sm text-cod-gray-light">
                                                        {registration.legalnar.description}
                                                    </p>
                                                </div>
                                                <div className="ml-4 flex flex-shrink-0 flex-col items-end space-y-2">
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

                                            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-cod-gray-light">
                                                {registration.legalnar.type === 'live' && registration.legalnar.scheduled_start && (
                                                    <>
                                                        <div className="flex items-center gap-x-2">
                                                            <Calendar className="size-4" />
                                                            <span>
                                                                {new Date(registration.legalnar.scheduled_start).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-x-2">
                                                            <Clock className="size-4" />
                                                            <span>
                                                                {new Date(registration.legalnar.scheduled_start).toLocaleTimeString()}
                                                            </span>
                                                        </div>
                                                    </>
                                                )}
                                                <div className="flex items-center gap-x-2">
                                                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                                        registration.legalnar.type === 'live'
                                                            ? 'bg-green-100 text-green-800'
                                                            : 'bg-blue-100 text-blue-800'
                                                    }`}>
                                                        {registration.legalnar.type === 'live' ? 'Live Session' : 'On-Demand'}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex items-center gap-x-4">
                                                <img
                                                    src={registration.legalnar.instructor?.avatar_url || placeholderAvatar}
                                                    alt={registration.legalnar.instructor?.name}
                                                    className="h-10 w-10 rounded-full bg-gray-100"
                                                    onError={(e) => {
                                                        e.target.src = placeholderAvatar;
                                                    }}
                                                />
                                                <div className="text-sm leading-6">
                                                    <p className="font-semibold text-cod-gray">
                                                        {registration.legalnar.instructor?.name}
                                                    </p>
                                                    <p className="text-cod-gray-light">
                                                        {registration.legalnar.instructor?.title || 'Instructor'}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="relative aspect-[16/9] w-full lg:aspect-square lg:w-72">
                                            <img
                                                src={registration.legalnar.featured_image_url || placeholderImage}
                                                alt={registration.legalnar.title}
                                                className="h-full w-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = placeholderImage;
                                                }}
                                            />
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </MarcomLayout>
    );
} 