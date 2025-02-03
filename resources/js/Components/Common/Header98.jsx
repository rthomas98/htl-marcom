import React from 'react';
import { Link } from '@inertiajs/react';
import { Calendar, ChevronRight } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Header98 = (props) => {
  const { heading, description, buttons, image, className = '' } = {
    ...Header98Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto">
        <div className="relative flex min-h-[32rem] flex-col items-center justify-center p-6 sm:p-8 text-center md:min-h-[40rem] md:p-16">
          <div className="relative z-10 w-full max-w-3xl">
            <h1 className="mb-4 sm:mb-5 font-heading text-4xl sm:text-5xl font-bold text-white md:mb-6 md:text-6xl lg:text-7xl">
              {heading}
            </h1>
            <p className="font-sans text-base sm:text-lg text-white/90 md:text-xl">
              {description}
            </p>
          </div>
          <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link
                key={index} 
                href={button.href}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  button.variant === 'primary'
                    ? "bg-white text-cod-gray hover:bg-pippin"
                    : button.variant === 'secondary-alt'
                      ? "bg-pippin text-cod-gray hover:bg-white"
                      : "bg-pippin text-cod-gray hover:bg-white"
                }`}
              >
                {button.title}
              </Link>
            ))}
          </div>
          <div className="absolute inset-0 -z-10">
            <img 
              src={image.src} 
              className="size-full object-cover" 
              alt={image.alt}
              loading="eager"
            />
            <div className="absolute inset-0 bg-cod-gray/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header98Defaults = {
  heading: "Texas Legal Services",
  description: "At Hebert-Thomas Law, PLLC, we provide a comprehensive range of legal services tailored to meet the diverse needs of Texas businesses and individuals. Our experienced team delivers strategic solutions with a focus on protecting your interests.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: route('contact')
    },
    { 
      title: "Explore Services",
      variant: "secondary-alt",
      href: route('trademark-services.overview')
    }
  ],
  image: {
    src: placeholderImage,
    alt: "Texas Legal Services - Hebert-Thomas Law",
  },
};
