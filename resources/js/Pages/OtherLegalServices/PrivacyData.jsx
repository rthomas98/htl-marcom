  import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Header37 } from '@/Components/Common/Header37';
import { Layout25 } from '@/Components/Common/Layout25';
import { Layout406 } from '@/Components/Common/Layout406';
import { Layout239 } from '@/Components/Common/Layout239';
import { Layout286 } from '@/Components/Common/Layout286';
import { Faq4 } from '@/Components/Common/Faq4';
import { Cta19 } from '@/Components/Common/Cta19';
import { Shield, ChevronRight, FileText, Users, Lock } from 'lucide-react';

const PrivacyData = () => {
  const header37Props = {
    heading: "Privacy & Data\nProtection Services",
    description: "Navigate the complex landscape of data privacy regulations with confidence. Our expert legal team helps businesses implement robust data protection strategies while maintaining operational efficiency.",
    buttons: [
      { 
        title: "Schedule Consultation",
        href: route('contact'),
        className: "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
      },
      { 
        title: "Learn More",
        href: route('legal-services.overview'),
        className: "inline-flex items-center justify-center rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm hover:bg-pippin-light"
      }
    ],
    image: {
      src: "/images/other/privacy-data-protection/shutterstock_2014536923.jpg",
      alt: "Privacy & Data Protection",
    },
  };

  const faq4Props = {
    heading: "Common Questions",
    description: "Find answers to frequently asked questions about our privacy and data protection services.",
    questions: [
      {
        icon: <Shield className="size-6 text-cod-gray" strokeWidth={1.5} />,
        title: "What privacy regulations apply to my business?",
        answer: "The applicable regulations depend on your business location, industry, and the type of data you handle. We'll help you identify and comply with all relevant regulations, including GDPR, CCPA, and industry-specific requirements.",
      },
      {
        icon: <FileText className="size-6 text-cod-gray" strokeWidth={1.5} />,
        title: "How can I ensure my business is compliant?",
        answer: "We conduct thorough privacy audits, develop comprehensive policies, and implement robust data protection measures. Our team provides ongoing support to maintain compliance as regulations evolve.",
      },
      {
        icon: <Lock className="size-6 text-cod-gray" strokeWidth={1.5} />,
        title: "What happens if there's a data breach?",
        answer: "We help you develop and implement incident response plans, guide you through breach notification requirements, and assist with mitigation strategies to protect your business and stakeholders.",
      },
      {
        icon: <Users className="size-6 text-cod-gray" strokeWidth={1.5} />,
        title: "Do you provide employee training?",
        answer: "Yes, we offer customized training programs to help your team understand privacy requirements, recognize potential risks, and follow best practices for data protection.",
      },
      {
        icon: <FileText className="size-6 text-cod-gray" strokeWidth={1.5} />,
        title: "How often should we review our privacy policies?",
        answer: "We recommend reviewing policies at least annually or whenever there are significant changes in regulations, business operations, or data handling practices.",
      },
    ],
    footerHeading: "Need More Information?",
    footerDescription: "Contact us to discuss your specific privacy and data protection needs.",
    button: {
      title: "Schedule Consultation",
      href: route('contact'),
      className: "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
    },
  };

  const cta19Props = {
    heading: "Protect Your Data\nand Your Business",
    description: "Partner with us to develop and implement comprehensive data protection strategies that safeguard your business and build trust with your customers.",
    buttons: [
      { 
        title: "Schedule Consultation",
        href: route('contact'),
        className: "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
      },
      { 
        title: "Learn More",
        href: route('legal-services.overview'),
        className: "inline-flex items-center justify-center rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm hover:bg-pippin-light"
      }
    ],
  };

  return (
    <MarcomLayout
      title="Privacy & Data Protection Services | Hebert Thomas Law"
      description="Expert legal guidance for data privacy compliance and protection"
    >
      <main>
        <Header37 {...header37Props} />
        <Layout25 />
        <Layout406 />
        <Layout239 />
        <Layout286 />
        <Faq4 {...faq4Props} />
        <Cta19 {...cta19Props} />
      </main>
    </MarcomLayout>
  );
};

export default PrivacyData;
