import React from 'react';
import { Link } from '@inertiajs/react';

export default function Cta7({ className, ...props }) {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  };
  
  return (
    <section className={`bg-cod-gray text-white px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container grid w-full grid-cols-1 items-start justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          {buttons.map((button, index) => (
            <Link
              key={index}
              href={button.href}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                button.variant === 'primary'
                  ? "bg-white text-cod-gray hover:bg-pippin hover:text-cod-gray"
                  : "border border-white text-white hover:bg-white hover:text-cod-gray"
              }`}
            >
              {button.title}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Cta7Defaults = {
  heading: "Ready to Protect Your Trademark Investment?",
  description: "Don't risk losing your valuable trademark rights. Our experienced attorneys will ensure your renewals are filed correctly and on time.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: "contact"
    },
    { 
      title: "Learn More",
      variant: "secondary",
      href: "trademark-services/renewal"
    }
  ],
};
