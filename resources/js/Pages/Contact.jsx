import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import ContactHeader from '@/Components/Contact/ContactHeader';
import ContactForm from '@/Components/Contact/ContactForm';
import ContactCTA from '@/Components/Contact/ContactCTA';
import ContactFeatures from '@/Components/Contact/ContactFeatures';

export default function Contact() {
    return (
        <MarcomLayout
            title="Contact | Hebert Thomas Law"
            description="Schedule a consultation with Hebert Thomas Law. Expert trademark and intellectual property legal services in Louisiana."
        >
            <ContactHeader 
                heading="Let's Protect Your Business"
                description="Schedule a consultation to discuss your intellectual property needs. We specialize in trademark registration, portfolio management, and strategic IP protection."

                image={{
                    src: "/images/contact/shutterstock_2215885739.jpg",
                    alt: "Modern law office consultation room"
                }}
            />
            <ContactFeatures />
            <ContactForm />
            <ContactCTA />
        </MarcomLayout>
    );
}
