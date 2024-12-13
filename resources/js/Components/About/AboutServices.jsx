import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function AboutServices({ 
    tagline,
    heading,
    description,
    cardsSmall,
    cardBig,
    className = "",
    ...props 
}) {
    const content = {
        tagline: tagline || "Our Services",
        heading: heading || "Legal Expertise You Can Trust",
        description: description || "Comprehensive intellectual property and business law services tailored to protect and grow your business.",
        cardsSmall: cardsSmall || [
            {
                tagline: "Trademark Services",
                image: {
                    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
                    alt: "Trademark documentation on desk",
                },
                heading: "Trademark Registration & Protection",
                description: "Secure your brand identity with comprehensive trademark services, from search and registration to monitoring and enforcement.",
                button: {
                    title: "Learn More",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="h-4 w-4" />,
                }
            },
            {
                tagline: "IP Strategy",
                image: {
                    src: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1000",
                    alt: "Strategic planning session",
                },
                heading: "Strategic IP Portfolio Management",
                description: "Develop and maintain a strong IP portfolio that aligns with your business goals and provides competitive advantages.",
                button: {
                    title: "Learn More",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="h-4 w-4" />,
                }
            }
        ],
        cardBig: cardBig || {
            tagline: "Legal Consultation",
            image: {
                src: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?auto=format&fit=crop&q=80&w=1000",
                alt: "Legal consultation meeting",
            },
            heading: "Personalized Legal Solutions",
            description: "Get expert legal guidance tailored to your specific needs. We work closely with you to understand your business and provide strategic solutions that protect your interests and support your growth.",
            buttons: [
                { 
                    title: "Schedule Consultation",
                    variant: "secondary"
                },
                {
                    title: "Learn More",
                    variant: "link",
                    size: "link",
                    iconRight: <ChevronRight className="h-4 w-4" />,
                }
            ]
        }
    };

    return (
        <section className={`bg-gallery px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="mb-12 md:mb-18 lg:mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mx-auto max-w-lg text-center">
                        <p className="mb-3 font-semibold text-cod-gray md:mb-4">{content.tagline}</p>
                        <h2 className="font-heading mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                            {content.heading}
                        </h2>
                        <p className="text-cod-gray/90 md:text-lg">{content.description}</p>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 gap-6 md:gap-8">
                    <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
                        {content.cardsSmall.map((card, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="flex flex-col overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-lg md:grid md:grid-cols-2"
                            >
                                <div className="block flex-col justify-center p-6 md:flex">
                                    <div>
                                        <p className="mb-2 font-semibold text-cod-gray">{card.tagline}</p>
                                        <h3 className="mb-2 text-xl font-bold text-cod-gray md:text-2xl">{card.heading}</h3>
                                        <p className="text-cod-gray/90">{card.description}</p>
                                    </div>
                                    <div className="mt-5 flex items-center gap-4 md:mt-6">
                                        <Button {...card.button}>{card.button.title}</Button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <img src={card.image.src} alt={card.image.alt} className="h-full w-full object-cover" />
                                </div>
                            </motion.div>
                        ))}
                        <motion.div 
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col items-stretch overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-lg lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
                        >
                            <div className="block flex-1 flex-col items-stretch justify-center p-6 md:flex md:p-8 lg:p-12">
                                <div>
                                    <p className="mb-2 font-semibold text-cod-gray">{content.cardBig.tagline}</p>
                                    <h3 className="font-heading mb-5 text-4xl font-bold leading-[1.2] text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
                                        {content.cardBig.heading}
                                    </h3>
                                    <p className="text-cod-gray/90">{content.cardBig.description}</p>
                                </div>
                                <div className="mt-6 flex items-center gap-4 md:mt-8">
                                    {content.cardBig.buttons.map((button, index) => (
                                        <Button key={index} {...button}>
                                            {button.title}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <img
                                    src={content.cardBig.image.src}
                                    alt={content.cardBig.image.alt}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
