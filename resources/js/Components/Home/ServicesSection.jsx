import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import BackgroundPattern from '../../../../public/images/BackgroundPattern';

export default function ServicesSection() {
    const sections = [
        {
            image: {
                src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                alt: 'Professional legal team meeting with client',
            },
            heading: 'Our Commitment to Client Success',
            description: 'Our firm places a strong emphasis on understanding your unique goals and consistently strive for excellence in every single case we handle in your behalf.',
        },
        {
            image: {
                src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                alt: 'Modern business professional in office',
            },
            heading: 'Forward-Thinking Legal Solutions',
            description: 'We provide comprehensive legal services, ranging from business law to estate planning, ensuring all your legal needs are expertly addressed and managed.',
        },
        {
            image: {
                src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                alt: 'Successful business client',
            },
            heading: 'Hear from Our Satisfied Clients',
            description: 'Discover how we have helped businesses grow and individuals thrive through strategic legal solutions that protect what matters most.',
        },
    ];

    return (
        <section className="relative bg-gradient-to-b from-pippin-lighter to-white px-4 py-16 sm:px-6 md:py-24 lg:px-8 lg:py-28">
            <BackgroundPattern />
            <div className="relative mx-auto max-w-5xl">
                <div className="flex flex-col items-center">
                    <div className="mb-12 text-center md:mb-16 lg:mb-20">
                        <div className="mx-auto w-full max-w-xl">
                            <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-cod-gray-light md:mb-4">
                                Empower and uplift those around you every day.
                            </p>
                            <h2 className="mb-5 font-heading text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                                Your Trusted Partner in Legal Solutions
                            </h2>
                            <p className="text-lg text-gray-600 md:text-xl">
                                Hebert-Thomas Law delivers strategic legal counsel that drives success for Texas businesses and individuals. We transform complex challenges into clear solutions, equipping our clients with the insights and advocacy they need to achieve their goals.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
                        {sections.map((section, index) => (
                            <div
                                key={index}
                                className="group relative flex flex-col items-start"
                            >
                                <div className="mb-6 overflow-hidden rounded-lg md:mb-8">
                                    <img
                                        src={section.image.src}
                                        alt={section.image.alt}
                                        className="aspect-video h-auto w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                </div>
                                <div>
                                    <h3 className="mb-3 text-xl font-bold text-cod-gray md:text-2xl">
                                        {section.heading}
                                    </h3>
                                    <p className="mb-4 text-gray-600">
                                        {section.description}
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center text-cod-gray hover:text-cod-gray-light"
                                    >
                                        Learn More
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex items-center gap-4 md:mt-16">
                        <Link
                            href="/contact"
                            className="rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
                        >
                            Schedule Consultation
                        </Link>
                        <Link
                            href="/services"
                            className="group inline-flex items-center gap-2 rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light"
                        >
                            Learn More
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
