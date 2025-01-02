import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import { Header77 } from '@/Components/Common/Header77'
import { Layout351 } from '@/Components/Common/Layout351'
import { Layout500 } from '@/Components/Common/Layout500'
import { Layout90 } from '@/Components/Common/Layout90'
import { Layout245 } from '@/Components/Common/Layout245'
import { Faq5 } from '@/Components/Common/Faq5'
import { Cta13 } from '@/Components/Common/Cta13'
import { Calendar, Scale, MessageSquare, Gavel } from 'lucide-react'

const placeholderImage = '/images/placeholder.svg';

export default function BusinessLaw() {
    return (
        <MarcomLayout
            title="Business Law Services | Hebert Thomas Law"
            description="Comprehensive business law services including entity formation, contracts, compliance, and more for companies in Louisiana"
        >
            <Header77 
                className="bg-white"
                heading="Expert Business Law Services for Your Success"
                description="Comprehensive legal solutions to protect and grow your business. From entity formation to contract management, we provide the guidance you need to thrive in today's business environment."
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "View Services",
                        variant: "secondary",
                        onClick: () => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })
                    }
                ]}
                images={[
                    {
                        src: placeholderImage,
                        alt: "Business Law Services - Contract Review",
                    },
                    {
                        src: placeholderImage,
                        alt: "Business Law Services - Entity Formation",
                    },
                    {
                        src: placeholderImage,
                        alt: "Business Law Services - Legal Compliance",
                    },
                ]}
            />
            <Layout351 
                id="services"
                className="bg-gallery"
                tagline="Entity Formation"
                heading="Building Strong Foundations for Your Business"
                description="Expert guidance in selecting and establishing the right business structure to protect your interests and support your growth objectives."
                features={[
                    {
                        columnText: "01",
                        verticalText: "LLC Formation",
                        horizontalText: "LLC Formation",
                        heading: "Limited Liability Company",
                        description: "Protect your personal assets while maintaining operational flexibility. Our LLC formation services include operating agreements, member agreements, and all necessary state filings.",
                        image: {
                            src: placeholderImage,
                            alt: "LLC Formation Services",
                        },
                    },
                    {
                        columnText: "02",
                        verticalText: "Corporations",
                        horizontalText: "Corporations",
                        heading: "C-Corps & S-Corps",
                        description: "Strategic incorporation services to establish your business as a corporation. We handle shareholder agreements, bylaws, and compliance requirements to ensure proper corporate governance.",
                        image: {
                            src: placeholderImage,
                            alt: "Corporation Formation Services",
                        },
                    },
                    {
                        columnText: "03",
                        verticalText: "Partnerships",
                        horizontalText: "Partnerships",
                        heading: "Partnership Structures",
                        description: "Comprehensive partnership formation services including partnership agreements, profit sharing structures, and liability protection strategies for all partners involved.",
                        image: {
                            src: placeholderImage,
                            alt: "Partnership Formation Services",
                        },
                    },
                    {
                        columnText: "04",
                        verticalText: "Non-Profits",
                        horizontalText: "Non-Profits",
                        heading: "Non-Profit Organizations",
                        description: "Specialized services for establishing non-profit organizations, including 501(c)(3) applications, board governance structures, and compliance with state and federal regulations.",
                        image: {
                            src: placeholderImage,
                            alt: "Non-Profit Formation Services",
                        },
                    },
                ]}
            />
            <Layout500 
                className="bg-white"
                tagline="Contract Management"
                heading="Expert Contract Solutions for Your Business"
                description="Comprehensive contract services to protect your interests and ensure smooth business operations."
                defaultTabValue="drafting"
                tabs={[
                    {
                        value: "drafting",
                        heading: "Contract Drafting",
                        description: "Custom contract creation tailored to your specific business needs, ensuring comprehensive coverage and protection of your interests.",
                        image: {
                            src: placeholderImage,
                            alt: "Contract Drafting Services",
                        },
                    },
                    {
                        value: "review",
                        heading: "Contract Review",
                        description: "Thorough analysis of contracts to identify potential risks, ensure compliance, and protect your business interests.",
                        image: {
                            src: placeholderImage,
                            alt: "Contract Review Services",
                        },
                    },
                    {
                        value: "negotiation",
                        heading: "Contract Negotiation",
                        description: "Strategic negotiation services to secure favorable terms while maintaining positive business relationships.",
                        image: {
                            src: placeholderImage,
                            alt: "Contract Negotiation Services",
                        },
                    },
                ]}
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "Learn More",
                        variant: "link",
                        size: "link",
                        iconRight: true,
                        onClick: () => document.getElementById('compliance').scrollIntoView({ behavior: 'smooth' })
                    },
                ]}
            />
            <Layout90 
                id="compliance"
                className="bg-gallery"
                heading="Ensuring Regulatory Compliance for Your Business"
                description="Stay compliant with state and federal regulations while focusing on your business growth. Our comprehensive compliance services help you navigate complex regulatory requirements, implement proper procedures, and maintain ongoing compliance to protect your business from potential legal issues."
                image={{
                    src: placeholderImage,
                    alt: "Regulatory Compliance Services",
                }}
            />
            <Layout245
                className="bg-white"
                tagline="Dispute Resolution"
                heading="Resolving Business Conflicts Effectively"
                description="We offer comprehensive dispute resolution services to help businesses resolve conflicts efficiently while preserving important relationships and protecting your interests."
                sections={[
                    {
                        icon: {
                            src: placeholderImage,
                            alt: "Mediation Services",
                        },
                        heading: "Mediation",
                        description: "Professional mediation services to facilitate productive dialogue and reach mutually beneficial resolutions while maintaining business relationships.",
                    },
                    {
                        icon: {
                            src: placeholderImage,
                            alt: "Arbitration Services",
                        },
                        heading: "Arbitration",
                        description: "Expert arbitration representation to resolve disputes efficiently through a structured process, saving time and resources compared to litigation.",
                    },
                    {
                        icon: {
                            src: placeholderImage,
                            alt: "Litigation Support",
                        },
                        heading: "Litigation Support",
                        description: "Strategic litigation support when necessary, providing strong advocacy and representation to protect your business interests in court.",
                    },
                ]}
                buttons={[
                    {
                        title: "Schedule Consultation",
                        variant: "primary",
                        icon: Calendar,
                        onClick: () => window.location.href = route('contact')
                    },
                    {
                        title: "Learn More",
                        variant: "link",
                        size: "link",
                        iconRight: true,
                        onClick: () => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })
                    },
                ]}
            />
            <Faq5
                id="faq"
                className="bg-gallery"
                heading="Common Questions"
                description="Find answers to frequently asked questions about our business law services and how we can help protect and grow your business."
                questions={[
                    {
                        title: "What business structure is right for my company?",
                        answer: "The ideal business structure depends on various factors including liability protection needs, tax considerations, management flexibility, and growth plans. We'll help evaluate your specific situation and recommend the most advantageous structure, whether it's an LLC, corporation, partnership, or other entity type.",
                    },
                    {
                        title: "How long does it take to form a new business entity?",
                        answer: "The timeline varies depending on the entity type and state requirements. Generally, basic LLC or corporation formation can be completed in 1-2 weeks. However, more complex structures or those requiring special permits may take longer. We'll provide a specific timeline based on your needs.",
                    },
                    {
                        title: "What contract review services do you provide?",
                        answer: "Our contract review services include comprehensive analysis of terms and conditions, risk assessment, compliance verification, and recommendations for modifications. We review all types of business contracts including service agreements, leases, employment contracts, and vendor agreements.",
                    },
                    {
                        title: "How do you help with regulatory compliance?",
                        answer: "We provide ongoing compliance support including regulatory audits, policy development, compliance training, and updates on changing regulations. We help ensure your business meets all state and federal requirements while implementing efficient compliance processes.",
                    },
                    {
                        title: "What is the best way to resolve a business dispute?",
                        answer: "The best resolution method depends on the specific situation, relationship dynamics, and desired outcomes. We typically recommend starting with mediation for its cost-effectiveness and relationship preservation benefits. If needed, we can escalate to arbitration or litigation while always focusing on your business objectives.",
                    },
                ]}
                footerHeading="Need More Information?"
                footerDescription="Contact us for a consultation to discuss your specific business law needs."
                button={{
                    title: "Schedule Consultation",
                    variant: "primary",
                    onClick: () => window.location.href = route('contact')
                }}
            />
            <Cta13 />
        </MarcomLayout>
    )
}
