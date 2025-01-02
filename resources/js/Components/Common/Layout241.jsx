import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";

const Layout241Defaults = {
  tagline: "Our Services",
  heading: "Comprehensive Legal Support",
  description:
    "Our General Counsel services provide strategic legal guidance and practical solutions for businesses of all sizes. We focus on protecting your interests while enabling your growth.",
  sections: [
    {
      icon: {
        src: "/images/placeholder.svg",
        alt: "Contract Review Icon",
      },
      heading: "Contract Review & Negotiation",
      description:
        "Expert review and negotiation of all business contracts, from vendor agreements to employment contracts, ensuring your interests are protected and risks are minimized.",
    },
    {
      icon: {
        src: "/images/placeholder.svg",
        alt: "Compliance Icon",
      },
      heading: "Regulatory Compliance",
      description:
        "Stay compliant with industry regulations and legal requirements. We help you navigate complex regulatory landscapes and implement effective compliance programs.",
    },
    {
      icon: {
        src: "/images/placeholder.svg",
        alt: "Risk Management Icon",
      },
      heading: "Risk Management",
      description:
        "Proactive identification and mitigation of legal risks. We help you develop strategies to protect your business and maintain legal compliance in all operations.",
    },
  ],
  buttons: [
    { 
      title: "View All Services",
      href: "/services"
    },
    {
      title: "Learn More",
      href: "/about",
      iconRight: <RxChevronRight />
    },
  ],
};

export const Layout241 = ({ className, ...props }) => {
  const { tagline, heading, description, sections, buttons } = {
    ...Layout241Defaults,
    ...props,
  };
  
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container">
        <div className="flex flex-col">
          <div className="mb-12 md:mb-18 lg:mb-20">
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
              <div key={index} className="flex w-full flex-col">
                <div className="mb-5 md:mb-6">
                  <img src={section.icon.src} className="size-12" alt={section.icon.alt} />
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
