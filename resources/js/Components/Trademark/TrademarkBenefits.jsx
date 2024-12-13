import React from "react";
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Shield, Scale, Clock, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TrademarkBenefits({ className = "", ...props }) {
    const content = {
        tagline: "Why Choose Us",
        heading: "Expert Trademark Protection",
        description:
            "With years of experience in intellectual property law, we provide comprehensive trademark services tailored to protect and enhance your brand value. Our expertise ensures your intellectual property rights are secured effectively.",
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "primary",
                className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
            },
            {
                title: "Learn More",
                variant: "link",
                size: "link",
                iconRight: <ChevronRight className="size-4" />,
                className: "text-cod-gray hover:text-cod-gray/80"
            },
        ],
        features: [
            {
                icon: <Shield className="size-6 text-cod-gray" />,
                heading: "Comprehensive Protection",
                description:
                    "Our strategic approach ensures your trademarks are protected across all relevant markets and jurisdictions, safeguarding your brand's future growth.",
            },
            {
                icon: <Scale className="size-6 text-cod-gray" />,
                heading: "Legal Expertise",
                description:
                    "With deep knowledge of trademark law and USPTO procedures, we navigate complex legal requirements to secure and maintain your trademark rights.",
            },
            {
                icon: <Clock className="size-6 text-cod-gray" />,
                heading: "Efficient Processing",
                description:
                    "Our streamlined procedures and proactive approach help expedite trademark applications while maintaining the highest quality standards.",
            },
            {
                icon: <Award className="size-6 text-cod-gray" />,
                heading: "Proven Success",
                description:
                    "Our track record demonstrates successful trademark registrations and enforcement actions across diverse industries and markets.",
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
        <section className={`bg-white px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="grid auto-cols-fr grid-cols-1 items-start justify-start gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-12 md:gap-y-16 lg:gap-x-20"
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
                        <p className="text-cod-gray/80 md:text-md">
                            {content.description}
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            {content.buttons.map((button, index) => (
                                <Button key={index} {...button}>
                                    {button.title}
                                </Button>
                            ))}
                        </div>
                    </motion.div>
                    <div className="grid w-full auto-cols-fr grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:gap-y-16 lg:gap-x-12">
                        {content.features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className="group"
                            >
                                <div className="mb-5 md:mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="font-heading mb-5 text-2xl font-bold text-cod-gray md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                    {feature.heading}
                                </h3>
                                <p className="text-cod-gray/80">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
