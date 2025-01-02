import React from 'react';

const placeholderImage = '/images/placeholder.svg';

export const Layout90 = (props) => {
  const { heading, description, image, className = '' } = {
    ...Layout90Defaults,
    ...props,
  };
  
  return (
    <section className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-12 grid grid-cols-1 items-start justify-between gap-x-8 gap-y-6 md:mb-16 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <h2 className="font-heading text-3xl font-bold text-cod-gray sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="font-sans text-base text-cod-gray-light sm:text-lg">
            {description}
          </p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <img 
            src={image.src} 
            className="w-full object-cover" 
            alt={image.alt}
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};

export const Layout90Defaults = {
  heading: "Ensuring Regulatory Compliance for Your Business",
  description: "Stay compliant with state and federal regulations while focusing on your business growth. Our comprehensive compliance services help you navigate complex regulatory requirements, implement proper procedures, and maintain ongoing compliance to protect your business from potential legal issues.",
  image: {
    src: placeholderImage,
    alt: "Regulatory Compliance Services",
  },
};
