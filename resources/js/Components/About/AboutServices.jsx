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
                    href: "/services/trademark",
                    className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray flex items-center gap-2",
                    iconRight: <ChevronRight className="h-4 w-4" />
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
                    href: "/services/ip-strategy",
                    className: "rounded-full px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:text-cod-gray flex items-center gap-2",
                    iconRight: <ChevronRight className="h-4 w-4" />
                }
            }
        ],
        cardBig: cardBig || {
            tagline: "Business Law",
            image: {
                src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2000",
                alt: "Business meeting",
            },
            heading: "Comprehensive Business Law Services",
            description: "From startup formation to ongoing legal support, we provide the guidance your business needs to thrive in today's competitive landscape.",
            button: {
                title: "Schedule Consultation",
                variant: "secondary",
                href: "/contact",
                className: "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-lightest hover:text-cod-gray flex items-center"
            }
        }
    };

    return (
        <section className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold text-cod-gray md:mb-4">{content.tagline}</p>
                        <h2 className="font-heading text-5xl font-bold text-cod-gray md:text-7xl lg:text-8xl">{content.heading}</h2>
                    </div>
                    <p className="text-base text-cod-gray md:text-lg">{content.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {content.cardsSmall.map((card, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col"
                            variants={cardVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="mb-6 overflow-hidden rounded-2xl">
                                <img
                                    src={card.image.src}
                                    alt={card.image.alt}
                                    className="aspect-video w-full object-cover"
                                />
                            </div>
                            <p className="mb-3 font-semibold text-cod-gray md:mb-4">{card.tagline}</p>
                            <h3 className="mb-5 font-heading text-2xl font-bold text-cod-gray md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                {card.heading}
                            </h3>
                            <p className="mb-6 text-cod-gray">{card.description}</p>
                            <Button {...card.button}>
                                {card.button.title}
                                {card.button.iconRight}
                            </Button>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    className="mt-8 overflow-hidden rounded-2xl bg-cod-gray p-8 md:mt-12 md:p-12 lg:mt-16"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
                        <div>
                            <img
                                src={content.cardBig.image.src}
                                alt={content.cardBig.image.alt}
                                className="aspect-video w-full rounded-lg object-cover"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="mb-3 font-semibold text-white md:mb-4">{content.cardBig.tagline}</p>
                            <h3 className="mb-5 font-heading text-2xl font-bold text-white md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                                {content.cardBig.heading}
                            </h3>
                            <p className="mb-6 text-white/90">{content.cardBig.description}</p>
                            <Button {...content.cardBig.button}>
                                {content.cardBig.button.title}
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
