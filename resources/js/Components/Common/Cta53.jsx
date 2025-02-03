import React from 'react';
import { Link } from '@inertiajs/react';

const placeholderImage = '/images/placeholder.svg';

export const Cta53 = (props) => {
  const { heading, description, buttons, image, className = '' } = {
    ...Cta53Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="relative flex flex-col items-center rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16">
          <div className="relative z-10 max-w-lg text-center">
            <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-gallery md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="font-sans text-base sm:text-lg text-gallery/90">
              {description}
            </p>
          </div>
          <div className="relative z-10 mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`rounded-full ${
                  button.variant === 'primary'
                    ? 'bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-dark'
                    : button.variant === 'secondary-alt'
                    ? 'bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light'
                    : 'text-cod-gray'
                }`}
              >
                {button.title}
              </Link>
            ))}
          </div>
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            <img 
              src={image.src} 
              className="size-full object-cover" 
              alt={image.alt}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-cod-gray/80" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta53Defaults = {
  heading: "Ready to Expand Your Brand?",
  description: "Contact us to learn more about how our Trademark Licensing Agreement services can help you expand your brand's reach and create new revenue opportunities. Schedule a consultation today.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: route('contact')
    },
    { 
      title: "Learn More",
      variant: "secondary-alt",
      href: route('trademark-services.overview')
    }
  ],
  image: {
    src: placeholderImage,
    alt: "Trademark Licensing Consultation",
  },
};
