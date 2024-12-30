import React, { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';
import { Calendar, Clock, User, MapPin, Tag, Share2, Download, BarChart2, Timer, ChevronDown, Bell, FileText, Mail, X } from 'lucide-react';
import { Disclosure, Transition, Dialog } from '@headlessui/react';
import RegistrationButton from '@/Components/Legalnar/RegistrationButton';

const placeholderImage = '/images/placeholders/legalnar-placeholder.svg';
const placeholderAvatar = '/images/placeholders/avatar-placeholder.svg';

const CountdownTimer = ({ startTime }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = new Date(startTime) - new Date();
        if (difference <= 0) return null;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [startTime]);

    if (!timeLeft) return null;

    return (
        <div className="mt-4 text-center">
            <p className="text-sm font-medium text-cod-gray-light mb-2">Time until session starts:</p>
            <div className="grid grid-cols-4 gap-2">
                {Object.entries(timeLeft).map(([key, value]) => (
                    <div key={key} className="bg-white rounded-lg p-2 shadow-sm">
                        <div className="text-lg font-bold text-cod-gray">{value}</div>
                        <div className="text-xs text-cod-gray-light capitalize">{key}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const generateCalendarLinks = (event) => {
    const startDate = new Date(event.scheduled_start);
    const endDate = new Date(startDate.getTime() + (event.duration_minutes || 60) * 60000);
    
    const formatDate = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');
    
    const google = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${encodeURIComponent(event.description)}`;
    
    const ics = `data:text/calendar;charset=utf8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
URL:${window.location.href}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}
LOCATION:Online
END:VEVENT
END:VCALENDAR`;

    return { google, ics };
};

const ContactInstructorModal = ({ isOpen, setIsOpen, instructor, legalnarTitle }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('instructor.contact', instructor.id), {
            onSuccess: () => {
                reset();
                setIsOpen(false);
            },
        });
    };

    return (
        <Transition show={isOpen} as={React.Fragment}>
            <Dialog
                as="div"
                className="relative z-50"
                onClose={() => setIsOpen(false)}
            >
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                <div className="absolute right-0 top-0 pr-4 pt-4">
                                    <button
                                        type="button"
                                        className="rounded-md bg-white text-gray-400 hover:text-gray-500"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="sr-only">Close</span>
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                        <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-cod-gray">
                                            Contact {instructor.name}
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-cod-gray-light">
                                                Send a message regarding "{legalnarTitle}"
                                            </p>
                                        </div>
                                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-cod-gray">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={data.name}
                                                    onChange={e => setData('name', e.target.value)}
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-cod-gray shadow-sm focus:border-cod-gray focus:outline-none focus:ring-cod-gray sm:text-sm"
                                                    required
                                                />
                                                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-cod-gray">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={data.email}
                                                    onChange={e => setData('email', e.target.value)}
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-cod-gray shadow-sm focus:border-cod-gray focus:outline-none focus:ring-cod-gray sm:text-sm"
                                                    required
                                                />
                                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-cod-gray">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    rows={4}
                                                    value={data.message}
                                                    onChange={e => setData('message', e.target.value)}
                                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-cod-gray shadow-sm focus:border-cod-gray focus:outline-none focus:ring-cod-gray sm:text-sm"
                                                    required
                                                />
                                                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                            </div>
                                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                                <Button
                                                    type="submit"
                                                    disabled={processing}
                                                    className="w-full justify-center bg-cod-gray text-white hover:bg-cod-gray-light sm:ml-3 sm:w-auto"
                                                >
                                                    Send Message
                                                </Button>
                                                <Button
                                                    type="button"
                                                    onClick={() => setIsOpen(false)}
                                                    className="mt-3 w-full justify-center bg-white border border-cod-gray text-cod-gray hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default function Show({ legalnar, relatedLegalnars }) {
    console.log('Legalnar data:', legalnar); // Debug log
    console.log('Related Legalnars:', relatedLegalnars); // Debug log

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const getRegistrationButton = () => {
        if (legalnar.is_registered) {
            return (
                <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-green-600">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium">Registered</span>
                    </div>
                    <Link
                        href={route('legalnars.my-registrations')}
                        className="block text-center text-sm text-cod-gray-light hover:text-cod-gray"
                    >
                        View My Registration
                    </Link>
                </div>
            );
        }

        if (legalnar.is_full) {
            return (
                <div className="mt-6 space-y-3">
                    <div className="text-center text-cod-gray-light">
                        This session is currently full
                    </div>
                    <Button
                        onClick={() => {
                            // TODO: Implement waitlist functionality
                            alert('You will be notified when a spot becomes available.');
                        }}
                        className="w-full justify-center bg-white border border-cod-gray text-cod-gray hover:bg-gray-50"
                    >
                        <Bell className="h-4 w-4 mr-2" />
                        Notify When Available
                    </Button>
                </div>
            );
        }

        return (
            <div className="mt-6">
                <RegistrationButton 
                    legalnar={legalnar}
                    className="w-full justify-center"
                />
            </div>
        );
    };

    if (!legalnar) {
        return (
            <MarcomLayout>
                <Head title="Legalnar Not Found" />
                <div className="bg-white py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl">
                                Legalnar Not Found
                            </h2>
                            <p className="mt-2 text-lg leading-8 text-cod-gray-light">
                                The requested Legalnar could not be found.
                            </p>
                            <Link href={route('legalnars.index')}>
                                <Button className="mt-8 bg-cod-gray text-white hover:bg-cod-gray-light">
                                    Browse Legalnars
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </MarcomLayout>
        );
    }

    return (
        <MarcomLayout>
            <Head title={legalnar.title} />

            <div className="bg-white border-b border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="flex items-center space-x-4">
                            <li>
                                <div>
                                    <Link href={route('home')} className="text-cod-gray-light hover:text-cod-gray">
                                        Home
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                    <Link href={route('legalnars.index')} className="ml-4 text-cod-gray-light hover:text-cod-gray">
                                        Legalnars
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                    <Link 
                                        href={route(legalnar.type === 'live' ? 'legalnars.upcoming' : 'legalnars.on-demand')} 
                                        className="ml-4 text-cod-gray-light hover:text-cod-gray"
                                    >
                                        {legalnar.type === 'live' ? 'Live Sessions' : 'On-Demand'}
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 flex-shrink-0 text-gray-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                    </svg>
                                    <span className="ml-4 text-cod-gray" aria-current="page">
                                        {legalnar.title}
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-x-4">
                                <span className="relative z-10 rounded-full bg-pippin px-3 py-1.5 font-medium text-cod-gray">
                                    {legalnar.type === 'live' ? 'Live Session' : 'On-Demand'}
                                </span>
                                {legalnar.scheduled_start && (
                                    <time dateTime={legalnar.scheduled_start} className="text-cod-gray-light">
                                        {new Date(legalnar.scheduled_start).toLocaleDateString()}
                                    </time>
                                )}
                            </div>
                            <h1 className="mt-4 text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl">
                                {legalnar.title}
                            </h1>
                        </div>

                        {/* Featured Image */}
                        <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl">
                            <img
                                src={legalnar.featured_image_url || placeholderImage}
                                alt={legalnar.title}
                                className="h-full w-full object-cover"
                                onError={(e) => {
                                    e.target.src = placeholderImage;
                                }}
                            />
                        </div>

                        {/* Content */}
                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {/* Main Content */}
                            <div className="lg:col-span-2">
                                <div className="prose prose-lg prose-indigo max-w-none">
                                    <h2 className="text-xl font-heading font-semibold text-cod-gray">About this Session</h2>
                                    <div dangerouslySetInnerHTML={{ __html: legalnar.description }} />

                                    {legalnar.learning_outcomes && (
                                        <>
                                            <h2 className="text-xl font-heading font-semibold text-cod-gray mt-8">What You'll Learn</h2>
                                            <div dangerouslySetInnerHTML={{ __html: legalnar.learning_outcomes }} />
                                        </>
                                    )}

                                    {legalnar.prerequisites && (
                                        <>
                                            <h2 className="text-xl font-heading font-semibold text-cod-gray mt-8">Prerequisites</h2>
                                            <div dangerouslySetInnerHTML={{ __html: legalnar.prerequisites }} />
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="rounded-2xl bg-gray-50 p-6">
                                    {/* Instructor */}
                                    {legalnar.instructor && (
                                        <div className="mb-6">
                                            <h3 className="text-sm font-medium text-cod-gray-light">Instructor</h3>
                                            <div className="mt-2 flex items-center gap-x-3">
                                                <img
                                                    src={legalnar.instructor.avatar_url || placeholderAvatar}
                                                    alt={legalnar.instructor.name}
                                                    className="h-10 w-10 rounded-full bg-gray-100"
                                                    onError={(e) => {
                                                        e.target.src = placeholderAvatar;
                                                    }}
                                                />
                                                <div>
                                                    <p className="text-sm font-medium text-cod-gray">{legalnar.instructor.name}</p>
                                                    <p className="text-sm text-cod-gray-light">{legalnar.instructor.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {legalnar.instructor?.email ? (
                                        <div className="mt-4 mb-6">
                                            <Button
                                                onClick={() => setIsContactModalOpen(true)}
                                                className="w-full justify-center bg-white border border-cod-gray text-cod-gray hover:bg-gray-50"
                                                size="sm"
                                            >
                                                <Mail className="h-4 w-4 mr-2" />
                                                Contact Instructor
                                            </Button>
                                            <ContactInstructorModal
                                                isOpen={isContactModalOpen}
                                                setIsOpen={setIsContactModalOpen}
                                                instructor={legalnar.instructor}
                                                legalnarTitle={legalnar.title}
                                            />
                                        </div>
                                    ) : null}

                                    {/* Session Details */}
                                    <div className="space-y-4">
                                        {legalnar.type === 'live' && legalnar.scheduled_start && (
                                            <>
                                                <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                                    <Calendar className="h-5 w-5" />
                                                    <span>{new Date(legalnar.scheduled_start).toLocaleDateString()}</span>
                                                </div>
                                                <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                                    <Clock className="h-5 w-5" />
                                                    <span>{new Date(legalnar.scheduled_start).toLocaleTimeString()}</span>
                                                </div>
                                                {legalnar.timezone && (
                                                    <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                                        <MapPin className="h-5 w-5" />
                                                        <span>{legalnar.timezone}</span>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                        <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                            <User className="h-5 w-5" />
                                            <span>{legalnar.registered_attendees_count || 0} registered</span>
                                        </div>
                                        {typeof legalnar.price === 'number' && legalnar.price > 0 && (
                                            <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                                <Tag className="h-5 w-5" />
                                                <span>${Number(legalnar.price).toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                            <Timer className="h-5 w-5" />
                                            <span>{legalnar.duration_minutes || 60} minutes</span>
                                        </div>
                                        {legalnar.difficulty_level && (
                                            <div className="flex items-center gap-x-2 text-sm text-cod-gray-light">
                                                <BarChart2 className="h-5 w-5" />
                                                <span className="capitalize">{legalnar.difficulty_level} Level</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Registration Button */}
                                    {getRegistrationButton()}

                                    {/* Share Section */}
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <h3 className="text-sm font-medium text-cod-gray-light mb-4">Share this Session</h3>
                                        <div className="flex gap-4">
                                            <a
                                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(legalnar.title)}&url=${encodeURIComponent(window.location.href)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cod-gray-light hover:text-cod-gray"
                                            >
                                                <span className="sr-only">Share on Twitter</span>
                                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                </svg>
                                            </a>
                                            <a
                                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-cod-gray-light hover:text-cod-gray"
                                            >
                                                <span className="sr-only">Share on LinkedIn</span>
                                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(window.location.href);
                                                    alert('Link copied to clipboard!');
                                                }}
                                                className="text-cod-gray-light hover:text-cod-gray"
                                            >
                                                <span className="sr-only">Copy link</span>
                                                <Share2 className="h-5 w-5" />
                                            </button>
                                        </div>
                                    </div>

                                    {legalnar.type === 'live' && legalnar.scheduled_start && (
                                        <>
                                            <CountdownTimer startTime={legalnar.scheduled_start} />
                                            
                                            <div className="mt-6 space-y-3">
                                                <h3 className="text-sm font-medium text-cod-gray-light">Add to Calendar</h3>
                                                <div className="flex gap-2">
                                                    <a
                                                        href={generateCalendarLinks(legalnar).google}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1"
                                                    >
                                                        <Button
                                                            className="w-full justify-center bg-white border border-cod-gray text-cod-gray hover:bg-gray-50"
                                                            size="sm"
                                                        >
                                                            Google
                                                        </Button>
                                                    </a>
                                                    <a
                                                        href={generateCalendarLinks(legalnar).ics}
                                                        download="event.ics"
                                                        className="flex-1"
                                                    >
                                                        <Button
                                                            className="w-full justify-center bg-white border border-cod-gray text-cod-gray hover:bg-gray-50"
                                                            size="sm"
                                                        >
                                                            iCal
                                                        </Button>
                                                    </a>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {legalnar.is_registered && legalnar.materials && legalnar.materials.length > 0 && (
                                        <div className="mt-6 pt-6 border-t border-gray-200">
                                            <h3 className="text-sm font-medium text-cod-gray-light mb-4">Session Materials</h3>
                                            <div className="space-y-3">
                                                {legalnar.materials.map((material, index) => (
                                                    <a
                                                        key={index}
                                                        href={material.url}
                                                        download
                                                        className="flex items-center p-3 rounded-lg border border-gray-200 hover:bg-gray-50"
                                                    >
                                                        <div className="flex-1">
                                                            <p className="text-sm font-medium text-cod-gray">{material.name}</p>
                                                            <p className="text-xs text-cod-gray-light">{material.size}</p>
                                                        </div>
                                                        <Download className="h-4 w-4 text-cod-gray-light" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {legalnar.topics && legalnar.topics.length > 0 && (
                                        <div className="mt-8">
                                            <h2 className="text-xl font-heading font-semibold text-cod-gray mb-4">Topics Covered</h2>
                                            <div className="flex flex-wrap gap-2">
                                                {legalnar.topics.map((topic, index) => (
                                                    <Link
                                                        key={index}
                                                        href={route('legalnars.index', { topic: topic })}
                                                        className="inline-flex items-center rounded-full bg-pippin px-3 py-1.5 text-sm font-medium text-cod-gray hover:bg-pippin/80"
                                                    >
                                                        {topic}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {legalnar.tags && legalnar.tags.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {legalnar.tags.map((tag, index) => (
                                                <Link
                                                    key={index}
                                                    href={route('legalnars.index', { tag: tag })}
                                                    className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-cod-gray-light hover:bg-gray-200"
                                                >
                                                    #{tag}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            {legalnar.faqs && legalnar.faqs.length > 0 && (
                <div className="mx-auto max-w-3xl mt-16 pt-16 border-t border-gray-200">
                    <h2 className="text-2xl font-heading font-bold tracking-tight text-cod-gray mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {legalnar.faqs.map((faq, index) => (
                            <Disclosure key={index}>
                                {({ open }) => (
                                    <div className="border border-gray-200 rounded-lg">
                                        <Disclosure.Button className="flex w-full justify-between px-4 py-4 text-left">
                                            <span className="font-medium text-cod-gray">{faq.question}</span>
                                            <ChevronDown
                                                className={`${
                                                    open ? 'rotate-180 transform' : ''
                                                } h-5 w-5 text-cod-gray`}
                                            />
                                        </Disclosure.Button>
                                        <Transition
                                            show={open}
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Disclosure.Panel className="px-4 pb-4 pt-2 text-sm text-cod-gray-light">
                                                {faq.answer}
                                            </Disclosure.Panel>
                                        </Transition>
                                    </div>
                                )}
                            </Disclosure>
                        ))}
                    </div>
                </div>
            )}

            {/* Testimonials Section */}
            {legalnar.testimonials && legalnar.testimonials.length > 0 && (
                <div className="mx-auto max-w-3xl mt-16 pt-16 border-t border-gray-200">
                    <h2 className="text-2xl font-heading font-bold tracking-tight text-cod-gray mb-8">
                        What Past Attendees Say
                    </h2>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {legalnar.testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
                            >
                                <blockquote className="relative">
                                    <p className="text-base text-cod-gray-light">
                                        "{testimonial.content}"
                                    </p>
                                </blockquote>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <img
                                        src={testimonial.avatar_url || placeholderAvatar}
                                        alt={testimonial.name}
                                        className="h-10 w-10 rounded-full bg-gray-50"
                                    />
                                    <div>
                                        <div className="font-semibold text-cod-gray">{testimonial.name}</div>
                                        {testimonial.title && (
                                            <div className="text-sm text-cod-gray-light">{testimonial.title}</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Related Legalnars */}
            {relatedLegalnars?.length > 0 && (
                <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
                    <div className="flex flex-col items-center">
                        <div className="mb-8 max-w-[800px] text-center md:mb-12 lg:mb-16">
                            <h2 className="text-3xl font-bold md:text-5xl">Related Sessions</h2>
                            <p className="mx-auto mt-4 max-w-[528px] text-[#636262]">
                                Explore more sessions that might interest you
                            </p>
                        </div>
                        <div className="mb-8 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:mb-12 lg:mb-16 lg:grid-cols-3">
                            {relatedLegalnars.map((related) => (
                                <Link
                                    key={related.id}
                                    href={route('legalnars.show', related.id)}
                                    className="flex flex-col gap-4 rounded-xl border border-solid border-[#dfdfdf] bg-white p-5 transition-all duration-200 hover:border-cod-gray"
                                >
                                    <div className="relative h-48 w-full overflow-hidden rounded-xl">
                                        <img
                                            src={related.featured_image_url || placeholderImage}
                                            alt={related.title}
                                            className="absolute inset-0 h-full w-full object-cover"
                                            onError={(e) => {
                                                e.target.src = placeholderImage;
                                            }}
                                        />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <div className="mb-4 flex items-center gap-2">
                                            <div className="rounded-lg bg-pippin px-3 py-1.5">
                                                <p className="text-sm font-semibold text-cod-gray">
                                                    {related.type === 'live' ? 'Live Session' : 'On-Demand'}
                                                </p>
                                            </div>
                                            {related.scheduled_start && (
                                                <p className="text-sm text-[#636262]">
                                                    {new Date(related.scheduled_start).toLocaleDateString()}
                                                </p>
                                            )}
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold md:text-2xl">
                                            {related.title}
                                        </h3>
                                        <p className="mb-4 text-[#636262] line-clamp-2">
                                            {related.description}
                                        </p>
                                        <div className="flex items-center gap-x-4">
                                            <img
                                                src={related.instructor?.avatar_url || placeholderAvatar}
                                                alt={related.instructor?.name}
                                                className="h-10 w-10 rounded-full bg-[#f2f2f7]"
                                                onError={(e) => {
                                                    e.target.src = placeholderAvatar;
                                                }}
                                            />
                                            <div>
                                                <p className="font-medium text-cod-gray">
                                                    {related.instructor?.name}
                                                </p>
                                                <p className="text-sm text-[#636262]">
                                                    {related.instructor?.title}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </MarcomLayout>
    );
} 