import React from 'react';
import { Head } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import HomeHero from '@/Components/Home/HomeHero';
import ServicesSection from '@/Components/Home/ServicesSection';
import BusinessSection from '@/Components/Home/BusinessSection';
import FeaturedSection from '@/Components/Home/FeaturedSection';
import Layout245Section from '@/Components/Home/Layout245Section';
import TestimonialSection from '@/Components/Home/TestimonialSection';
import BlogSection from '@/Components/Home/BlogSection';
import CTASection from '@/Components/Home/CTASection';

export default function Home() {
    const layout245Data = {
        tagline: "Our Services",
        heading: "Protecting Your Intellectual Property",
        description: "We provide comprehensive legal services to help businesses protect and leverage their intellectual property assets. Our expertise spans trademark registration, portfolio management, and enforcement.",
        sections: [
            {
                icon: {
                    src: "trademark-search",
                    alt: "Trademark Search Icon",
                },
                heading: "Trademark Search & Clearance",
                description: "Comprehensive trademark searches to identify potential conflicts and assess registration eligibility for your marks.",
            },
            {
                icon: {
                    src: "trademark-registration",
                    alt: "Trademark Registration Icon",
                },
                heading: "Trademark Registration",
                description: "Expert guidance through the trademark registration process, from application preparation to office action responses.",
            },
            {
                icon: {
                    src: "trademark-monitoring",
                    alt: "Trademark Monitoring Icon",
                },
                heading: "Trademark Monitoring",
                description: "Proactive monitoring services to detect potential infringement and protect your trademark rights.",
            },
        ],
        buttons: [
            { 
                title: "Schedule Consultation",
                variant: "secondary",
                href: "/contact"
            },
            {
                title: "Learn More",
                variant: "link",
                iconRight: true,
                href: "/services"
            },
        ],
    };

    const testimonialData = {
        heading: "Client Success Stories",
        description: "Read what our clients say about their experience working with Hebert Thomas Law.",
        testimonials: [
            {
                numberOfStars: 5,
                quote: "The team at Hebert Thomas Law provided exceptional guidance throughout our trademark registration process. Their expertise and attention to detail were invaluable.",
                avatar: {
                    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                    alt: "Sarah Johnson",
                },
                name: "Sarah Johnson",
                position: "CEO, Tech Innovations LLC",
                logo: {
                    src: "data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='40' fill='%23141414'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='white' font-family='Arial' font-size='12'%3ETech Innovations%3C/text%3E%3C/svg%3E",
                    alt: "Tech Innovations Logo",
                },
            },
            {
                numberOfStars: 5,
                quote: "Their proactive approach to trademark monitoring has helped us maintain and protect our brand identity in a competitive market.",
                avatar: {
                    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                    alt: "Michael Chen",
                },
                name: "Michael Chen",
                position: "Founder, Bright Brands Co.",
                logo: {
                    src: "data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='40' fill='%23141414'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='white' font-family='Arial' font-size='12'%3EBright Brands%3C/text%3E%3C/svg%3E",
                    alt: "Bright Brands Logo",
                },
            },
            {
                numberOfStars: 5,
                quote: "Professional, knowledgeable, and responsive. They made the complex process of trademark registration straightforward and manageable.",
                avatar: {
                    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
                    alt: "Emily Rodriguez",
                },
                name: "Emily Rodriguez",
                position: "Director, Creative Solutions Inc.",
                logo: {
                    src: "data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='120' height='40' fill='%23141414'/%3E%3Ctext x='60' y='25' text-anchor='middle' fill='white' font-family='Arial' font-size='12'%3ECreative Solutions%3C/text%3E%3C/svg%3E",
                    alt: "Creative Solutions Logo",
                },
            },
        ],
    };

    const blogData = {
        tagline: "Latest Insights",
        heading: "Legal Knowledge Hub",
        description: "Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.",
        button: { 
            title: "View All Articles",
            variant: "secondary",
            href: "/blog"
        },
        blogPosts: [
            {
                url: "/blog/trademark-registration-guide",
                image: {
                    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    alt: "Trademark Registration Process",
                },
                category: "Trademark Law",
                readTime: "5 min read",
                title: "Complete Guide to Trademark Registration",
                description: "Learn the essential steps and requirements for protecting your brand through trademark registration.",
                button: {
                    title: "Read More",
                    variant: "link",
                },
            },
            {
                url: "/blog/ip-protection-strategies",
                image: {
                    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    alt: "IP Protection Strategies",
                },
                category: "IP Strategy",
                readTime: "4 min read",
                title: "Effective IP Protection Strategies for Businesses",
                description: "Discover key strategies to protect and leverage your intellectual property assets in today's market.",
                button: {
                    title: "Read More",
                    variant: "link",
                },
            },
            {
                url: "/blog/trademark-monitoring",
                image: {
                    src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                    alt: "Trademark Monitoring",
                },
                category: "Brand Protection",
                readTime: "3 min read",
                title: "Why Trademark Monitoring is Essential",
                description: "Understanding the importance of ongoing trademark monitoring and enforcement for your brand.",
                button: {
                    title: "Read More",
                    variant: "link",
                },
            },
        ],
    };

    const ctaData = {
        heading: "Protect Your Intellectual Property Today",
        description: "Take the first step in securing your brand's future. Our experienced team is ready to guide you through the trademark registration process and help protect your valuable intellectual property assets.",
        buttons: [
            { 
                title: "Schedule Consultation",
                href: "/contact"
            },
            { 
                title: "Learn More",
                variant: "secondary",
                href: "/services"
            }
        ],
        image: {
            src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
            alt: "Professional legal team meeting",
        },
    };

    return (
        <MarcomLayout
            title="Hebert Thomas Law | Intellectual Property & Business Law"
            description="Expert legal counsel for entrepreneurs and businesses. Specializing in trademark law, business formation, and intellectual property protection."
        >
            <HomeHero />
            <ServicesSection />
            <BusinessSection />
            <FeaturedSection />
            <Layout245Section {...layout245Data} />
            <BlogSection {...blogData} />
            <CTASection {...ctaData} />
        </MarcomLayout>
    );
} 