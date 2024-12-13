import React from 'react';
import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from '@relume_io/relume-ui';

export default function HomeHero() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const { scrollYProgress } = useScroll();

    const createTransform = (mobileValues, desktopValues) =>
        useTransform(scrollYProgress, [0, 1], isMobile ? mobileValues : desktopValues);

    const leftImageGroup = {
        x: createTransform(['0vw', '-25vw'], ['0vw', '-32vw']),
    };

    const centerImageContainer = {
        x: createTransform(['0vw', '-25vw'], ['0vw', '-32vw']),
        width: createTransform(['50vw', '100vw'], ['36vw', '100vw']),
        height: createTransform(['60vh', '100vh'], ['80vh', '100vh']),
    };

    const rightImageGroup = {
        x: createTransform(['0vw', '25vw'], ['0vw', '32vw']),
    };

    const images = [
        {
            src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Professional business meeting',
        },
        {
            src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Startup team collaboration',
        },
        {
            src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Modern office environment',
        },
        {
            src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Business strategy session',
        },
        {
            src: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Tech entrepreneur working',
        },
        {
            src: 'https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Creative business discussion',
        },
        {
            src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: 'Business leadership meeting',
        },
    ];

    return (
        <section className="relative h-[250vh]">
            <div className="px-[5%] pt-16 md:pt-24 lg:pt-28">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto w-full max-w-2xl text-center">
                        <h1 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                        Your Partner for Comprehensive Trademark Protection
                        </h1>
                        <p className="text-lg text-gray-600 md:text-xl">
                        At Hebert-Thomas Law, PLLC, we are dedicated to providing exceptional legal services tailored to the unique needs of Texas businesses and individuals. Our mission is to empower our clients with the knowledge and support they need to navigate the complexities of the law.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                            <Link
                                href="/contact"
                                className="rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
                            >
                                Schedule Consultation
                            </Link>
                            <Link
                                href="/about"
                                className="rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden">
                <div className="z-10 grid h-[60vh] w-full grid-flow-col grid-cols-[25%_50%_25%] content-center items-center justify-center md:h-[70vh] md:grid-cols-[32%_36%_32%] lg:h-[80vh]">
                    <motion.div
                        className="grid grid-flow-col grid-cols-1 items-center justify-items-end gap-4 justify-self-end px-4"
                        style={leftImageGroup}
                    >
                        <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
                            <img className="aspect-[2/3] w-full rounded-lg object-cover" {...images[0]} />
                        </div>

                        <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
                            <div className="relative">
                                <img className="aspect-square w-full rounded-lg object-cover" {...images[1]} />
                            </div>
                            <div className="relative">
                                <img className="aspect-[3/4] w-full rounded-lg object-cover" {...images[2]} />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="relative" style={centerImageContainer}>
                        <img className="size-full rounded-lg object-cover" {...images[3]} />
                    </motion.div>

                    <motion.div
                        className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
                        style={rightImageGroup}
                    >
                        <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
                            <div className="relative w-[40vw] sm:w-auto">
                                <img className="aspect-[3/4] w-full rounded-lg object-cover" {...images[4]} />
                            </div>
                            <div className="relative w-[40vw] sm:w-auto">
                                <img className="aspect-square w-full rounded-lg object-cover" {...images[5]} />
                            </div>
                        </div>

                        <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
                            <img className="aspect-[2/3] w-full rounded-lg object-cover" {...images[6]} />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 mt-[100vh]" />
        </section>
    );
}
