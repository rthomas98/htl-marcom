import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import { Header98 } from '@/Components/Common/Header98'
import { Layout10 } from '@/Components/Common/Layout10'
import { Layout422 } from '@/Components/Common/Layout422'
import { Layout102 } from '@/Components/Common/Layout102'
import { Layout408 } from '@/Components/Common/Layout408'
import { Cta51 } from '@/Components/Common/Cta51'
import { Calendar, Phone, ChevronRight } from 'lucide-react'

const placeholderImage = '/images/placeholder.svg';

export default function Overview() {
    return (
        <MarcomLayout
            title="Legal Services | Hebert Thomas Law"
            description="Comprehensive legal services for Texas businesses and individuals. Expert guidance in business law, estate planning, and general counsel services."
        >
            <Header98 
                className="bg-cod-gray"
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "Explore Services",
                        variant: "secondary-alt"
                    }
                ]}
            />
            <Layout10 
                className="bg-white"
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "Learn More",
                        variant: "link",
                        size: "link",
                        iconRight: true,
                        onClick: () => window.location.href = route('legal-services.business-law')
                    }
                ]}
            />
            <Layout422 
                className="bg-gallery"
                features={[
                    {
                        tagline: "Wills & Trusts",
                        url: route('legal-services.estate-planning'),
                        heading: "Comprehensive Estate Documentation",
                        description: "Create legally sound wills and establish trusts to protect your assets and ensure they are distributed according to your wishes. Our experienced attorneys guide you through every step of the process.",
                        image: {
                            src: placeholderImage,
                            alt: "Estate Planning - Wills and Trusts",
                        },
                        button: {
                            title: "Learn More",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                        },
                    },
                    {
                        tagline: "Powers of Attorney",
                        url: route('legal-services.estate-planning'),
                        heading: "Advanced Directives & POA",
                        description: "Establish powers of attorney and healthcare directives to ensure your interests are protected if you become unable to make decisions. We help you plan for all contingencies.",
                        image: {
                            src: placeholderImage,
                            alt: "Estate Planning - Powers of Attorney",
                        },
                        button: {
                            title: "Learn More",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                        },
                    }
                ]}
            />
            <Layout102 className="bg-white" />
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
                                onClick: () => window.location.href = route('contact')
                            },
                            {
                                title: "Learn More",
                                variant: "link",
                                size: "link",
                                iconRight: true,
                                onClick: () => window.location.href = route('legal-services.privacy-data-protection')
                            }
                        ],
                        image: {
                            src: placeholderImage,
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
                                onClick: () => window.location.href = route('contact')
                            },
                            {
                                title: "Learn More",
                                variant: "link",
                                size: "link",
                                iconRight: true,
                                onClick: () => window.location.href = route('legal-services.privacy-data-protection')
                            }
                        ],
                        image: {
                            src: placeholderImage,
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
                                onClick: () => window.location.href = route('contact')
                            },
                            {
                                title: "Learn More",
                                variant: "link",
                                size: "link",
                                iconRight: true,
                                onClick: () => window.location.href = route('legal-services.privacy-data-protection')
                            }
                        ],
                        image: {
                            src: placeholderImage,
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
                        variant: "primary",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "Call Us Today",
                        variant: "secondary",
                        icon: Phone,
                        onClick: () => window.location.href = 'tel:+1234567890'
                    }
                ]}
            />
        </MarcomLayout>
    )
}