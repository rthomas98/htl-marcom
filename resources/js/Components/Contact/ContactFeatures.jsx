import React from "react";
import { motion } from 'framer-motion';
import { Shield, Scale, Clock, Award } from 'lucide-react';

export default function ContactFeatures({ className = "", ...props }) {
    const content = {
        heading: "Experienced Legal Protection for Your Business",
        description:
            "Our firm combines deep legal expertise with a client-focused approach to deliver comprehensive intellectual property and business law solutions. We understand the challenges businesses face and provide strategic guidance to protect and grow your assets.",
        image: {
            src: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=2000",
            alt: "Legal team reviewing documents",
        },
        features: [
            {
                icon: <Shield className="size-6 text-cod-gray" />,
                paragraph: "Comprehensive IP protection strategies tailored to your business needs and industry requirements.",
            },
            {
                icon: <Scale className="size-6 text-cod-gray" />,
                paragraph: "Expert legal counsel with a proven track record in trademark registration and portfolio management.",
            },
            {
                icon: <Clock className="size-6 text-cod-gray" />,
                paragraph: "Efficient and timely service with clear communication throughout the legal process.",
            },
            {
                icon: <Award className="size-6 text-cod-gray" />,
                paragraph: "Recognized expertise in intellectual property law and business litigation.",
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
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <section className={`bg-white px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-x-20"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="order-2 md:order-1"
                        variants={itemVariants}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 -z-10 bg-[url('/images/noise.png')] opacity-30"></div>
                            <img 
                                src={content.image.src} 
                                className="w-full rounded-lg object-cover shadow-lg" 
                                alt={content.image.alt} 
                            />
                        </div>
                    </motion.div>
                    <motion.div 
                        className="order-1 md:order-2"
                        variants={itemVariants}
                    >
                        <h3 className="font-heading mb-5 text-4xl font-bold leading-[1.2] text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                            {content.heading}
                        </h3>
                        <p className="mb-5 text-cod-gray/80 md:mb-6 md:text-md">
                            {content.description}
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2">
                            {content.features.map((feature, index) => (
                                <motion.div 
                                    key={index} 
                                    className="flex items-start group"
                                    variants={itemVariants}
                                >
                                    <div className="mr-4 flex-none self-start transition-colors duration-200 group-hover:text-pippin">
                                        {feature.icon}
                                    </div>
                                    <p className="text-cod-gray/80">{feature.paragraph}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
