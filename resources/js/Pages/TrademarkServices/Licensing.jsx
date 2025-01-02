import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import { Header9 } from '@/Components/Common/Header9'
import { Layout384 } from '@/Components/Common/Layout384'
import { Layout10 } from '@/Components/Common/Layout10'
import { Layout194 } from '@/Components/Common/Layout194'
import { Layout12 } from '@/Components/Common/Layout12'
import { Faq3 } from '@/Components/Common/Faq3'
import { Cta53 } from '@/Components/Common/Cta53'
import { Calendar } from 'lucide-react'

export default function Licensing() {
    return (
        <MarcomLayout
            title="Trademark Licensing Agreements | Hebert Thomas Law"
            description="Expert trademark licensing agreement services to help you leverage your brand for new revenue opportunities while protecting your trademark's integrity."
        >
            <Header9
                heading="Trademark Licensing"
                description="Expand your brand's reach with Hebert-Thomas Law, PLLC. Our Trademark Licensing Agreements help you leverage your brand for new revenue opportunities while ensuring your trademark's integrity."
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        className: "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    }
                ]}
                image={{
                    src: "/images/trademark-licensing-hero.webp",
                    alt: "Trademark Licensing Services - Hebert Thomas Law"
                }}
                className="bg-gallery"
            />
            <Layout384 className="bg-white" />
            <Layout10 className="bg-gallery" />
            <Layout194 className="bg-white" />
            <Layout12 className="bg-gallery" />
            <Faq3 className="bg-white" />
            <Cta53 
                className="bg-gallery" 
                image={{
                    src: "/images/trademark-licensing-hero.webp",
                    alt: "Schedule Trademark Licensing Consultation"
                }}
            />
        </MarcomLayout>
    )
}