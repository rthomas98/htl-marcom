import React from 'react';
import { Link } from '@inertiajs/react';

const placeholderImage = '/images/placeholder.svg';

const Cta39Defaults = {
  heading: "Protect Your Brand Globally",
  description: "Ready to secure international trademark protection for your business? Schedule a consultation with our experienced trademark attorneys to discuss your global brand protection strategy and explore the most effective registration options for your needs.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: route('contact'),
      className: "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300"
    },
  
  ],
  image: {
    src: '/images/tm/international/pexels-rdne-7490880.jpg',
    alt: "International Trademark Consultation",
  },
};

function Cta39(props) {
  const { heading, description, buttons, image, className = '' } = {
    ...Cta39Defaults,
    ...props,
    buttons: props.buttons?.map((button, index) => ({
      ...Cta39Defaults.buttons[index],
      ...button,
      className: Cta39Defaults.buttons[index]?.className
    })) || Cta39Defaults.buttons
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid auto-cols-fr grid-cols-1 overflow-hidden rounded-lg border border-gallery bg-white lg:grid-cols-2">
          <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12">
            <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light">
              {description}
            </p>
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
          <div className="flex items-center justify-center bg-gallery/50 p-6">
            <img 
              src={image.src} 
              className="w-full rounded-lg object-cover shadow-lg" 
              alt={image.alt}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta39;
