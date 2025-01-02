import React from 'react';

const placeholderImage = '/images/placeholder.svg';

export const Layout194 = (props) => {
  const { heading, description, image, className = '' } = {
    ...Layout194Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2 lg:gap-x-20">
          <div className="order-2 md:order-1">
            <img 
              src={image.src} 
              className="mx-auto w-full max-w-[540px] rounded-lg object-cover shadow-lg md:max-w-none" 
              alt={image.alt} 
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold leading-tight text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h3>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light max-w-[540px] md:max-w-none">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout194Defaults = {
  heading: "Negotiating Terms",
  description: "We assist in negotiating the terms of your licensing agreements to protect your interests and maximize benefits. Our experienced team ensures favorable terms while maintaining positive relationships with licensees.",
  image: {
    src: placeholderImage,
    alt: "Trademark Licensing Negotiation",
  },
};
