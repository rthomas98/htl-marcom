import React from 'react';
import { Link } from '@inertiajs/react';
import { RxChevronRight } from "react-icons/rx";

const Layout25Defaults = {
  tagline: "Privacy & Data Protection",
  heading: "Safeguarding Your Digital Assets",
  description:
    "In today's digital landscape, protecting sensitive data is crucial for business success. Our comprehensive privacy and data protection services help you navigate complex regulations while maintaining customer trust and business efficiency.",
  stats: [
    {
      title: "98%",
      description: "Success rate in data compliance audits and implementations.",
    },
    {
      title: "24/7",
      description: "Emergency response support for data breach incidents.",
    },
  ],
  buttons: [
    { 
      title: "Get Started",
      href: route('contact'),
      className: "inline-flex items-center justify-center rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-cod-gray-dark"
    },
    {
      title: "Learn More",
      href: route('legal-services.overview'),
      className: "inline-flex items-center justify-center rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm hover:bg-pippin-light"
    },
  ],
  image: {
    src: "/images/other/privacy-data-protection/shutterstock_2164682885.jpg",
    alt: "Data Protection Services",
  },
};

export const Layout25 = ({ className, ...props }) => {
  const { tagline, heading, description, stats, buttons, image } = {
    ...Layout25Defaults,
    ...props,
  };
  
  return (
    <section className={`px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold text-cod-gray md:mb-4">{tagline}</p>
            <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="mb-6 text-lg text-gray-600 md:mb-8 md:text-xl">{description}</p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h3 className="mb-2 font-heading text-5xl font-bold text-cod-gray md:text-7xl lg:text-8xl">
                    {stat.title}
                  </h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={button.className}
                >
                  {button.title}
                </Link>
              ))}
            </div>
          </div>
          <img 
            src={image.src} 
            className="w-full rounded-lg object-cover" 
            alt={image.alt}
          />
        </div>
      </div>
    </section>
  );
};
