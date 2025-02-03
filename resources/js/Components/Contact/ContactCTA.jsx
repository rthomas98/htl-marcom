import React from "react";
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA({ className = "", ...props }) {
    const content = {
        tagline: "Why Choose Us",
        heading: "Expert Legal Counsel for Your Business",
        description:
            "With years of experience in intellectual property and business law, we provide strategic guidance to protect and grow your business assets. Our approach combines legal expertise with a deep understanding of your business needs.",
        subHeadings: [
            {
                title: "Personalized Strategy",
                description:
                    "We develop customized legal strategies tailored to your specific business goals and industry requirements.",
            },
            {
                title: "Proven Track Record",
                description:
                    "Our successful history of trademark registrations and IP portfolio management speaks to our expertise and dedication.",
            },
        ],
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "primary",
                href: route('contact'),
            },
            {
                title: "Learn More",
                variant: "link",
                href: "#",
            },
        ],
        image: {
            src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000",
            alt: "Professional attorney working with client",
        },
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
                    className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <p className="font-heading mb-3 font-semibold text-cod-gray/80 md:mb-4">{content.tagline}</p>
                        <h2 className="font-heading rb-5 mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                            {content.heading}
                        </h2>
                        <p className="mb-6 text-cod-gray/80 md:mb-8 md:text-md">{content.description}</p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            {content.subHeadings.map((subHeading, index) => (
                                <motion.div 
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <h3 className="font-heading mb-3 text-md font-bold leading-[1.4] text-cod-gray md:mb-4 md:text-xl">
                                        {subHeading.title}
                                    </h3>
                                    <p className="text-cod-gray/80">{subHeading.description}</p>
                                </motion.div>
                            ))}
                        </div>
                        <motion.div 
                            className="mt-6 flex flex-wrap items-center gap-4 md:mt-8"
                            variants={itemVariants}
                        >
                            {content.buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                                        button.variant === 'primary'
                                            ? "bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray"
                                            : "border border-white text-white hover:bg-white hover:text-cod-gray"
                                    }`}
                                >
                                    {button.title}
                                </Link>
                            ))}
                        </motion.div>
                    </motion.div>
                    <motion.div 
                        variants={itemVariants}
                        className="relative"
                    >
                        <div className="absolute inset-0 -z-10 bg-[url('/images/noise.png')] opacity-30"></div>
                        <img 
                            src={content.image.src} 
                            className="w-full rounded-lg object-cover shadow-lg" 
                            alt={content.image.alt}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
