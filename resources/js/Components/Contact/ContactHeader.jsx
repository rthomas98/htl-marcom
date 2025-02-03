import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactHeader({ 
    heading,
    description,
    inputPlaceholder,
    termsAndConditions,
    button,
    image,
    className = "",
    ...props 
}) {
    const defaultButton = {
        title: "Schedule Consultation",
        variant: "primary",
        href: route('contact'),
        className: ""
    };

    const content = {
        heading: heading || "Let's Discuss Your Legal Needs",
        description: description || "Schedule a consultation to discuss your intellectual property and business law needs. We're here to help protect and grow your business assets.",
        inputPlaceholder: inputPlaceholder || "Enter your email",
        button: { ...defaultButton, ...button },
        termsAndConditions: termsAndConditions || `
            <p class='text-xs text-white/80'>
                By scheduling a consultation you're confirming that you agree with our
                <a href='#' class='ml-1 text-white hover:text-pippin'>Terms and Conditions</a>.
            </p>
        `,
        image: image || {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
            alt: "Modern law office interior",
        }
    };

    const [emailInput, setEmailInput] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            emailInput,
        });
    };

    return (
        <section className={`relative overflow-hidden bg-cod-gray px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-30"></div>
            <div className="container relative z-10">
                <div className="flex flex-col">
                    <motion.div 
                        className="rb-12 mb-12 md:mb-18 lg:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-full max-w-lg">
                            <h1 className="font-heading mb-5 text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
                                {content.heading}
                            </h1>
                            <p className="text-white/90 md:text-lg">{content.description}</p>
                            
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img 
                            src={content.image.src} 
                            className="h-[300px] w-full rounded-lg object-cover object-top shadow-lg md:h-[400px] lg:h-[500px]" 
                            alt={content.image.alt} 
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
