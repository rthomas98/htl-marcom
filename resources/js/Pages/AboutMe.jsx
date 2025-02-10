import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import AboutHeader from '../Components/About/AboutHeader';
import AboutLayout3 from '../Components/About/AboutLayout3';
import AboutServices from '../Components/About/AboutServices';
import AboutPracticeAreas from '../Components/About/AboutPracticeAreas';
import BlogSection from '@/Components/Home/BlogSection';
import AboutCTA from '../Components/About/AboutCTA';

export default function AboutMe({ posts }) {
    return (
        <MarcomLayout
            title="About Me | Hebert Thomas Law"
            description="Learn about our experienced intellectual property attorney"
        >
            <AboutHeader />
            <AboutLayout3 
                heading="Get To Know The Attorney"
                description={
                    <>
                        <p className="mb-6">
                            Adrian Hebert-Thomas, Esq. is the principal attorney of Hebert-Thomas Law, PLLC. She is a skilled attorney who focuses her practice on advising businesses and entrepreneurs in various aspects of corporate law, ranging from corporate formation to mergers and acquisitions. Adrian has a passion for helping young entrepreneurs develop a strong business acumen and providing them with the necessary legal tools to foster and promote their success.
                        </p>
                        
                        <p className="mb-6">
                            In addition to being a licensed attorney in Texas, Adrian has a strong background in business, with a bachelor of arts degree in marketing and a concentration in business law. She is dedicated to continuously improving her craft and sharpening her legal skills through attendance in various continuing legal education courses and business conferences throughout the country.
                        </p>
                        
                        <p className="mb-8">
                            Additionally, Adrian currently serves as the Vice President and General Counsel for Empuls3, LLC, a Texas based media and consulting company. Residing in North Dallas, Adrian is married to Robert Thomas and they have an adorable young son from their union. In her spare time, she enjoys spending quality time with family and friends, traveling, and attending local concerts and events.
                        </p>
                        
                        <ul className="list-none space-y-2">
                            <li>• Admitted to Practice Law in the State of Texas</li>
                            <li>• General Counsel for Empuls3, LLC</li>
                            <li>• Earned Juris Doctorate from Southern University Law Center</li>
                            <li>• Earned Bachelor of Arts Degree in Marketing from Southeastern Louisiana University</li>
                        </ul>
                    </>
                }
                image={{
                    src: "/images/adrian-hebert-thomas (1).jpg",
                    alt: "Adrian Hebert-Thomas, Principal Attorney"
                }}
            />
            <AboutServices />
            <AboutPracticeAreas />
            <BlogSection {...blogData} />
            <AboutCTA />
        </MarcomLayout>
    );
}