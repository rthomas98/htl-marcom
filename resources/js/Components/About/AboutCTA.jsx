import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function AboutCTA({ 
    heading,
    description,
    buttons,
    image,
    className = "",
    ...props 
}) {
    const content = {
        heading: heading || "Protect Your Intellectual Property",
        description: description || "Schedule a consultation today to discuss your intellectual property needs and discover how we can help protect and grow your business assets.",
        buttons: buttons || [
            { 
                title: "Schedule Consultation",
                variant: "primary"
            },
            { 
                title: "Learn More",
                variant: "secondary-alt",
                iconRight: <ChevronRight className="h-4 w-4" />
            }
        ],
        image: image || {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
            alt: "Modern law office interior",
        }
    };

    return (
        <section className={`relative overflow-hidden bg-cod-gray px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30"></div>
            <div className="container relative z-10">
                <motion.div 
                    className="w-full max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="font-heading mb-5 text-5xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
                        {content.heading}
                    </h2>
                    <p className="text-white/90 md:text-lg">
                        {content.description}
                    </p>
                    <motion.div 
                        className="mt-6 flex flex-wrap gap-4 md:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {content.buttons.map((button, index) => (
                            <Button key={index} {...button}>
                                {button.title}
                            </Button>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
            <div className="absolute inset-0 -z-10">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <img 
                        src={content.image.src} 
                        className="h-full w-full object-cover" 
                        alt={content.image.alt} 
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-r from-cod-gray/90 to-cod-gray/70" />
            </div>
        </section>
    );
}
