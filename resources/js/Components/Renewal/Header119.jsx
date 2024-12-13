import React from "react";
import { Button } from "@relume_io/relume-ui";
import { motion } from "framer-motion";

export default function Header119({
  heading = "Medium length hero heading goes here",
  description = "",
  buttons = [],
  firstImage = {},
  secondImage = {},
  ...rest
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-start gap-5 md:mb-18 md:grid-cols-2 md:gap-12 lg:mb-20 lg:gap-20">
          <motion.h1 
            className="font-heading text-4xl font-bold text-cod-gray sm:text-5xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {heading}
          </motion.h1>
          <motion.div 
            className="mx-[7.5%] flex flex-col justify-end md:mt-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="font-sans text-cod-gray/80 md:text-lg">{description}</p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={button.variant === 'secondary' ? 'hover:bg-pippin' : ''}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 sm:grid-cols-2 sm:gap-8 md:gap-16">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              className="aspect-square w-full rounded-lg object-cover"
              src={firstImage.src}
              alt={firstImage.alt}
              loading="eager"
            />
          </motion.div>
          <motion.div 
            className="mt-0 w-full sm:mt-[15%]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              className="aspect-square w-full rounded-lg object-cover"
              src={secondImage.src}
              alt={secondImage.alt}
              loading="eager"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
