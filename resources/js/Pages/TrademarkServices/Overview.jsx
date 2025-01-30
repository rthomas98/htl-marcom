import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import TrademarkHeader from '@/Components/Trademark/TrademarkHeader';
import TrademarkFeatures from '@/Components/Trademark/TrademarkFeatures';
import TrademarkServices from '@/Components/Trademark/TrademarkServices';
import TrademarkProcess from '@/Components/Trademark/TrademarkProcess';
import TrademarkBenefits from '@/Components/Trademark/TrademarkBenefits';
import TrademarkFAQ from '@/Components/Trademark/TrademarkFAQ';
import TrademarkCTA from '@/Components/Trademark/TrademarkCTA';

export default function Overview() {
    return (
        <MarcomLayout
            title="Trademark Services | Hebert Thomas Law"
            description="Comprehensive trademark services including search, registration, monitoring, and enforcement. Protect your brand with experienced trademark attorneys."
        >
            <TrademarkHeader 
                heading="Strategic Trademark Protection"
                description="Secure your brand's future with our comprehensive trademark services. From clearance searches to registration and enforcement, we provide expert guidance at every stage of your trademark journey."
                buttons={[
                    {
                        title: "Schedule Consultation",
                        className: "bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray rounded-full",
                        href: "/contact"
                    },
                    {
                        title: "View Services",
                        variant: "outline",
                        className: "border border-white bg-transparent text-white hover:bg-white hover:text-cod-gray transition-colors duration-200 rounded-full",
                        href: "/trademark-services/registration"
                    }
                ]}
                image={{
                    src: "/images/tm/overview/pexels-alex-green-5699479.jpg",
                    alt: "Professional trademark attorney reviewing documents"
                }}
            />
            <TrademarkFeatures />
            <TrademarkServices />
            <TrademarkProcess />
            <TrademarkBenefits />
            <TrademarkFAQ />
            <TrademarkCTA />
        </MarcomLayout>
    );
}