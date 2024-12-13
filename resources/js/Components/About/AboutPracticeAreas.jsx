import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function AboutPracticeAreas({ 
    tagline,
    heading,
    description,
    sections,
    buttons,
    className = "",
    ...props 
}) {
    const content = {
        tagline: tagline || "Practice Areas",
        heading: heading || "Comprehensive Legal Solutions",
        description: description || "Specialized legal services focused on protecting and growing your intellectual property assets across various industries and business needs.",
        sections: sections || [
            {
                image: {
                    src: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=1000",
                    alt: "Trademark Registration Process",
                },
                heading: "Trademark Registration",
                description: "Expert guidance through the entire trademark registration process, from comprehensive searches to application filing and office action responses.",
            },
            {
                image: {
                    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
                    alt: "IP Portfolio Management",
                },
                heading: "IP Portfolio Management",
                description: "Strategic management of your intellectual property portfolio, including trademark monitoring, maintenance, and enforcement strategies.",
            },
            {
                image: {
                    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
                    alt: "Business Law Services",
                },
                heading: "Business Law Services",
                description: "Comprehensive business law services including contract review, business formation, and legal compliance to protect your company's interests.",
            },
        ],
        buttons: buttons || [
            { 
                title: "Schedule Consultation",
                variant: "primary",
                className: "bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray"
            },
            {
                title: "Learn More",
                variant: "secondary",
                className: "border-2 border-white bg-transparent text-white hover:bg-pippin hover:text-cod-gray hover:border-transparent"
            }
        ]
    };

    return (
        <section className={`bg-mine-shaft px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="mb-12 md:mb-18 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="w-full max-w-lg">
                        <p className="mb-3 font-semibold text-white/90 md:mb-4">{content.tagline}</p>
                        <h2 className="font-heading mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
                            {content.heading}
                        </h2>
                        <p className="text-white/80 md:text-lg">{content.description}</p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {content.sections.map((section, index) => (
                        <motion.div 
                            key={index}
                            variants={sectionVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="flex w-full flex-col"
                        >
                            <div className="mb-6 overflow-hidden rounded-lg shadow-lg md:mb-8">
                                <img 
                                    src={section.image.src} 
                                    alt={section.image.alt}
                                    className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 md:h-56 lg:h-64" 
                                />
                            </div>
                            <h3 className="font-heading mb-5 text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                {section.heading}
                            </h3>
                            <p className="text-white/80">{section.description}</p>
                            <Button 
                                variant="secondary"
                                className="mt-6 bg-pippin text-cod-gray hover:bg-white hover:text-cod-gray"
                                href="#contact"
                            >
                                Learn More
                            </Button>
                        </motion.div>
                    ))}
                </div>
                <motion.div 
                    className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {content.buttons.map((button, index) => (
                        <Button key={index} {...button} variant={index === 0 ? "primary" : "secondary-alt"}>
                            {button.title}
                        </Button>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
