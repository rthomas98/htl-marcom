import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import { Header126 } from '@/Components/Common/Header126'
import { Layout392 } from '@/Components/Common/Layout392'
import { Layout1 } from '@/Components/Common/Layout1'
import { Layout245 } from '@/Components/Common/Layout245'
import { Faq5 } from '@/Components/Common/Faq5'
import Cta39 from '@/Components/Common/Cta39'
import { Calendar, Phone } from 'lucide-react'

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
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "Learn More",
                        variant: "secondary",
                        className: "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light"
                    }
                ]}
                firstImage={{
                    src: placeholderImage,
                    alt: "International Trademark Registration"
                }}
                secondImage={{
                    src: placeholderImage,
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
                            src: placeholderImage,
                            alt: "Madrid Protocol Registration",
                        },
                        heading: "Streamlined International Filing",
                        description: "File a single international application to protect your trademark in multiple countries through the Madrid Protocol system.",
                        button: {
                            title: "Learn About Madrid Protocol",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                        },
                    },
                    {
                        tagline: "Direct Filing",
                        image: {
                            src: placeholderImage,
                            alt: "Direct National Filing",
                        },
                        heading: "Direct National Registration",
                        description: "Strategic direct filing in specific countries to ensure comprehensive trademark protection.",
                        button: {
                            title: "Explore Direct Filing",
                            variant: "link",
                            size: "link",
                            iconRight: true,
                        },
                    },
                ]}
            />
            <Layout1 className="bg-gallery" />
            <Layout245 className="bg-white" />
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