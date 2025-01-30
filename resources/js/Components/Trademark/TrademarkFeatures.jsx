import React from "react";
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Search, Shield, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function TrademarkFeatures({ className = "", ...props }) {
    const content = {
        tagline: "Why Choose Us",
        heading: "Expert Trademark Protection",
        description:
            "Our experienced attorneys provide comprehensive trademark services tailored to your business needs. We combine legal expertise with strategic thinking to protect and enhance your brand value.",
        features: [
            {
                icon: <Search className="size-6 text-gray-500" />,
                paragraph: "Thorough trademark searches and comprehensive clearance reports to minimize registration risks.",
            },
            {
                icon: <Shield className="size-6 text-gray-500" />,
                paragraph: "Strategic trademark portfolio management and proactive brand protection strategies.",
            },
            {
                icon: <Clock className="size-6 text-gray-500" />,
                paragraph: "Efficient handling of USPTO office actions and timely registration maintenance.",
            },
            {
                icon: <Award className="size-6 text-gray-500" />,
                paragraph: "Experienced representation in trademark disputes and TTAB proceedings.",
            },
        ],
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "primary",
                className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray hover:border-pippin rounded-full",
                href: "/contact"
            },
            {
                title: "Learn More",
                variant: "link",
                size: "link",
                iconRight: <ChevronRight className="size-4" />,
                className: "text-cod-gray hover:text-cod-gray/80 inline-flex items-center p-3",
                href: "/trademark-services/registration"
            },
        ],
        image: {
            src: "/images/tm/overview/pexels-marcus-aurelius-4063789.jpg",
            alt: "Trademark attorney reviewing documents",
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
        <section className={`bg-white px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants}>
                        <p className="font-heading mb-3 font-semibold text-cod-gray/80 md:mb-4">
                            {content.tagline}
                        </p>
                        <h2 className="font-heading mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                            {content.heading}
                        </h2>
                        <p className="mb-5 text-base text-cod-gray/80 md:mb-6 md:text-md">
                            {content.description}
                        </p>
                        <ul className="grid grid-cols-1 gap-6 py-2">
                            {content.features.map((feature, index) => (
                                <motion.li 
                                    key={index} 
                                    className="flex items-start group"
                                    variants={itemVariants}
                                >
                                    <div className="mr-4 flex-none self-start transition-colors duration-200">
                                        {feature.icon}
                                    </div>
                                    <span className="text-cod-gray/80">{feature.paragraph}</span>
                                </motion.li>
                            ))}
                        </ul>
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
