import React from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';
import { Calendar, Clock, User } from 'lucide-react';
import Pagination from '@/Components/Pagination';

const placeholderImage = '/images/placeholders/legalnar-placeholder.svg';
const placeholderAvatar = '/images/placeholders/avatar-placeholder.svg';

export default function Index({ legalnars, title = 'All Legalnars', description = 'Browse our legal education sessions.' }) {
    const { auth } = usePage().props;

    const handleRegister = (legalnarId) => {
        if (!auth.user) {
            // If not authenticated, redirect to register page with return URL
            const returnUrl = route('legalnars.register', legalnarId);
            router.visit(route('register'), {
                data: { return_url: returnUrl },
                method: 'get',
            });
        } else {
            // If authenticated, proceed to legalnar registration
            router.visit(route('legalnars.register', legalnarId), {
                method: 'get',
            });
        }
    };

    const getRegistrationButton = (legalnar) => {
        if (!auth.user) {
            return (
                <Button
                    onClick={() => handleRegister(legalnar.id)}
                    className="w-full justify-center bg-cod-gray text-white hover:bg-cod-gray-light"
                >
                    Register Now
                </Button>
            );
        }

        if (legalnar.is_registered) {
            return (
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium text-green-600">✓ Registered</span>
                    <Link
                        href={route('legalnars.my-registrations')}
                        className="text-sm text-cod-gray-light hover:text-cod-gray"
                    >
                        View My Registration
                    </Link>
                </div>
            );
        }

        return (
            <Button
                onClick={() => handleRegister(legalnar.id)}
                className="w-full justify-center bg-cod-gray text-white hover:bg-cod-gray-light"
            >
                Register Now
            </Button>
        );
    };

    return (
        <MarcomLayout>
            <Head title={title} />

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl">
                            {title}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-cod-gray-light">
                            {description}
                        </p>
                    </div>

                    {legalnars.data.length > 0 ? (
                        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {legalnars.data.map((legalnar) => (
                                <article key={legalnar.id} className="flex flex-col items-start">
                                    <div className="relative w-full">
                                        <img
                                            src={legalnar.featured_image_url || placeholderImage}
                                            alt={legalnar.title}
                                            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                            onError={(e) => {
                                                e.target.src = placeholderImage;
                                            }}
                                        />
                                        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="max-w-xl">
                                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                                            <time dateTime={legalnar.scheduled_start} className="text-cod-gray-light">
                                                {legalnar.scheduled_start ? new Date(legalnar.scheduled_start).toLocaleDateString() : 'Available Now'}
                                            </time>
                                            <span className="relative z-10 rounded-full bg-pippin px-3 py-1.5 font-medium text-cod-gray">
                                                {legalnar.type === 'live' ? 'Live Session' : 'On-Demand'}
                                            </span>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-heading font-semibold leading-6 text-cod-gray">
                                                <Link href={route('legalnars.show', legalnar.id)}>
                                                    <span className="absolute inset-0" />
                                                    {legalnar.title}
                                                </Link>
                                            </h3>
                                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-cod-gray-light">
                                                {legalnar.description}
                                            </p>
                                        </div>
                                        <div className="mt-8 flex items-center gap-x-4">
                                            <img
                                                src={legalnar.instructor?.avatar_url || placeholderAvatar}
                                                alt={legalnar.instructor?.name}
                                                className="h-10 w-10 rounded-full bg-gray-100"
                                                onError={(e) => {
                                                    e.target.src = placeholderAvatar;
                                                }}
                                            />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-cod-gray">
                                                    <span className="absolute inset-0" />
                                                    {legalnar.instructor?.name}
                                                </p>
                                                <p className="text-cod-gray-light">{legalnar.instructor?.title || 'Instructor'}</p>
                                            </div>
                                        </div>
                                        <div className="mt-8 flex items-center gap-x-4 text-sm text-cod-gray-light">
                                            {legalnar.type === 'live' && legalnar.scheduled_start && (
                                                <>
                                                    <div className="flex items-center gap-x-2">
                                                        <Calendar className="h-4 w-4" />
                                                        <span>{new Date(legalnar.scheduled_start).toLocaleDateString()}</span>
                                                    </div>
                                                    <div className="flex items-center gap-x-2">
                                                        <Clock className="h-4 w-4" />
                                                        <span>{new Date(legalnar.scheduled_start).toLocaleTimeString()}</span>
                                                    </div>
                                                </>
                                            )}
                                            <div className="flex items-center gap-x-2">
                                                <User className="h-4 w-4" />
                                                <span>{legalnar.registered_attendees_count || 0} registered</span>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            {getRegistrationButton(legalnar)}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-16 text-center">
                            <h3 className="text-lg font-heading font-semibold text-cod-gray">
                                No Legalnars Available
                            </h3>
                            <p className="mt-2 text-cod-gray-light">
                                Check back soon for upcoming sessions!
                            </p>
                        </div>
                    )}

                    {legalnars.links && legalnars.data.length > 0 && (
                        <div className="mt-16">
                            <Pagination links={legalnars.links} />
                        </div>
                    )}
                </div>
            </div>
        </MarcomLayout>
    );
} 