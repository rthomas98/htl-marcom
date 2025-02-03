import React, { useState } from 'react';
import { Input } from "@relume_io/relume-ui";
import { Link } from '@inertiajs/react';
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
                            <motion.div 
                                className="mt-6 w-full max-w-sm md:mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <form
                                    className="rb-4 mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4"
                                    onSubmit={handleSubmit}
                                >
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={content.inputPlaceholder}
                                        value={emailInput}
                                        onChange={(e) => setEmailInput(e.target.value)}
                                        className="bg-white/10 text-white placeholder:text-white/60 focus:border-pippin"
                                    />
                                    <Link
                                        href={content.button.href}
                                        className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                                            content.button.variant === 'primary'
                                                ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                                                : "bg-pippin text-cod-gray hover:bg-pippin-light"
                                        }`}
                                    >
                                        {content.button.title}
                                    </Link>
                                </form>
                                <div dangerouslySetInnerHTML={{ __html: content.termsAndConditions }} />
                            </motion.div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <img 
                            src={content.image.src} 
                            className="h-[300px] w-full rounded-lg object-cover shadow-lg md:h-[400px] lg:h-[500px]" 
                            alt={content.image.alt} 
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
