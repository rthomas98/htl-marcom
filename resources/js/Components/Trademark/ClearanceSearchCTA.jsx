import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const defaultContent = {
  heading: "Ready to Protect Your Brand?",
  description:
    "Take the first step in securing your trademark rights. Our comprehensive clearance search service helps you make informed decisions and avoid potential conflicts.",
  buttons: [
    { 
      title: "Start Your Search",
      variant: "primary",
      className: "bg-white text-cod-gray hover:bg-pippin rounded-full",
      href: "/contact"
    },
    
  ],
  image: {
    src: "/images/tm/search/shutterstock_503699314.jpg",
    alt: "Professional trademark attorney consultation",
  },
};

export default function ClearanceSearchCTA({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-cod-gray px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-heading mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
              {content.heading}
            </h2>
            <p className="font-sans text-lg text-white/80 md:text-xl">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              {content.buttons.map((button, index) => {
                const { href, ...buttonProps } = button;
                return (
                  <Link key={index} href={href}>
                    <Button 
                      {...buttonProps}
                      className={`${buttonProps.className} transition-colors duration-300`}
                    >
                      {button.title}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="overflow-hidden rounded-lg"
          >
            <img 
              src={content.image.src} 
              className="w-full transform object-cover transition-transform duration-500 hover:scale-105" 
              alt={content.image.alt}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
