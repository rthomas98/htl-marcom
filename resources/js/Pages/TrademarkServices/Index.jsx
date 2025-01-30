import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { motion } from 'framer-motion';
import { Shield, Search, Globe, Gavel, LineChart } from 'lucide-react';
import { Button } from '@relume_io/relume-ui';

export default function TrademarkServices() {
    const services = [
        {
            icon: <Search className="size-8 text-cod-gray" />,
            title: "Trademark Search & Clearance",
            description: "Comprehensive trademark availability searches to identify potential conflicts and assess registration likelihood.",
            features: [
                "Thorough USPTO database search",
                "Common law trademark search",
                "International trademark databases",
                "Detailed clearance report"
            ]
        },
        {
            icon: <Shield className="size-8 text-cod-gray" />,
            title: "Trademark Registration",
            description: "Expert guidance through the entire trademark registration process with the USPTO and international offices.",
            features: [
                "Application preparation",
                "Office action responses",
                "Registration maintenance",
                "Portfolio management"
            ]
        },
        {
            icon: <LineChart className="size-8 text-cod-gray" />,
            title: "Trademark Monitoring",
            description: "Proactive monitoring services to protect your trademark rights and prevent unauthorized use.",
            features: [
                "Continuous market monitoring",
                "Similar mark alerts",
                "Domain name monitoring",
                "Social media tracking"
            ]
        },
        {
            icon: <Gavel className="size-8 text-cod-gray" />,
            title: "Trademark Enforcement",
            description: "Strategic enforcement of your trademark rights against infringement and unauthorized use.",
            features: [
                "Cease and desist letters",
                "TTAB proceedings",
                "Settlement negotiations",
                "Litigation support"
            ]
        },
        {
            icon: <Globe className="size-8 text-cod-gray" />,
            title: "International Trademarks",
            description: "Comprehensive international trademark protection strategies for global brand expansion.",
            features: [
                "Madrid Protocol filings",
                "Foreign direct filings",
                "International strategy",
                "Local counsel coordination"
            ]
        }
    ];

    return (
        <MarcomLayout
            title="Trademark Services | Hebert Thomas Law"
            description="Comprehensive trademark services including search, registration, monitoring, and enforcement. Protect your brand with experienced trademark attorneys."
        >
            {/* Hero Section */}
            <section className="bg-cod-gray px-[5%] py-16 md:py-24 lg:py-32">
                <div className="container mx-auto">
                    <motion.div 
                        className="mx-auto max-w-3xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-heading mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                            Protect Your Brand with Expert Trademark Services
                        </h1>
                        <p className="mb-8 text-lg text-white/80 md:text-xl">
                            Comprehensive trademark protection strategies tailored to your business needs. 
                            From search to registration and enforcement, we're here to protect your intellectual property.
                        </p>
                        <Button 
                            className="bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray rounded-full"
                            size="lg"
                        >
                            Schedule Consultation
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-gallery px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <motion.div 
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="group relative overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                                    {service.icon}
                                </div>
                                <h3 className="font-heading mb-4 text-2xl font-bold text-cod-gray">
                                    {service.title}
                                </h3>
                                <p className="mb-6 text-cod-gray/80">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-cod-gray/70">
                                            <div className="mr-3 h-1.5 w-1.5 rounded-full bg-pippin"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-white px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <motion.div 
                        className="mx-auto max-w-3xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading mb-6 text-4xl font-bold text-cod-gray md:text-5xl">
                            Ready to Protect Your Brand?
                        </h2>
                        <p className="mb-8 text-cod-gray/80 md:text-lg">
                            Schedule a consultation with our experienced trademark attorneys to discuss 
                            your brand protection needs and develop a comprehensive strategy.
                        </p>
                        <Button 
                            className="bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                            size="lg"
                        >
                            Get Started
                        </Button>
                    </motion.div>
                </div>
            </section>
        </MarcomLayout>
    );
}
