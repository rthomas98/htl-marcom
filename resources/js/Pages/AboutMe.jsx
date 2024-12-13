import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import AboutHeader from '../Components/About/AboutHeader';
import AboutLayout3 from '../Components/About/AboutLayout3';
import AboutServices from '../Components/About/AboutServices';
import AboutPracticeAreas from '../Components/About/AboutPracticeAreas';
import AboutBlog from '../Components/About/AboutBlog';
import AboutCTA from '../Components/About/AboutCTA';

export default function AboutMe() {
    return (
        <MarcomLayout
            title="About Me | Hebert Thomas Law"
            description="Learn about our experienced intellectual property attorney"
        >
            <AboutHeader />
            <AboutLayout3 
                heading="Experienced Intellectual Property Attorney"
                description="With over a decade of experience in intellectual property law, I specialize in helping businesses protect their valuable assets through strategic trademark and patent solutions. My approach combines deep legal expertise with a practical understanding of business needs to deliver results that matter."
                image={{
                    src: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3",
                    alt: "Professional attorney in office"
                }}
            />
            <AboutServices />
            <AboutPracticeAreas />
            <AboutBlog />
            <AboutCTA />
        </MarcomLayout>
    );
}