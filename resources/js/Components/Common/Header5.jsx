import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

export const Header5Defaults = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Button" }, 
    { title: "Button", variant: "secondary-alt" }
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder image",
  },
};

export default function Header5(props) {
  const { heading, description, buttons, image, ...rest } = {
    ...Header5Defaults,
    ...props,
  };

  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image.src})` }}
      {...rest}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-[5%]">
        <div className="container mx-auto flex min-h-screen items-center py-16 md:py-24 lg:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h1 className="mb-5 font-heading text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="font-sans text-white/90 md:text-lg">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`${
                    button.variant === 'secondary-alt' 
                      ? 'border-white bg-transparent text-white hover:bg-white hover:text-cod-gray' 
                      : 'bg-white text-cod-gray hover:bg-pippin'
                  } transition-colors duration-300`}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
