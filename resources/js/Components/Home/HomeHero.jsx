import React, { useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from '@relume_io/relume-ui';

export default function HomeHero() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        // Preload critical images
        const preloadImages = ['/images/home/hero/home-1.jpg'];
        preloadImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

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
            src: '/images/home/hero/home-1.jpg',
            alt: 'Professional business meeting',
            priority: true
        },
        {
            src: '/images/home/hero/h-hero-3.jpg',
            alt: 'Startup team collaboration',
            loading: 'lazy'
        },
        {
            src: '/images/home/hero/h-hero-4.jpg',
            alt: 'Modern office environment',
            loading: 'lazy'
        },
        {
            src: '/images/home/hero/h-hero-5.jpg',
            alt: 'Business strategy session',
            loading: 'lazy'
        },
        {
            src: '/images/home/hero/h-hero-6.jpg',
            alt: 'Tech entrepreneur working',
            loading: 'lazy'
        },
        {
            src: '/images/home/hero/h-hreo-7.jpg',
            alt: 'Creative business discussion',
            loading: 'lazy'
        },
        {
            src: '/images/home/hero/h-hreo-8.jpg',
            alt: 'Business leadership meeting',
            loading: 'lazy'
        },
    ];

    const buttons = [
        {
            title: 'Schedule a Call',
            href: '/contact',
            variant: 'primary',
        },
        {
            title: 'Learn More',
            href: '/about',
            variant: 'secondary',
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
                            {buttons.map((button, index) => (
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
                            ))}
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
                            <motion.img
                                src={images[0].src}
                                alt={images[0].alt}
                                className="aspect-[2/3] w-full rounded-lg object-cover"
                                loading={images[0].loading}
                                fetchpriority={images[0].priority ? "high" : "auto"}
                            />
                        </div>

                        <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
                            <div className="relative">
                                <motion.img
                                    src={images[1].src}
                                    alt={images[1].alt}
                                    className="aspect-square w-full rounded-lg object-cover"
                                    loading={images[1].loading}
                                    fetchpriority={images[1].priority ? "high" : "auto"}
                                />
                            </div>
                            <div className="relative">
                                <motion.img
                                    src={images[2].src}
                                    alt={images[2].alt}
                                    className="aspect-[3/4] w-full rounded-lg object-cover"
                                    loading={images[2].loading}
                                    fetchpriority={images[2].priority ? "high" : "auto"}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className="relative" style={centerImageContainer}>
                        <motion.img
                            src={images[3].src}
                            alt={images[3].alt}
                            className="size-full rounded-lg object-cover"
                            loading={images[3].loading}
                            fetchpriority={images[3].priority ? "high" : "auto"}
                        />
                    </motion.div>

                    <motion.div
                        className="grid grid-flow-col items-center justify-items-start gap-4 justify-self-start px-4"
                        style={rightImageGroup}
                    >
                        <div className="relative grid w-[40vw] grid-cols-1 grid-rows-[auto_auto] gap-4 self-center md:w-[18vw]">
                            <div className="relative w-[40vw] sm:w-auto">
                                <motion.img
                                    src={images[4].src}
                                    alt={images[4].alt}
                                    className="aspect-[3/4] w-full rounded-lg object-cover"
                                    loading={images[4].loading}
                                    fetchpriority={images[4].priority ? "high" : "auto"}
                                />
                            </div>
                            <div className="relative w-[40vw] sm:w-auto">
                                <motion.img
                                    src={images[5].src}
                                    alt={images[5].alt}
                                    className="aspect-square w-full rounded-lg object-cover"
                                    loading={images[5].loading}
                                    fetchpriority={images[5].priority ? "high" : "auto"}
                                />
                            </div>
                        </div>

                        <div className="relative hidden md:block md:w-[25vw] lg:w-[20vw]">
                            <motion.img
                                src={images[6].src}
                                alt={images[6].alt}
                                className="aspect-[2/3] w-full rounded-lg object-cover"
                                loading={images[6].loading}
                                fetchpriority={images[6].priority ? "high" : "auto"}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 mt-[100vh]" />
        </section>
    );
}
