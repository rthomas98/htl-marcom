import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const BigCard = ({ tagline, image, heading, description, buttons }) => {
    return (
        <div className="flex flex-col border border-cod-gray/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:col-span-2">
            <div className="block flex-1 p-6 sm:flex sm:flex-col sm:justify-center md:p-8 lg:p-12">
                <div>
                    <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-cod-gray-light">{tagline}</p>
                    <h2 className="mb-5 font-heading text-4xl font-bold leading-[1.2] text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                        {heading}
                    </h2>
                    <p className="text-lg text-gray-600">{description}</p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                    {buttons.map((button, index) => (
                        <Button key={index} as={Link} {...button}>
                            {button.title}
                        </Button>
                    ))}
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center self-start">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </div>
        </div>
    );
};

const SmallCard = ({ tagline, image, heading, description, button }) => {
    return (
        <div className="flex flex-col border border-cod-gray/10 bg-white shadow-sm transition-all duration-300 hover:shadow-md sm:col-span-2 sm:grid sm:auto-cols-fr sm:grid-cols-2">
            <div className="flex size-full flex-col items-center justify-center self-start">
                <img src={image.src} alt={image.alt} className="h-full w-full object-cover" />
            </div>
            <div className="block flex-col justify-center p-6 sm:flex">
                <div>
                    <p className="mb-2 font-heading text-sm font-semibold uppercase tracking-wider text-cod-gray-light">{tagline}</p>
                    <h2 className="mb-2 font-heading text-xl font-bold text-cod-gray md:text-2xl">{heading}</h2>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="mt-5 md:mt-6">
                    <Button as={Link} {...button}>{button.title}</Button>
                </div>
            </div>
        </div>
    );
};

const FeatureSection = ({ icon, heading, description, button }) => {
    return (
        <div className="flex flex-col justify-between border border-cod-gray/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8 lg:p-6">
            <div>
                <div className="mb-3 md:mb-4">
                    <img src={icon.src} className="size-8" alt={icon.alt} />
                </div>
                <h2 className="mb-2 font-heading text-xl font-bold text-cod-gray md:text-2xl">{heading}</h2>
                <p className="text-gray-600">{description}</p>
            </div>
            <div className="mt-5 md:mt-6">
                <Button as={Link} {...button}>{button.title}</Button>
            </div>
        </div>
    );
};

export default function FeaturedSection() {
    const content = {
        tagline: "Uplift and inspire others to achieve their goals.",
        heading: "Your Legal Partner in Texas",
        description: "We provide a wide range of comprehensive legal services tailored specifically for both businesses and individuals, ensuring that all your legal needs are met with the utmost professionalism and expertise.",
        smallCard: {
            tagline: "Integrity is the quality of being honest and moral.",
            image: {
                src: "https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                alt: "Professional legal consultation",
            },
            heading: "Your Trustworthy Legal Advisors",
            description: "Committed to your success and peace of mind.",
            button: {
                href: "/about",
                title: "About Our Firm",
                variant: "link",
                size: "link",
                iconRight: <ChevronRight className="ml-1" />,
            },
        },
        bigCard: {
            tagline: "Skill and knowledge in a specific field or subject.",
            image: {
                src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
                alt: "Modern legal office meeting",
            },
            heading: "Tailored Legal Solutions for You",
            description: "Our team is dedicated to offering customized legal services tailored specifically to address your individual needs and challenges, ensuring you receive the attention and support you deserve.",
            buttons: [
                { 
                    href: "/services",
                    title: "Our Services",
                    variant: "secondary"
                },
                {
                    href: "/contact",
                    title: "Contact Us",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="ml-1" />,
                },
            ],
        },
        bigCard2: {
            tagline: "Assistance and support for various needs and requests.",
            image: {
                src: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80",
                alt: "Client consultation meeting",
            },
            heading: "Ready to Assist You",
            description: "We invite you to contact us to discuss your specific legal needs. Our team is here to understand your situation and explore how we can provide the support and assistance you require for your legal matters.",
            buttons: [
                { 
                    href: "/contact",
                    title: "Get Started",
                    variant: "secondary"
                },
                {
                    href: "/services",
                    title: "View Services",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="ml-1" />,
                },
            ],
        },
        featureSections: [
            {
                icon: {
                    src: "/images/icons/services.svg",
                    alt: "Services Icon",
                },
                heading: "Our Service Areas",
                description: "Explore the various ways we can help you achieve your goals and enhance your experience today.",
                button: {
                    href: "/services",
                    title: "View All Services",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="ml-1" />,
                },
            },
            {
                icon: {
                    src: "/images/icons/testimonials.svg",
                    alt: "Testimonials Icon",
                },
                heading: "What Our Clients Say",
                description: "Ensuring our clients are satisfied is our highest priority and commitment to excellence.",
                button: {
                    href: "/testimonials",
                    title: "Read Testimonials",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="ml-1" />,
                },
            },
        ],
    };

    return (
        <section className="bg-pippin px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
                    <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wider text-cod-gray-light md:mb-4">
                        {content.tagline}
                    </p>
                    <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                        {content.heading}
                    </h2>
                    <p className="text-lg text-gray-600 md:text-xl">
                        {content.description}
                    </p>
                </div>
                <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
                    <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
                        <BigCard {...content.bigCard} />
                        {content.featureSections.map((feature, index) => (
                            <FeatureSection key={index} {...feature} />
                        ))}
                    </div>
                    <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8">
                        <SmallCard {...content.smallCard} />
                        <BigCard {...content.bigCard2} />
                    </div>
                </div>
            </div>
        </section>
    );
}
