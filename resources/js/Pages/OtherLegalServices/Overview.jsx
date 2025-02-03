import React from 'react'
import { Head } from '@inertiajs/react'
import { Header98 } from '@/Components/Common/Header98'
import { Layout10 } from '@/Components/Common/Layout10'
import { Layout102 } from '@/Components/Common/Layout102'
import { Layout408 } from '@/Components/Common/Layout408'
import { Cta51 } from '@/Components/Common/Cta51'
import { Calendar, Phone } from 'lucide-react'
import MarcomLayout from '@/Layouts/MarcomLayout'

export default function Overview() {
    return (
        <MarcomLayout>
            <Head title="Other Legal Services Overview" />
            <Header98 
                className="bg-cod-gray"
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        icon: Calendar,
                        href: route('contact')
                    },
                    {
                        title: "Explore Services",
                        variant: "secondary-alt",
                        href: route('legal-services.overview')
                    }
                ]}
            />
            <Layout10 
                className="bg-white"
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        href: route('contact')
                    },
                    {
                        title: "Learn More",
                        variant: "link",
                        size: "link",
                        iconRight: true,
                        href: route('legal-services.business-law')
                    }
                ]}
            />
            <Layout102 
                className="bg-gallery"
            />
            <Layout408 
                className="bg-gallery"
                featureSections={[
                    {
                        tagline: "Data Compliance",
                        heading: "Stay Compliant with Privacy Laws",
                        description: "Our team helps you understand and implement data protection requirements, ensuring compliance with GDPR, CCPA, and other relevant privacy regulations.",
                        buttons: [
                            {
                                title: "Schedule Consultation",
                                variant: "primary",
                                href: route('contact')
                            },
                            {
                                title: "Learn More",
                                variant: "link",
                                size: "link",
                                iconRight: true,
                                href: route('legal-services.privacy-data')
                            }
                        ],
                        image: {
                            src: '/images/other/overview/shutterstock_2424675647.jpg',
                            alt: "Data Compliance Services",
                        }
                    },
                    {
                        tagline: "Breach Response",
                        heading: "Incident Response Planning",
                        description: "Develop and implement comprehensive data breach response plans to minimize impact and ensure swift, effective action in case of security incidents.",
                        buttons: [
                            {
                                title: "Schedule Consultation",
                                variant: "primary",
                                href: route('contact')
                            },
                            {
                                title: "Learn More",
                                variant: "link",
                                size: "link",
                                iconRight: true,
                                href: route('legal-services.privacy-data')
                            }
                        ],
                        image: {
                            src: '/images/other/overview/shutterstock_2501343481.jpg',
                            alt: "Data Breach Response Planning",
                        }
                    },
                    {
                        tagline: "Training & Implementation",
                        heading: "Privacy-First Culture",
                        description: "Custom training programs and implementation strategies to build a privacy-aware culture and ensure consistent data protection practices across your organization.",
                        buttons: [
                            {
                                title: "Schedule Consultation",
                                variant: "primary",
                                href: route('contact')
                            },
                            {
                                title: "Learn More",
                                variant: "link",
                                size: "link",
                                iconRight: true,
                                href: route('legal-services.privacy-data')
                            }
                        ],
                        image: {
                            src: '/images/other/overview/shutterstock_2549761167.jpg',
                            alt: "Privacy Training and Implementation",
                        }
                    }
                ]}
            />
            <Cta51 
                className="bg-white"
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "secondary",
                        href: route('contact')
                    },
                ]}
            />
        </MarcomLayout>
    )
}