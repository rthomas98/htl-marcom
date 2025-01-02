import React, { useState } from 'react';

const Layout406Defaults = {
  tagline: "Our Services",
  heading: "Comprehensive Data Protection",
  description:
    "We provide end-to-end privacy and data protection services to help your business comply with regulations while maintaining operational efficiency.",
  defaultTabValue: "compliance",
  tabs: [
    {
      value: "compliance",
      trigger: {
        heading: "Regulatory Compliance",
        description:
          "Expert guidance on GDPR, CCPA, and other privacy regulations to ensure your business meets all legal requirements.",
      },
      content: [
        {
          src: "/images/placeholder.svg",
          alt: "Regulatory Compliance Services",
        },
      ],
    },
    {
      value: "breach-response",
      trigger: {
        heading: "Data Breach Response",
        description:
          "Comprehensive incident response planning and management to protect your business and stakeholders.",
      },
      content: [
        {
          src: "/images/placeholder.svg",
          alt: "Data Breach Response Planning",
        },
      ],
    },
    {
      value: "training",
      trigger: {
        heading: "Employee Training",
        description:
          "Customized training programs to ensure your team understands privacy requirements and best practices.",
      },
      content: [
        {
          src: "/images/placeholder.svg",
          alt: "Employee Privacy Training",
        },
      ],
    },
  ],
};

export const Layout406 = ({ className, ...props }) => {
  const { tagline, heading, description, defaultTabValue, tabs } = {
    ...Layout406Defaults,
    ...props,
  };

  const [activeTab, setActiveTab] = useState(defaultTabValue);

  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 bg-white ${className || ''}`}>
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-cod-gray md:mb-4">{tagline}</p>
          <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">{description}</p>
        </div>
        <div>
          <div className="mb-12 flex flex-col md:mb-16 md:flex-row">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.value)}
                className={`flex w-full flex-col gap-1 border-0 border-b-[1.5px] px-6 py-4 text-center transition-colors
                  ${activeTab === tab.value 
                    ? 'border-cod-gray text-cod-gray' 
                    : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-600'}`}
              >
                <h3 className="text-md font-heading font-bold leading-[1.4] md:text-xl">
                  {tab.trigger.heading}
                </h3>
                <p className="text-sm md:text-base">{tab.trigger.description}</p>
              </button>
            ))}
          </div>
          <div className="grid gap-8">
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${
                  activeTab === tab.value ? 'opacity-100' : 'hidden opacity-0'
                }`}
              >
                {tab.content.map((feature, featureIndex) => (
                  <div key={featureIndex}>
                    <img
                      src={feature.src}
                      className="w-full rounded-lg object-cover"
                      alt={feature.alt}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
