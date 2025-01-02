import React from 'react';
import { Link } from '@inertiajs/react';

const Cta19Defaults = {
  heading: "Ready to Get Started\nWith Legal Support?",
  description:
    "Partner with our experienced legal team to protect and grow your business. Schedule a consultation to discuss your needs and learn how we can provide comprehensive legal support tailored to your business.",
  buttons: [
    { 
      title: "Schedule Consultation",
      href: "/contact",
      primary: true
    },
    { 
      title: "View Services",
      href: "/services",
      primary: false
    }
  ],
};

export const Cta19 = ({ className, ...props }) => {
  const { heading, description, buttons } = {
    ...Cta19Defaults,
    ...props,
  };
  
  return (
    <section className={`relative px-[5%] py-16 md:py-24 lg:py-28 bg-pippin ${className || ''}`}>
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray whitespace-pre-line md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={button.primary
                  ? "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light"
                  : "rounded-full bg-white px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-gray-50"
                }
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
