import React from "react";
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Search, FileCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function TrademarkProcess({ className = "", ...props }) {
    const content = {
        tagline: "Our Process",
        heading: "Protecting Your Brand",
        description:
            "We guide you through every step of the trademark process, from initial consultation to registration and beyond, ensuring your intellectual property is properly protected.",
        sections: [
            {
                heading: "Initial Consultation",
                description:
                    "We begin with a comprehensive discussion of your brand, business goals, and trademark needs. Our experts provide initial guidance and develop a customized protection strategy.",
                icon: <Search className="size-6 text-white" />
            },
            {
                heading: "Application & Filing",
                description:
                    "Our team handles the entire trademark application process, preparing comprehensive documentation and responding to any office actions or examiner inquiries promptly.",
                icon: <FileCheck className="size-6 text-white" />
            },
            {
                heading: "Monitoring & Maintenance",
                description:
                    "Once your trademark is registered, we provide ongoing monitoring and maintenance services to ensure your rights are protected and renewals are filed on time.",
                icon: <Shield className="size-6 text-white" />
            },
        ],
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "primary",
                href: "/contact"
            },
            {
                title: "Learn More",
                variant: "secondary",
                size: "link",
                iconRight: <ChevronRight className="size-4" />,
                href: "/about-me"
            },
        ],
        backgroundImage: "/images/tm/overview/shutterstock_2510293451.jpg"
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
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
        <section 
            className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className}`} 
            {...props}
            style={{
                backgroundImage: `url(${content.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-cod-gray/75" />
            <div className="container relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="mb-12 max-w-lg text-start text-white md:mb-18 lg:mb-20"
                        variants={itemVariants}
                    >
                        <p className="font-heading mb-3 font-semibold opacity-80 md:mb-4">
                            {content.tagline}
                        </p>
                        <h2 className="font-heading mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            {content.heading}
                        </h2>
                        <p className="md:text-md opacity-80">
                            {content.description}
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                        {content.sections.map((section, index) => (
                            <motion.div 
                                key={index} 
                                className="w-full group"
                                variants={itemVariants}
                            >
                                <div className="mb-5 inline-block md:mb-6">
                                    {section.icon}
                                </div>
                                <div>
                                    <h3 className="font-heading mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                        {section.heading}
                                    </h3>
                                    <p className="text-white opacity-80">
                                        {section.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div 
                        className="mt-12 flex flex-wrap gap-4 md:mt-18 lg:mt-20"
                        variants={itemVariants}
                    >
                        {content.buttons.map((button, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                                        button.variant === 'primary'
                                            ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                                            : "bg-pippin text-cod-gray hover:bg-pippin-light"
                                    }`}
                                >
                                    {button.title}
                                </Link>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
