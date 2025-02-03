import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import { motion, useAnimation } from "framer-motion";
import { Link } from '@inertiajs/react';
import { useEffect } from 'react';

const placeholderImage = '/images/placeholder.svg';

export const Header77 = (props) => {
  const { heading, description, buttons, images, className = '' } = {
    ...Header77Defaults,
    ...props,
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }
      }
    });
  }, []);
  
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
      <div className="flex items-center gap-4 overflow-hidden bg-gallery py-8 md:py-16 lg:h-screen">
        <motion.div 
          className="flex gap-4"
          animate={controls}
          style={{ width: "200%" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-4 min-w-[50%]">
              {images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative w-[60vw] pt-[75%] sm:w-[18rem] md:w-[26rem] shrink-0"
                >
                  <img
                    className="absolute inset-0 size-full object-cover rounded-lg"
                    src={image.src}
                    alt={image.alt}
                    loading={setIndex === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          ))}
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
      variant: "primary",
      href: "#"
    },
    {
      title: "View Services",
      variant: "secondary",
      href: "#"
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
