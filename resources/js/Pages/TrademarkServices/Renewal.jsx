import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import Header119 from '@/Components/Renewal/Header119'
import Layout102 from '@/Components/Renewal/Layout102'
import Layout51 from '@/Components/Renewal/Layout51'
import Layout500 from '@/Components/Renewal/Layout500'
import Faq2 from '@/Components/Renewal/Faq2'
import Cta7 from '@/Components/Renewal/Cta7'

export default function Renewal() {
    const headerContent = {
        heading: "Trademark Renewal & Maintenance",
        description: "Protect your valuable trademark rights with our comprehensive renewal and maintenance services. We ensure your trademarks remain active and enforceable through timely filings and strategic maintenance.",
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "primary"
            },
            { 
                title: "Learn More",
                variant: "secondary"
            }
        ],
        firstImage: {
            src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
            alt: "Legal professionals reviewing trademark documents",
        },
        secondImage: {
            src: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
            alt: "Trademark renewal process documentation",
        }
    };

    const servicesContent = {
        heading: "Comprehensive Trademark Services",
        description: "Our experienced team provides complete trademark renewal and maintenance services to protect your intellectual property portfolio.",
        image: {
            src: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
            alt: "Trademark portfolio management",
        },
        subHeadings: [
            {
                icon: { 
                    src: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg", 
                    alt: "Section 8 & 15 icon" 
                },
                title: "Declaration of Use",
                description: "Maintain your trademark rights with timely Section 8 & 15 declarations, ensuring continuous protection of your marks.",
            },
            {
                icon: { 
                    src: "https://images.pexels.com/photos/5669638/pexels-photo-5669638.jpeg", 
                    alt: "Section 9 icon" 
                },
                title: "Renewal Applications",
                description: "Secure your trademark rights for additional 10-year terms with comprehensive Section 9 renewal services.",
            },
        ],
    };

    const ctaContent = {
        tagline: "Expert Guidance",
        heading: "Protect Your Trademark Investment",
        description: "Don't risk losing your valuable trademark rights. Our experienced team ensures timely renewals and maintains the strength of your intellectual property portfolio.",
        subHeadings: [
            {
                title: "Proactive Management",
                description: "We monitor deadlines and handle all renewal requirements, letting you focus on your business growth.",
            },
            {
                title: "Strategic Protection",
                description: "Our comprehensive approach ensures your trademarks remain strong and enforceable for years to come.",
            },
        ],
        buttons: [
            { 
                title: "Schedule Consultation", 
                variant: "secondary-alt" 
            },
            {
                title: "Learn More",
                variant: "link-alt",
                size: "link",
            },
        ],
        video: "https://player.vimeo.com/external/517090081.hd.mp4?s=c0494d33bfb02cbb3ee41da64c6170cc23aa9e06&profile_id=175&oauth2_token_id=57447761",
        videoType: "video/mp4",
    };

    const processContent = {
        tagline: "How It Works",
        heading: "Trademark Renewal Process",
        description: "Understanding the trademark renewal process is crucial for maintaining your intellectual property rights. Learn about each step and how we help protect your valuable assets.",
        defaultTabValue: "declaration",
        tabs: [
            {
                value: "declaration",
                heading: "Declaration of Use",
                description: "File Section 8 & 15 declarations between the 5th and 6th year after registration to maintain and strengthen your trademark rights.",
                image: {
                    src: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg",
                    alt: "Declaration of Use process",
                },
            },
            {
                value: "renewal",
                heading: "Renewal Application",
                description: "Submit Section 9 renewal applications between the 9th and 10th year, and every 10 years thereafter to maintain protection.",
                video: {
                    image: {
                        src: "https://images.pexels.com/photos/5669638/pexels-photo-5669638.jpeg",
                        alt: "Renewal Application process",
                    },
                    url: "https://www.youtube.com/embed/8DKLYsikxTs",
                },
            },
            {
                value: "maintenance",
                heading: "Ongoing Maintenance",
                description: "Regular monitoring and maintenance ensure your trademark rights remain strong and enforceable throughout its lifecycle.",
                image: {
                    src: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
                    alt: "Trademark maintenance process",
                },
            },
        ],
        buttons: [
            { 
                title: "Get Started", 
                variant: "secondary" 
            },
            {
                title: "Learn More",
                variant: "link",
                size: "link",
            },
        ],
    };

    const finalCtaContent = {
        heading: "Secure Your Trademark's Future Today",
        description: "Take the first step in protecting your trademark investment. Our experienced team is ready to guide you through the renewal process.",
        buttons: [
            { 
                title: "Schedule Free Consultation",
                variant: "primary"
            },
            { 
                title: "View Pricing",
                variant: "secondary"
            }
        ],
    };

    return (
        <MarcomLayout
            title="Trademark Renewal & Maintenance | Hebert Thomas Law"
            description="Expert trademark renewal and maintenance services to protect your intellectual property"
        >
            <Header119 {...headerContent} />
            <Layout102 {...servicesContent} />
            <Layout51 {...ctaContent} />
            <Layout500 {...processContent} />
            <Faq2 />
            <Cta7 {...finalCtaContent} />
        </MarcomLayout>
    )
}