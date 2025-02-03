import React from 'react';
import { Link } from '@inertiajs/react';

export const Cta51 = (props) => {
  const { heading, description, buttons, className = '' } = {
    ...Cta51Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center rounded-lg border border-gallery bg-white p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="max-w-3xl text-center">
            <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light">
              {description}
            </p>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link 
                key={index} 
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  button.variant === 'primary'
                    ? 'bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray'
                    : 'bg-pippin text-cod-gray hover:bg-cod-gray hover:text-white'
                }`}
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

export const Cta51Defaults = {
  heading: "Get Expert Legal Support Today",
  description: "Contact us to discuss your legal needs and discover how our experienced team can help protect your interests and achieve your goals.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: '#'
    },
    { 
      title: "Call Us Today",
      variant: "secondary",
      href: '#'
    }
  ],
};
