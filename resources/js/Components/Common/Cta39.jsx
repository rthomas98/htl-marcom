import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

export const Cta39Defaults = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [
    { title: "Button", variant: "primary" },
    { title: "Button", variant: "secondary" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape4x3.svg",
    alt: "Relume placeholder image",
  },
};

export default function Cta39(props) {
  const { heading, description, buttons, image, ...rest } = {
    ...Cta39Defaults,
    ...props,
  };

  return (
    <section id="relume" className="bg-white px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid auto-cols-fr grid-cols-1 overflow-hidden rounded-lg border border-cod-gray/10 bg-white shadow-lg lg:grid-cols-2"
        >
          <div className="flex flex-col justify-center p-8 md:p-12">
            <h2 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="font-sans text-cod-gray/80 md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`${button.variant === 'secondary' ? 'border-cod-gray bg-transparent text-cod-gray hover:bg-cod-gray hover:text-white' : 
                    'bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray'} transition-colors duration-300`}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img 
              src={image.src} 
              className="h-full w-full object-cover" 
              alt={image.alt} 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
