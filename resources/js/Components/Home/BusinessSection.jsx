import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function BusinessSection() {
    const sections = [
        {
            heading: "Expert Trademark Registration Assistance",
            description: "Our dedicated team is here to assist you every step of the way as you navigate through the entire registration process with ease.",
            icon: {
                src: "/images/icons/business-formation.svg",
                alt: "Trademark Registration Icon",
            },
        },
        {
            heading: "Trademark Monitoring & Enforcement",
            description: "Safeguard your brand's reputation by utilizing our comprehensive and vigilant monitoring services to ensure your peace of mind.",
            icon: {
                src: "/images/icons/contract.svg",
                alt: "Trademark Monitoring Icon",
            },
        },
        {
            heading: "Trademark Litigation & Defense",
            description: "We protect your brand against infringement and dilution through strategic enforcement actions. Our litigation team vigorously defends your trademark rights in federal courts and before the USPTO.",
            icon: {
                src: "/images/icons/risk-management.svg",
                alt: "Trademark Litigation Icon",
            },
        },
    ];

    return (
        <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container relative z-10">
                <div className="mb-12 max-w-lg text-start text-text-alternative md:mb-18 lg:mb-20">
                    <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-pippin md:mb-4">
                    Trademark Protection 101: What You Need to Know
                    </p>
                    <h2 className="mb-5 font-heading text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
                    Your Brand, Our Priority
                    </h2>
                    <p className="text-lg text-gray-300 md:text-xl">
                    Our comprehensive trademark services protect your brand at every stage - from initial searches through registration and enforcement. We build robust safeguards for your intellectual property through strategic legal counsel.
                    </p>
                </div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {sections.map((section, index) => (
                        <div key={index} className="w-full">
                            <div className="mb-5 h-8 md:mb-6">
                                <div className="inline-block">
                                    <img src={section.icon.src} className="size-8" alt={section.icon.alt} />
                                </div>
                            </div>
                            <div>
                                <h3 className="mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    {section.heading}
                                </h3>
                                <p className="text-base text-gray-300">
                                    {section.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex flex-wrap justify-start gap-4 md:mt-18 lg:mt-20">
                    <Link
                        href="https://hebertthomaslaw.cliogrow.com/intake/3z_4V3EUIFtGZXWTXHbIkg"
                        target="_blank"
                        className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin hover:text-cod-gray"
                    >
                        Schedule a Consultation
                    </Link>
                    <Link
                        href="/trademark-services"
                        className="group inline-flex items-center gap-2 rounded-full text-white transition hover:text-pippin"
                    >
                        Explore All Services
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
            <div className="absolute inset-0">
                <img 
                    src="/images/home/tr-bg.jpg" 
                    className="absolute inset-0 size-full object-cover" 
                    alt="Modern office building" 
                />
                <div className="absolute inset-0 bg-cod-gray/80" />
            </div>
        </section>
    );
}
