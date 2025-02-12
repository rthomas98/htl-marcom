import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const defaultContent = {
  heading: "Trademark Clearance Search",
  description:
    "Comprehensive trademark search and analysis to assess availability and identify potential conflicts before filing. Our thorough search process helps minimize risks and strengthen your trademark application.",
  buttons: [
    { 
      title: "Schedule a Call",
      variant: "secondary",
      href: "/contact",
    },
    { 
      title: "Learn More",
      variant: "link",
      href: "#process",
      iconRight: true
    }
  ],
  image: {
    src: "/images/tm/search/shutterstock_417480088.jpg",
    alt: "Professional conducting trademark search",
  },
};

export default function ClearanceSearchHeader({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0"
    >
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-6xl lg:text-7xl"
        >
          {content.heading}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-sans text-lg text-cod-gray/80 md:text-xl"
        >
          {content.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-wrap gap-4 md:mt-8"
        >
          {content.buttons.map((button, index) => {
            return (
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
            );
          })}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <img
          src={content.image.src}
          alt={content.image.alt}
          className="h-full w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </motion.div>
    </motion.section>
  );
}
