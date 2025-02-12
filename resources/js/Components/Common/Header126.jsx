import React from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { Button } from "@relume_io/relume-ui";

const placeholderImage = '/images/placeholder.svg';

export const Header126 = (props) => {
  const { heading, description, buttons, firstImage, secondImage, className = '' } = {
    ...Header126Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h1 className="mb-4 sm:mb-5 font-heading text-4xl sm:text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                    button.variant === 'primary'
                      ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                      : "bg-pippin text-cod-gray hover:bg-pippin-light"
                  }`}
                >
                  {button.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative flex w-full">
            <div className="mr-[30%] aspect-[2/3] w-full">
              <img
                src={firstImage.src}
                className="size-full rounded-lg object-cover shadow-lg"
                alt={firstImage.alt}
                loading="eager"
              />
            </div>
            <div className="absolute bottom-auto left-auto right-0 top-[10%] w-1/2">
              <img
                src={secondImage.src}
                className="aspect-square size-full rounded-lg object-cover shadow-lg"
                alt={secondImage.alt}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header126Defaults = {
  heading: "International Trademark Protection",
  description: "For businesses looking to expand globally, our International Trademark Registration service simplifies the process of protecting your trademark in multiple countries. Discover how we can help you secure your brand worldwide.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: "#"
    },
    { 
      title: "Learn More",
      variant: "secondary",
      href: "#"
    }
  ],
  firstImage: {
    src: placeholderImage,
    alt: "International Trademark Registration",
  },
  secondImage: {
    src: placeholderImage,
    alt: "Global Brand Protection",
  },
};
