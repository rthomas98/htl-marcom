import React from 'react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Header37 } from '@/Components/Common/Header37';
import { Layout432 } from '@/Components/Common/Layout432';
import { Layout241 } from '@/Components/Common/Layout241';
import { Faq4 } from '@/Components/Common/Faq4';
import { Cta19 } from '@/Components/Common/Cta19';
import { Link } from '@inertiajs/react';

const GeneralCounsel = () => {
  const ctaProps = {
    heading: "Partner With Our\nLegal Team Today",
    description: "Get the comprehensive legal support your business needs without the overhead of a full-time legal department. Our experienced attorneys are ready to help protect and grow your business.",
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
      title="General Counsel Services | Hebert Thomas Law"
      description="On-demand legal guidance and support for businesses in Louisiana"
    >
      <main>
        <Header37 />
        <Layout432 />
        <Layout241 />
        <Faq4 />
        <Cta19 {...ctaProps} />
      </main>
    </MarcomLayout>
  );
};

export default GeneralCounsel;
