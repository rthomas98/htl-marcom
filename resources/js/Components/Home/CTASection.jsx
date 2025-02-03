import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { Link } from '@inertiajs/react';

const CTASection = ({ heading, description, buttons, image }) => {
  return (
    <section className="bg-cod-gray text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="rb-12 mb-12 grid grid-rows-1 items-start gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20 lg:gap-y-16">
          <h1 className="font-heading text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h1>
          <div>
            <p className="font-sans md:text-md text-gallery">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
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
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-cod-gray/20 to-transparent"></div>
          <img 
            src={image.src} 
            className="size-full object-cover" 
            alt={image.alt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
