import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export const Layout237Defaults = {
  tagline: "Our Services",
  heading: "Comprehensive Estate\nPlanning Solutions",
  description: "We offer a full range of estate planning services to help protect your assets and ensure your wishes are carried out exactly as you intend.",
  sections: [
    {
      icon: {
        src: "/images/placeholder.svg",
        alt: "Will and Testament Icon",
      },
      heading: "Last Will and\nTestament",
      description: "A legally binding document that ensures your assets are distributed according to your wishes after your passing. We help you create, update, and properly execute your will.",
    },
    {
      icon: {
        src: "/images/placeholder.svg",
        alt: "Trust Icon",
      },
      heading: "Living Trusts and\nAsset Protection",
      description: "Establish trusts to protect your assets, minimize tax implications, and provide for your beneficiaries while maintaining control over your estate during your lifetime.",
    },
    {
      icon: {
        src: "/images/placeholder.svg",
        alt: "Power of Attorney Icon",
      },
      heading: "Powers of\nAttorney",
      description: "Designate trusted individuals to make financial and healthcare decisions on your behalf if you become incapacitated, ensuring your wishes are respected.",
    },
  ],
  buttons: [
    { 
      title: "Schedule Consultation", 
      variant: "secondary" 
    },
    {
      title: "Learn More",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  ],
};

export const Layout237 = ({ className, ...props }) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout237Defaults,
    ...props,
  };
  
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
              <h2 className="mb-5 text-5xl font-bold whitespace-pre-line md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="md:text-md">{description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                
                <h3 className="mb-5 text-2xl font-bold whitespace-pre-line md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p>{section.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
