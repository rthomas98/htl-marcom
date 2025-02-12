import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import MonitoringHeader from '@/Components/Trademark/MonitoringHeader'
import Layout249 from '@/Components/Common/Layout249'
import Layout367 from '@/Components/Common/Layout367'
import Cta39 from '@/Components/Common/Cta39'
import { RxChevronRight } from "react-icons/rx";
import { ShieldCheck, Globe2 } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function Monitoring() {
    const monitoringContent = {
        tagline: "Trademark Monitoring Services",
        heading: "Protect Your Brand's Future",
        description: "Our comprehensive monitoring services help safeguard your trademark against potential infringement, ensuring your intellectual property remains protected in an ever-evolving market.",
        sections: [
            {
                image: {
                    src: "/images/tm/monitoring/pexels-artempodrez-8519097.jpg",
                    alt: "Market Analysis Dashboard",
                },
                heading: "Market Analysis",
                description: "Continuous monitoring of market activities to identify potential trademark conflicts before they escalate into serious issues.",
            },
            {
                image: {
                    src: "/images/tm/monitoring/pexels-charlotte-may-5965688.jpg",
                    alt: "Digital Brand Protection",
                },
                heading: "Digital Protection",
                description: "Advanced digital surveillance of online marketplaces, social media, and domain registrations to detect unauthorized use of your trademark.",
            },
            {
                image: {
                    src: "/images/tm/monitoring/pexels-fauxels-3182778.jpg",
                    alt: "Legal Documentation",
                },
                heading: "Legal Support",
                description: "Expert legal guidance and swift action when potential infringement is detected, including cease and desist letters and enforcement strategies.",
            },
        ],
        buttons: [
            { 
                title: "Start Monitoring", 
                variant: "secondary",
                href: route('contact'),
                className: "border-cod-gray text-cod-gray hover:bg-pippin rounded-full"
            },
            {
                title: "Learn More",
                variant: "link",
                size: "link",
                iconRight: true,
                href: route('about-me'),
                className: "border-cod-gray text-cod-gray hover:bg-pippin rounded-full"
            },
        ],
    };

    const monitoringServicesContent = {
        tagline: "Our Services",
        heading: "Comprehensive Brand Protection",
        description: "Choose the monitoring service that best fits your brand's needs and protection requirements.",
        card: {
            tagline: "Premium Protection",
            image: {
                src: "/images/tm/monitoring/pexels-olly-3796810.jpg",
                alt: "Premium trademark monitoring services",
            },
            heading: "Full-Spectrum Monitoring",
            description: "Get complete protection with our comprehensive monitoring package, including global trademark watching, domain monitoring, and marketplace surveillance.",
            buttons: [
                { 
                    title: "Get Started", 
                    variant: "primary",
                    href: route('contact'),
                    className: "rounded-full bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                },
                {
                    title: "View Details",
                    variant: "link",
                    size: "link",
                    iconRight: <RxChevronRight />,
                    href: route('about-me'),
                    className: "rounded-full border-cod-gray text-cod-gray hover:bg-pippin"
                },
            ],
        },
        sections: [
            {
                icon: {
                    src: <ShieldCheck className="size-12 text-cod-gray" />,
                    alt: "Trademark Watch",
                },
                heading: "Trademark Watch",
                description: "Monitor new trademark applications and registrations worldwide to identify potential conflicts early.",
                buttons: [
                    { 
                        title: "Learn More", 
                        variant: "secondary",
                        href: route('about-me'),
                        className: "rounded-full border-cod-gray text-cod-gray hover:bg-pippin"
                    },
                    {
                        title: "Contact Us",
                        variant: "link",
                        size: "link",
                        iconRight: <RxChevronRight />,
                        href: route('contact'),
                        className: "rounded-full border-cod-gray text-cod-gray hover:bg-pippin"
                    },
                ],
            },
            {
                icon: {
                    src: <Globe2 className="size-12 text-cod-gray" />,
                    alt: "Domain Monitor",
                },
                heading: "Domain Monitor",
                description: "Track domain registrations and cybersquatting attempts that could infringe on your trademark rights.",
                buttons: [
                    { 
                        title: "Learn More", 
                        variant: "secondary",
                        href: route('about-me'),
                        className: "rounded-full border-cod-gray text-cod-gray hover:bg-pippin"
                    },
                    {
                        title: "Contact Us",
                        variant: "link",
                        size: "link",
                        iconRight: <RxChevronRight />,
                        href: route('contact'),
                        className: "rounded-full border-cod-gray text-cod-gray hover:bg-pippin"
                    },
                ],
            },
        ],
    };

    const ctaContent = {
        heading: "Start Protecting Your Brand Today",
        description: "Don't wait until it's too late. Our comprehensive trademark monitoring services help you identify and address potential infringement issues before they impact your business.",
        buttons: [
            { 
                title: "Schedule Consultation", 
                variant: "primary",
                href: route('contact')
            },
            { 
                title: "Have More Questions?", 
                variant: "secondary",
                href: route('contact')
            }
        ],
        image: {
            src: "/images/tm/monitoring/pexels-yankrukov-7793639.jpg",
            alt: "Team discussing trademark protection strategy",
        },
    };

    return (
        <MarcomLayout
            title="Trademark Monitoring | Hebert Thomas Law"
            description="Comprehensive trademark monitoring and protection services"
        >
            <MonitoringHeader />
            <Layout249 {...monitoringContent} />
            <Layout367 {...monitoringServicesContent} />
            <Cta39 {...ctaContent} />
        </MarcomLayout>
    )
}