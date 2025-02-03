import React from 'react';
import { Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout1 = (props) => {
  const { tagline, heading, description, buttons, image, className = '' } = {
    ...Layout1Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4">
              {tagline}
            </p>
            <h1 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link 
                  key={index} 
                  href={button.href}
                  className={button.variant === 'primary' 
                    ? "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300"
                    : "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold bg-pippin text-cod-gray hover:bg-pippin-light transition-colors duration-300"}
                >
                  {button.title}
                  {button.iconRight && <ChevronRight className="size-4" />}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image.src} 
              className="h-full w-full object-cover" 
              alt={image.alt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout1Defaults = {
  tagline: "Madrid Protocol System",
  heading: "Streamlined International Trademark Protection",
  description: "The Madrid Protocol simplifies international trademark registration by allowing businesses to file a single application through WIPO, protecting their marks in multiple countries. This system reduces costs, simplifies management, and provides efficient brand protection worldwide.",
  buttons: [
    { 
      title: "Schedule Consultation", 
      variant: "primary",
      href: route('contact')
    },
    {
      title: "Learn More",
      variant: "secondary",
      iconRight: true,
      href: route('trademark-services.overview')
    }
  ],
  image: {
    src: placeholderImage,
    alt: "Madrid Protocol International Registration System",
  },
};
