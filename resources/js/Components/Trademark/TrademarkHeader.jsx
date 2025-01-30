import React from "react";
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function TrademarkHeader({ 
    heading = "Comprehensive Trademark Services",
    description = "Protect and grow your brand with our expert trademark services. From registration to enforcement, we provide strategic guidance every step of the way.",
    buttons = [
        {
            title: "Schedule Consultation",
            href: "/schedule-consultation",
            className: "bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray"
        },
        {
            title: "Learn More",
            variant: "secondary",
            href: "/learn-more",
            className: "border-white text-white hover:bg-white hover:text-cod-gray"
        }
    ],
    image = {
        src: "public/images/tm/overview/pexels-alex-green-5699479.jpg",
        alt: "Professional trademark attorney working at desk"
    },
    className = "",
    ...props 
}) {
    return (
        <section className={`bg-cod-gray px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <div className="flex flex-col">
                    <motion.div 
                        className="rb-12 mb-12 md:mb-18 lg:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-full max-w-lg">
                            <h1 className="font-heading mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
                                {heading}
                            </h1>
                            <p className="text-white/80 md:text-md">
                                {description}
                            </p>
                            <motion.div 
                                className="mt-6 flex flex-wrap gap-4 md:mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                {buttons.map((button, index) => {
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
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 bg-[url('/images/noise.png')] opacity-30"></div>
                            <img 
                                src={image.src} 
                                className="h-[300px] w-full rounded-lg object-cover shadow-lg md:h-[400px] lg:h-[500px]" 
                                alt={image.alt} 
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
