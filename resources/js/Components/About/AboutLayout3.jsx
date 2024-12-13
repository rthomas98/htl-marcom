import React from 'react';
import { motion } from 'framer-motion';

const Layout3Defaults = {
    heading: "Long heading is what you see here in this feature section",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
        alt: "Relume placeholder image",
    }
};

export default function AboutLayout3({ 
    heading, 
    description, 
    image,
    className = "",
    ...props 
}) {
    const content = {
        heading: heading || Layout3Defaults.heading,
        description: description || Layout3Defaults.description,
        image: image || Layout3Defaults.image
    };

    return (
        <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`bg-cod-gray px-[5%] py-16 md:py-24 lg:py-28 ${className}`}
            {...props}
        >
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="font-heading mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
                            {content.heading}
                        </h2>
                        <p className="text-base text-white/90 md:text-lg">
                            {content.description}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img 
                            src={content.image.src} 
                            className="w-full rounded-lg object-cover shadow-lg" 
                            alt={content.image.alt} 
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
}
