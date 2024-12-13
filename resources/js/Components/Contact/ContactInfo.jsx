import React from "react";
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactInfo({ className = "", ...props }) {
    const contacts = [
        {
            icon: <Mail className="size-8 text-cod-gray" />,
            title: "Email",
            description: "Send us an email and we'll get back to you within 24 hours.",
            link: {
                label: "contact@hebert-thomas.com",
                url: "mailto:contact@hebert-thomas.com",
            },
        },
        {
            icon: <Phone className="size-8 text-cod-gray" />,
            title: "Phone",
            description: "Call us directly to speak with our legal team.",
            link: {
                label: "(225) 123-4567",
                url: "tel:+12251234567",
            },
        },
        {
            icon: <MapPin className="size-8 text-cod-gray" />,
            title: "Office",
            description: "Visit our office in Baton Rouge, Louisiana.",
            link: {
                label: "123 Main Street, Baton Rouge, LA 70801",
                url: "https://maps.google.com/?q=123+Main+Street+Baton+Rouge+LA+70801",
            },
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
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
        <section className={`bg-gallery px-[5%] py-16 md:py-24 lg:py-28 ${className}`} {...props}>
            <div className="container">
                <motion.div 
                    className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3 md:gap-y-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {contacts.map((contact, index) => (
                        <motion.div 
                            key={index}
                            variants={itemVariants}
                            className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:bg-pippin/10"
                        >
                            <div className="relative z-10">
                                <div className="mb-5 lg:mb-6">{contact.icon}</div>
                                <h3 className="font-heading mb-3 text-2xl font-bold leading-[1.4] text-cod-gray md:text-3xl lg:mb-4 lg:text-4xl">
                                    {contact.title}
                                </h3>
                                <p className="mb-5 text-cod-gray/80 md:mb-6">{contact.description}</p>
                                <a 
                                    className="inline-block text-cod-gray underline decoration-cod-gray/30 transition-colors hover:text-cod-gray/80 hover:decoration-cod-gray/60" 
                                    href={contact.link?.url}
                                    target={contact.link?.url.startsWith('http') ? '_blank' : undefined}
                                    rel={contact.link?.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                                >
                                    {contact.link?.label}
                                </a>
                            </div>
                            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
