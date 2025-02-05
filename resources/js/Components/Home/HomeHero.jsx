import React from 'react';
import { Link } from '@inertiajs/react';
import { useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeHeroDefaults = {
    heading: "Your Partner for Comprehensive Trademark Protection",
    description: "At Hebert-Thomas Law, PLLC, we are dedicated to providing exceptional legal services tailored to the unique needs of Texas businesses and individuals. Our mission is to empower our clients with the knowledge and support they need to navigate the complexities of the law.",
    buttons: [
        { 
            title: "Schedule a Call",
            href: "/contact",
            variant: "primary"
        },
        { 
            title: "Learn More",
            href: "/about",
            variant: "secondary"
        }
    ],
    imageLeft: {
        src: "/images/home/hero/home-1.jpg",
        alt: "Professional business meeting"
    },
    imageCenter: {
        src: "/images/home/hero/h-hero-3.jpg",
        alt: "Startup team collaboration"
    },
    imageRight: {
        src: "/images/home/hero/h-hero-4.jpg",
        alt: "Modern office environment"
    }
};

export default function HomeHero(props) {
    const { heading, description, buttons, imageLeft, imageCenter, imageRight } = {
        ...HomeHeroDefaults,
        ...props
    };

    const { scrollYProgress } = useScroll();

    const isMobile = useMediaQuery("(max-width: 767px)");
    const isTablet = useMediaQuery("(max-width: 991px)");

    const leftImageTranslate = {
        y: useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? ["-20.5%", "0%"] : isTablet ? ["-14%", "0%"] : ["-16%", "0%"]
        )
    };

    const centerImageTranslate = {
        y: useTransform(
            scrollYProgress,
            [0, 1],
            isMobile ? ["19%", "0%"] : isTablet ? ["14%", "0%"] : ["15.5%", "0%"]
        )
    };

    const rightImageTranslate = {
        y: useTransform(
            scrollYProgress,
            [0, 0.5],
            isMobile ? ["26%", "-20%"] : isTablet ? ["8%", "-20%"] : ["12%", "-20%"]
        )
    };

    return (
        <section className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
                    <div className="mx-auto w-full max-w-lg">
                        <h1 className="mb-5 font-heading text-6xl font-bold text-cod-gray md:mb-6 md:text-9xl lg:text-10xl">
                            {heading}
                        </h1>
                        <p className="md:text-md font-sans text-cod-gray-light">
                            {description}
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-4 md:mt-8">
                            {buttons.map((button, index) => (
                                <Link
                                    key={index}
                                    href={button.href}
                                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                                        button.variant === "primary"
                                            ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                                            : "bg-pippin text-cod-gray hover:bg-pippin-light"
                                    }`}
                                >
                                    {button.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center gap-6 sm:gap-8 md:gap-0">
                    <motion.div 
                        className="absolute bottom-0 left-0 z-10 w-2/5" 
                        style={leftImageTranslate}
                    >
                        <img
                            src={imageLeft.src}
                            alt={imageLeft.alt}
                            className="aspect-square size-full rounded-lg object-cover"
                        />
                    </motion.div>
                    <motion.div 
                        className="mx-[10%] mb-[10%] w-1/2" 
                        style={centerImageTranslate}
                    >
                        <img
                            src={imageCenter.src}
                            alt={imageCenter.alt}
                            className="aspect-square size-full rounded-lg object-cover"
                        />
                    </motion.div>
                    <motion.div 
                        className="absolute right-0 top-[10%] w-2/5" 
                        style={rightImageTranslate}
                    >
                        <img
                            src={imageRight.src}
                            alt={imageRight.alt}
                            className="aspect-[4/3] size-full rounded-lg object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
