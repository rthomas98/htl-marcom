import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { motion } from 'framer-motion';
import { Search, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { Button } from '@relume_io/relume-ui';

export default function TrademarkSearch() {
    const features = [
        {
            icon: <Search className="size-6 text-pippin" />,
            title: "Comprehensive Search",
            description: "Full USPTO database search, common law search, and domain name availability check."
        },
        {
            icon: <CheckCircle className="size-6 text-pippin" />,
            title: "Risk Assessment",
            description: "Detailed analysis of potential conflicts and registration likelihood."
        },
        {
            icon: <AlertCircle className="size-6 text-pippin" />,
            title: "Conflict Prevention",
            description: "Early identification of potential trademark issues before investment."
        },
        {
            icon: <FileText className="size-6 text-pippin" />,
            title: "Detailed Report",
            description: "Comprehensive clearance report with recommendations and next steps."
        }
    ];

    return (
        <MarcomLayout
            title="Trademark Search & Clearance | Hebert Thomas Law"
            description="Comprehensive trademark search and clearance services to ensure your brand is available for use and registration."
        >
            <section className="bg-pippin px-[5%] py-16 md:py-24 lg:py-32">
                <div className="container mx-auto">
                    <motion.div 
                        className="mx-auto max-w-3xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-heading mb-6 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
                            Trademark Search & Clearance
                        </h1>
                        <p className="mb-8 text-lg text-white/80 md:text-xl">
                            Ensure your trademark is available before investing in your brand. 
                            Our comprehensive search services help identify potential conflicts early.
                        </p>
                        <Button 
                            className="bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray"
                            size="lg"
                        >
                            Start Your Search
                        </Button>
                    </motion.div>
                </div>
            </section>

            <section className="bg-white px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <motion.div 
                        className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
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
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="group rounded-lg bg-gallery p-8 transition-all duration-300 hover:bg-white hover:shadow-lg"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                                }}
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="font-heading mb-3 text-xl font-bold text-cod-gray">
                                    {feature.title}
                                </h3>
                                <p className="text-cod-gray/80">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="bg-pippin px-[5%] py-16 md:py-24">
                <div className="container mx-auto">
                    <motion.div 
                        className="mx-auto max-w-3xl text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-heading mb-6 text-4xl font-bold text-cod-gray md:text-5xl">
                            Ready to Search Your Trademark?
                        </h2>
                        <p className="mb-8 text-cod-gray/80 md:text-lg">
                            Don't risk your brand investment. Get a comprehensive trademark search 
                            and clearance report from our experienced attorneys.
                        </p>
                        <Button 
                            className="bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                            size="lg"
                        >
                            Schedule Consultation
                        </Button>
                    </motion.div>
                </div>
            </section>
        </MarcomLayout>
    );
}
