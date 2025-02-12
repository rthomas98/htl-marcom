import React from "react";
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function TrademarkServices({ className = "", ...props }) {
    const content = {
        tagline: "Our Services",
        heading: "Comprehensive Trademark Solutions",
        description:
            "From initial search and clearance to registration and enforcement, we provide end-to-end trademark services to protect your intellectual property rights.",
        sections: [
            {
                heading: "Search & Clearance",
                description:
                    "Comprehensive trademark searches and clearance reports to identify potential conflicts and assess registration risks. We analyze similar marks, common law usage, and domain names.",
                image: {
                    src: "/images/tm/overview/pexels-rethaferguson-3810788.jpg",
                    alt: "Trademark search and analysis"
                }
            },
            {
                heading: "Registration & Protection",
                description:
                    "Strategic trademark filing and prosecution services. We handle USPTO office actions, maintain registrations, and develop protection strategies tailored to your business needs.",
                image: {
                    src: "/images/tm/overview/pexels-rethaferguson-3810795.jpg",
                    alt: "Trademark registration and protection"
                }
            },
            {
                heading: "International Protection",
                description:
                    "Global trademark portfolio management and international filing strategies. We coordinate with foreign counsel to secure protection in key markets worldwide.",
                image: {
                    src: "/images/tm/overview/pexels-silverkblack-23496696.jpg",
                    alt: "International trademark protection"
                }
            },
        ],
        buttons: [
            { 
                title: "Learn More About Me",
                variant: "secondary",
                href: "/about-me", 
                className: "bg-white text-cod-gray hover:bg-cod-gray hover:text-white rounded-full"
            },
        ],
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className={`bg-gallery px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="flex flex-col"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="mb-12 md:mb-18 lg:mb-20"
                        variants={itemVariants}
                    >
                        <div className="w-full max-w-lg">
                            <p className="font-heading mb-3 font-semibold text-cod-gray/80 md:mb-4">
                                {content.tagline}
                            </p>
                            <h2 className="font-heading mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                                {content.heading}
                            </h2>
                            <p className="text-cod-gray/80 md:text-md">
                                {content.description}
                            </p>
                        </div>
                    </motion.div>
                    <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        {content.sections.map((section, index) => (
                            <motion.div 
                                key={index} 
                                className="flex w-full flex-col group"
                                variants={itemVariants}
                            >
                                <div className="relative mb-5 overflow-hidden rounded-lg md:mb-6">
                                    <div className="absolute inset-0 bg-cod-gray/10 transition-colors duration-300 group-hover:bg-cod-gray/0"></div>
                                    <img 
                                        src={section.image.src} 
                                        alt={section.image.alt}
                                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-heading mb-5 text-2xl font-bold text-cod-gray md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    {section.heading}
                                </h3>
                                <p className="text-cod-gray/80">
                                    {section.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        className="mt-8 flex flex-wrap gap-4"
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                    >
                        {content.buttons.map((button, index) => {
                            const { href, ...buttonProps } = button;
                            return (
                                <Link key={index} href={href}>
                                    <Button {...buttonProps}>
                                        {button.title}
                                    </Button>
                                </Link>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
