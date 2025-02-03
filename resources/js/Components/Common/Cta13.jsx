import React from 'react';
import { Link } from '@inertiajs/react';
import { PhoneCall, Calendar } from 'lucide-react';

export const Cta13 = (props) => {
  const { heading, description, buttons, className = '' } = {
    ...Cta13Defaults,
    ...props,
  };
  
  return (
    <section id="relume" className={`relative px-[5%] py-16 md:py-24 lg:py-28 bg-pippin ${className}`}>
      <div className="container grid grid-rows-1 items-start gap-y-5 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h1 className="font-heading text-4xl font-bold text-cod-gray md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        <div>
          <p className="font-sans text-base text-cod-gray-light md:text-lg">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link 
                key={index} 
                href={button.href}
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300"
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

export const Cta13Defaults = {
  heading: "Ready to Discuss Your Legal Needs?",
  description:
    "Our experienced team of business law attorneys is here to help protect and grow your business. Contact us today to schedule a consultation and learn how we can assist with your legal matters.",
  buttons: [

    { 
      title: "Schedule Consultation", 
      variant: "secondary",
      href: route('contact')
    }
  ],
};
