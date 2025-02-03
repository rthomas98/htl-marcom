import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import { Header126 } from '@/Components/Common/Header126'
import { Layout392 } from '@/Components/Common/Layout392'
import { Layout1 } from '@/Components/Common/Layout1'
import { Layout245 } from '@/Components/Common/Layout245'
import { Faq5 } from '@/Components/Common/Faq5'
import Cta39 from '@/Components/Common/Cta39'
import { Calendar, Phone } from 'lucide-react'
import { Globe2, Scale, Shield, FileCheck } from 'lucide-react'

const placeholderImage = '/images/placeholder.svg';

export default function International() {
    return (
        <MarcomLayout
            title="International Trademark Registration | Hebert Thomas Law"
            description="Expert international trademark registration services to protect your brand globally. We help businesses secure trademark rights across multiple jurisdictions."
        >
            <Header126
                heading="International Trademark Protection"
                description="For businesses looking to expand globally, our International Trademark Registration service simplifies the process of protecting your trademark in multiple countries. Discover how we can help you secure your brand worldwide."
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        className: "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light",
                        icon: Calendar,
                        href: route('contact')
                    },
                    {
                        title: "Learn More",
                        variant: "secondary",
                        className: "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light",
                        href: route('trademark-services.overview')
                    }
                ]}
                firstImage={{
                    src: '/images/tm/international/pexels-alexander-suhorucov-6457520.jpg',
                    alt: "International Trademark Registration"
                }}
                secondImage={{
                    src: '/images/tm/international/pexels-charlotte-may-5965548.jpg',
                    alt: "Global Brand Protection"
                }}
                className="bg-gallery"
            />
            <Layout392 
                className="bg-white"
                cards={[
                    {
                        tagline: "Madrid Protocol",
                        image: {
                            src: '/images/tm/international/pexels-george-milton-6953961.jpg',
                            alt: "Madrid Protocol Registration",
                        },
                        heading: "Streamlined International Filing",
                        description: "File a single international application to protect your trademark in multiple countries through the Madrid Protocol system.",
                        button: {
                            title: "Learn About Madrid Protocol",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                            href: route('trademark-services.international'),
                        },
                    },
                    {
                        tagline: "Direct Filing",
                        image: {
                            src: '/images/tm/international/pexels-kindelmedia-6775122.jpg',
                            alt: "Direct National Filing",
                        },
                        heading: "Direct National Registration",
                        description: "Strategic direct filing in specific countries to ensure comprehensive trademark protection.",
                        button: {
                            title: "Explore Direct Filing",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                            href: route('trademark-services.registration'),
                        },
                    },
                ]}
                featureSections={[
                    {
                        icon: <Globe2 className="size-12" />,
                        heading: "Global Coverage",
                        description: "Access to international trademark protection in over 120 countries through various filing systems.",
                        button: {
                            title: "View Coverage",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                            href: route('trademark-services.international'),
                        },
                    },
                    {
                        icon: <Scale className="size-12" />,
                        heading: "Local Compliance",
                        description: "Expert guidance on meeting local trademark requirements and regulations in each jurisdiction.",
                        button: {
                            title: "Learn More",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                            href: route('trademark-services.registration'),
                        },
                    },
                    {
                        icon: <Shield className="size-12" />,
                        heading: "Enforcement Support",
                        description: "Comprehensive assistance in monitoring and enforcing your trademark rights internationally.",
                        button: {
                            title: "Discover Services",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                            href: route('trademark-services.enforcement'),
                        },
                    },
                    {
                        icon: <FileCheck className="size-12" />,
                        heading: "Strategic Planning",
                        description: "Develop an effective international trademark strategy aligned with your business goals.",
                        button: {
                            title: "Start Planning",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                            href: route('contact'),
                        },
                    },
                ]}
            />
            <Layout1 
                className="bg-gallery" 
                image={{
                    src: '/images/tm/international/pexels-pavel-danilyuk-7674645.jpg',
                    alt: "International Trademark Services"
                }}
            />
            <Layout245 
                className="bg-white"
                image={{
                    src: '/images/tm/international/pexels-rdne-7490880.jpg',
                    alt: "Global Trademark Protection"
                }}
            />
            <Faq5 className="bg-gallery" />
            <Cta39 
                className="bg-white"
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    },
    
                ]}
            />
        </MarcomLayout>
    )
}