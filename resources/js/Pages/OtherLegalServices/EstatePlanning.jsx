import React from 'react';
import { Link } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import Header5 from '@/Components/Common/Header5';
import { Layout235 } from '@/Components/Common/Layout235';
import { Layout237 } from '@/Components/Common/Layout237';
import { Faq3 } from '@/Components/Common/Faq3';
import { Cta27 } from '@/Components/Common/Cta27';

const EstatePlanning = () => {
  return (
    <MarcomLayout
      title="Estate Planning Services | Hebert Thomas Law"
      description="Professional estate planning and wealth management services in Louisiana"
    >
      <main>
        <Header5 
          heading="Estate Planning Services"
          description="Secure your legacy and protect your family's future with our comprehensive estate planning services."
          image={{
            src: "/images/other/estate-planning/shutterstock_2211549217.jpg",
            alt: "Estate Planning Services"
          }}
          buttons={[
            {
              title: "Schedule Consultation",
              href: route('contact'),
              className: "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
            }
          ]}
        />
        <Layout235 
          heading="Comprehensive Estate Planning Solutions"
          description="Our experienced attorneys provide personalized estate planning services to help you protect your assets and secure your family's future."
          sections={[
            {
              tagline: "Wills & Trusts",
              heading: "Create Legally Sound Documents",
              description: "Create legally sound wills and establish trusts to protect and distribute your assets according to your wishes.",
              buttons: []
            },
            {
              tagline: "Power of Attorney",
              heading: "Designate Trusted Representatives",
              description: "Designate trusted individuals to make financial and medical decisions on your behalf when needed.",
              buttons: []
            },
            {
              tagline: "Asset Protection",
              heading: "Safeguard Your Legacy",
              description: "Implement strategies to safeguard your assets from potential creditors and minimize tax implications.",
              buttons: []
            }
          ]}
        />
        <Layout237 
          heading="Why Choose Our Estate Planning Services"
          description="We provide comprehensive estate planning solutions tailored to your unique needs and circumstances."
          tagline="Our Expertise"
          sections={[
            {
              heading: "Experienced\nAttorneys",
              description: "Our team has extensive experience in estate planning and wealth management."
            },
            {
              heading: "Personalized\nApproach",
              description: "We take time to understand your specific needs and goals to create a customized plan."
            },
            {
              heading: "Ongoing\nSupport",
              description: "We provide continuous guidance and updates to ensure your estate plan remains current."
            }
          ]}
          buttons={[
            {
              title: "Schedule Consultation",
              href: route('contact'),
              className: "inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm hover:bg-gallery"
            }
          ]}
        />
        <Faq3 />
        <Cta27 />
      </main>
    </MarcomLayout>
  );
};

export default EstatePlanning;
