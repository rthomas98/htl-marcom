import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import ContactHeader from '@/Components/Contact/ContactHeader';
import ContactInfo from '@/Components/Contact/ContactInfo';
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
                inputPlaceholder="Enter your email for consultation"
                button={{
                    title: "Schedule Consultation",
                    variant: "primary",
                    className: "bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray"
                }}
                image={{
                    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
                    alt: "Modern law office consultation room"
                }}
            />
            <ContactInfo />
            <ContactFeatures />
            <ContactForm />
            <ContactCTA />
        </MarcomLayout>
    );
}
