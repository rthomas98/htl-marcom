import React from 'react'
import MarcomLayout from '@/Layouts/MarcomLayout'
import Header5 from '@/Components/Common/Header5'
import Layout423 from '@/Components/Common/Layout423'
import Layout356 from '@/Components/Common/Layout356'
import Faq1 from '@/Components/Common/Faq1'

export default function Enforcement() {
    const headerContent = {
        heading: "Protect Your Brand Rights",
        description: "Our experienced trademark attorneys provide comprehensive enforcement and litigation services to protect your intellectual property from infringement and unauthorized use.",
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "primary"
            }, 
            { 
                title: "Learn More",
                variant: "secondary-alt"
            }
        ],
        image: {
            src: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
            alt: "Legal professionals discussing trademark enforcement strategy",
        },
    };

    const enforcementServices = {
        tagline: "Trademark Enforcement",
        heading: "Protecting Your Brand",
        description: "We offer comprehensive trademark enforcement services to protect your intellectual property rights and maintain your brand's integrity.",
        features: [
            {
                tagline: "Infringement Detection",
                url: "#infringement-monitoring",
                heading: "Proactive Brand Protection",
                description: "Our advanced monitoring systems continuously scan for potential trademark infringements, helping you identify and address threats to your brand early.",
                image: {
                    src: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg",
                    alt: "Digital monitoring and brand protection",
                },
                button: {
                    text: "Learn About Monitoring",
                }
            },
            {
                tagline: "Legal Action",
                url: "#enforcement-litigation",
                heading: "Strategic Enforcement",
                description: "When infringement occurs, we take decisive legal action through cease and desist letters, litigation, and other enforcement strategies to protect your rights.",
                image: {
                    src: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg",
                    alt: "Legal documents and trademark enforcement",
                },
                button: {
                    text: "Explore Legal Options",
                }
            },
            {
                tagline: "Dispute Resolution",
                url: "#dispute-resolution",
                heading: "Expert Mediation",
                description: "Our experienced attorneys handle trademark disputes through negotiation, mediation, and when necessary, litigation to achieve the best possible outcomes.",
                image: {
                    src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg",
                    alt: "Legal mediation and dispute resolution",
                },
                button: {
                    text: "View Resolution Services",
                }
            }
        ]
    };

    const enforcementProcess = {
        features: [
            {
                anchor: {
                    url: "#investigation",
                    number: "01",
                    title: "Investigation & Analysis",
                },
                tagline: "Comprehensive Research",
                heading: "Thorough Investigation of Potential Infringement",
                description: "Our team conducts detailed investigations to identify potential trademark infringement, analyzing market presence, consumer confusion risk, and the strength of your legal position.",
                buttons: [
                    { title: "Start Investigation", variant: "secondary" },
                    { title: "Learn More", variant: "link", size: "link" }
                ],
                image: {
                    src: "https://images.pexels.com/photos/4098232/pexels-photo-4098232.jpeg",
                    alt: "Legal team investigating trademark infringement",
                }
            },
            {
                anchor: {
                    url: "#enforcement",
                    number: "02",
                    title: "Strategic Enforcement",
                },
                tagline: "Legal Action",
                heading: "Strategic Enforcement Measures",
                description: "We implement targeted enforcement strategies, from cease and desist letters to litigation, designed to protect your trademark rights while managing costs and business relationships.",
                buttons: [
                    { title: "Discuss Strategy", variant: "secondary" },
                    { title: "View Options", variant: "link", size: "link" }
                ],
                image: {
                    src: "https://images.pexels.com/photos/5668288/pexels-photo-5668288.jpeg",
                    alt: "Trademark enforcement strategy session",
                }
            },
            {
                anchor: {
                    url: "#resolution",
                    number: "03",
                    title: "Resolution & Protection",
                },
                tagline: "Ongoing Protection",
                heading: "Long-term Brand Protection",
                description: "After resolving immediate concerns, we establish ongoing monitoring and protection strategies to prevent future infringement and maintain the strength of your trademark rights.",
                buttons: [
                    { title: "Protect Your Brand", variant: "secondary" },
                    { title: "View Services", variant: "link", size: "link" }
                ],
                image: {
                    src: "https://images.pexels.com/photos/5669626/pexels-photo-5669626.jpeg",
                    alt: "Long-term trademark protection planning",
                }
            }
        ]
    };

    const faqContent = {
        heading: "Common Questions About Trademark Enforcement",
        description: "Find answers to frequently asked questions about trademark enforcement, litigation, and protection strategies.",
        questions: [
            {
                title: "What constitutes trademark infringement?",
                answer: "Trademark infringement occurs when another party uses a mark that is likely to cause confusion with your registered trademark. This includes using similar marks, logos, or brand identifiers that might mislead consumers about the source of goods or services."
            },
            {
                title: "How do I know if someone is infringing on my trademark?",
                answer: "Infringement can be detected through various means: market monitoring, customer reports, trademark watch services, or online surveillance. Our firm provides comprehensive monitoring services to identify potential infringement early."
            },
            {
                title: "What steps should I take if I discover trademark infringement?",
                answer: "First, document the infringement with evidence. Then, consult with a trademark attorney to assess the situation and determine the best course of action, which may include sending a cease and desist letter, negotiating a settlement, or pursuing litigation."
            },
            {
                title: "How long does trademark enforcement litigation typically take?",
                answer: "The duration of trademark litigation varies significantly based on factors such as case complexity, jurisdiction, and whether the parties reach a settlement. Cases can range from several months to multiple years. We strive to resolve disputes efficiently while protecting your rights."
            },
            {
                title: "What are the costs associated with trademark enforcement?",
                answer: "Enforcement costs vary depending on the approach taken. Initial cease and desist letters are relatively inexpensive, while litigation costs can be substantial. We work with clients to develop cost-effective enforcement strategies that align with their business objectives."
            }
        ],
        footerHeading: "Need Specific Guidance?",
        footerDescription: "Contact our experienced trademark attorneys for personalized advice on protecting your intellectual property.",
        button: {
            title: "Schedule Consultation",
            variant: "secondary"
        }
    };

    return (
        <MarcomLayout
            title="Trademark Enforcement & Litigation | Hebert Thomas Law"
            description="Expert trademark enforcement and litigation services"
        >
            <Header5 {...headerContent} />
            <Layout423 {...enforcementServices} />
            <Layout356 {...enforcementProcess} />
            <Faq1 {...faqContent} />
        </MarcomLayout>
    )
}