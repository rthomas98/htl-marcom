import React from 'react';
import { Head } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import Header96 from '@/Components/Resources/Header96';
import NewsletterForm from '@/Components/Resources/NewsletterForm';
import AboutBlog from '@/Components/About/AboutBlog';

export default function Newsletter({ posts }) {
    const handleSubscribeClick = (e) => {
        e.preventDefault();
        document.getElementById('subscribe').scrollIntoView({ behavior: 'smooth' });
    };

    const headerData = {
        heading: "Newsletter",
        description: "Stay informed with our latest insights on intellectual property law, trademark protection, and business strategies.",
        buttons: [
            { 
                title: "Subscribe Now", 
                variant: "primary",
                href: "#subscribe",
                onClick: handleSubscribeClick
            },
            {
                title: "View Latest Articles",
                variant: "secondary",
                href: "/insights"
            }
        ]
    };

    return (
        <MarcomLayout
            title="Newsletter | Hebert Thomas Law"
            description="Subscribe to our newsletter for legal insights and updates."
        >
            <Header96 {...headerData} />
            <NewsletterForm />
            <AboutBlog posts={posts} />
        </MarcomLayout>
    );
}
