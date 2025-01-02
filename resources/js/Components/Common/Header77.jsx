import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

const placeholderImage = '/images/placeholder.svg';

export const Header77 = (props) => {
  const { heading, description, buttons, images, className = '' } = {
    ...Header77Defaults,
    ...props,
  };
  
  return (
    <section
      className={`grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 ${className}`}
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="mb-4 sm:mb-5 font-heading text-4xl sm:text-5xl font-bold text-cod-gray md:mb-6 md:text-6xl lg:text-7xl">
          {heading}
        </h1>
        <p className="font-sans text-base sm:text-lg text-cod-gray-light">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button 
              key={index} 
              {...button}
              className={button.variant === 'primary' 
                ? "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light inline-flex items-center gap-2"
                : "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light inline-flex items-center gap-2"}
            >
              {button.icon && <button.icon className="size-4" />}
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 overflow-hidden bg-gallery py-8 md:py-16 lg:h-screen">
        <motion.div 
          className="grid shrink-0 grid-cols-1 gap-y-4"
          initial={{ x: 0 }}
          animate={{ 
            x: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="ml-[-8.5%] grid w-full auto-cols-fr grid-cols-2 gap-4 self-center">
            {[...new Array(2)].map((e, index) => (
              <div key={index} className="grid w-full grid-flow-col gap-4">
                {images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                  >
                    <img
                      className="absolute inset-0 size-full object-cover rounded-lg"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="grid w-full grid-cols-2 gap-4 self-center">
            {[...new Array(2)].map((e, index) => (
              <div key={index} className="grid w-full grid-flow-col gap-4">
                {images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem]"
                  >
                    <img
                      className="absolute inset-0 size-full object-cover rounded-lg"
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Header77Defaults = {
  heading: "Expert Business Law Services for Your Success",
  description: "Comprehensive legal solutions to protect and grow your business. From entity formation to contract management, we provide the guidance you need to thrive in today's business environment.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary"
    },
    { 
      title: "View Services",
      variant: "secondary"
    }
  ],
  images: [
    {
      src: placeholderImage,
      alt: "Business Law Services - Contract Review",
    },
    {
      src: placeholderImage,
      alt: "Business Law Services - Entity Formation",
    },
    {
      src: placeholderImage,
      alt: "Business Law Services - Legal Compliance",
    },
  ],
};
