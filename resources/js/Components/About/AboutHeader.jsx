import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function AboutHeader({ className = '', ...props }) {
    const defaultButtons = [
        { 
            title: "Schedule a Call",
            variant: "secondary",
            href: route('contact'),
        },
        { 
            title: "Learn More",
            variant: "link",
            href: route('trademark-services.overview'),
            iconRight: true
        }
    ];

    const content = {
        heading: "Experienced Trademark Attorney",
        description: "With over a decade of experience in intellectual property law, I specialize in helping businesses protect their brands through comprehensive trademark services. My approach combines legal expertise with a deep understanding of business needs.",
        buttons: defaultButtons,
        firstImage: {
            src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop",
            alt: "Law office desk with documents and laptop"
        },
        secondImage: {
            src: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format&fit=crop",
            alt: "Professional attorney in office"
        },
        thirdImage: {
            src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
            alt: "Legal documents with pen"
        }
    };

    return (
        <section className={`relative overflow-hidden bg-gradient-to-b from-pippin-lighter to-white px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30"></div>
            <div className="container relative">
                <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
                    <h1 className="font-heading text-6xl font-bold text-cod-gray md:text-8xl lg:text-9xl">
                        {content.heading}
                    </h1>
                    <div className="mx-[7.5%] flex flex-col justify-end md:mt-48">
                        <p className="text-base text-cod-gray md:text-lg">
                            {content.description}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            {content.buttons.map((button, index) => (
                                <Link 
                                    key={index} 
                                    href={button.href}
                                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                                        index === 0
                                            ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                                            : "bg-pippin text-cod-gray hover:bg-pippin-light"
                                    }`}
                                >
                                    {button.title}
                                    {button.iconRight && <ChevronRight className="h-4 w-4" />}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1.5fr_1fr] sm:gap-8">
                    <div className="mt-[70%] w-full">
                        <img
                            className="aspect-square size-full rounded-lg object-cover shadow-lg"
                            src={content.firstImage.src}
                            alt={content.firstImage.alt}
                        />
                    </div>
                    <div className="w-full">
                        <img
                            className="aspect-[2/3] size-full rounded-lg object-cover shadow-lg"
                            src={content.secondImage.src}
                            alt={content.secondImage.alt}
                        />
                    </div>
                    <div className="w-full">
                        <img
                            className="aspect-[2/3] size-full rounded-lg object-cover shadow-lg"
                            src={content.thirdImage.src}
                            alt={content.thirdImage.alt}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
