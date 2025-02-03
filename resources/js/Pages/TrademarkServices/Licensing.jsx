import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import { Header9 } from '@/Components/Common/Header9'
import { Layout384 } from '@/Components/Common/Layout384'
import { Layout10 } from '@/Components/Common/Layout10'
import { Layout194 } from '@/Components/Common/Layout194'
import { Layout12 } from '@/Components/Common/Layout12'
import { Faq3 } from '@/Components/Common/Faq3'
import { Cta53 } from '@/Components/Common/Cta53'

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
                        onClick: () => window.location.href = route('contact')
                    }
                ]}
                image={{
                    src: "/images/tm/licensing/pexels-divinetechygirl-1181684.jpg",
                    alt: "Trademark Licensing Services - Hebert Thomas Law"
                }}
                className="bg-gallery bg-[url('/images/tm/enforcement/shutterstock_2308066191.jpg')] bg-cover bg-center bg-no-repeat [&_h1]:relative [&_h1]:z-10 [&_h1]:text-white [&_p]:relative [&_p]:z-10 [&_p]:text-white [&_div.container]:relative [&_div.container]:z-10"
            />
            <Layout384 className="bg-white" />
            <Layout10 className="bg-gallery" />
            <Layout194 className="bg-white" />
            <Layout12 className="bg-gallery" />
            <Faq3 className="bg-white" />
            <Cta53 
                className="bg-gallery" 
                image={{
                    src: "/images/tm/licensing/pexels-thirdman-5257766.jpg",
                    alt: "Schedule Trademark Licensing Consultation"
                }}
            />
        </MarcomLayout>
    )
}