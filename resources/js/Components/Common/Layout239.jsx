import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";
import { ShieldCheck, ScrollText, AlertTriangle } from 'lucide-react';

const Layout239Defaults = {
  tagline: "Our Services",
  heading: "Privacy & Data Protection Solutions",
  description:
    "Comprehensive services to help your business navigate data privacy regulations, implement robust protection measures, and maintain compliance.",
  sections: [
    {
      icon: <ShieldCheck className="size-6 text-cod-gray" strokeWidth={1.5} />,
      heading: "GDPR Compliance",
      description:
        "Expert guidance on General Data Protection Regulation requirements, including data mapping, privacy impact assessments, and compliance documentation.",
    },
    {
      icon: <ScrollText className="size-6 text-cod-gray" strokeWidth={1.5} />,
      heading: "CCPA Compliance",
      description:
        "Comprehensive California Consumer Privacy Act compliance services, from policy development to implementation of consumer rights processes.",
    },
    {
      icon: <AlertTriangle className="size-6 text-cod-gray" strokeWidth={1.5} />,
      heading: "Breach Response",
      description:
        "Strategic planning and immediate response support for data breaches, including incident management, notification procedures, and mitigation strategies.",
    }
  ],
  buttons: [
    { 
      title: "Get Started",
      href: "/contact"
    },
    {
      title: "Learn More",
      href: "#services",
      iconRight: <RxChevronRight />
    },
  ],
};

export const Layout239 = ({ className, ...props }) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout239Defaults,
    ...props,
  };
  
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 bg-white ${className || ''}`}>
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="mb-3 font-semibold text-cod-gray md:mb-4">{tagline}</p>
              <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
                {heading}
              </h2>
              <p className="text-lg text-gray-600 md:text-xl">{description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index} className="flex w-full flex-col items-center text-center">
                <div className="mb-6 md:mb-8">
                  {section.icon}
                </div>
                <h3 className="mb-5 font-heading text-2xl font-bold text-cod-gray md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                  {section.heading}
                </h3>
                <p className="text-gray-600">{section.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex items-center gap-4 md:mt-18 lg:mt-20">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={index === 0 
                  ? "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
                  : "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light flex items-center"
                }
              >
                {button.title}
                {button.iconRight && <span className="ml-2">{button.iconRight}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
