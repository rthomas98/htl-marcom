import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

const defaultContent = {
  heading: "Protect Your Brand Today",
  description:
    "Don't wait until it's too late. Secure your trademark rights and build a strong foundation for your business's future. Our experienced team is ready to guide you through every step of the process.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      className: "bg-white text-cod-gray hover:bg-pippin"
    },
    { 
      title: "Learn More",
      variant: "secondary",
      className: "bg-transparent border-white text-white hover:bg-white hover:text-cod-gray"
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    alt: "Professional legal office setting",
  },
};

export default function TrademarkCTA({ className = "", ...props }) {
  const content = { ...defaultContent, ...props };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="container">
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-cod-gray p-8 md:p-12 lg:p-16">
          <div className="relative z-10 w-full max-w-2xl">
            <h2 className="font-heading mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
              {content.heading}
            </h2>
            <p className="font-sans text-lg text-white/90 md:text-xl">
              {content.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
              {content.buttons.map((button, index) => (
                <Button 
                  key={index} 
                  {...button}
                  className={`${button.className} transition-colors duration-300`}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 -z-10">
            <img 
              src={content.image.src} 
              className="h-full w-full object-cover opacity-50" 
              alt={content.image.alt}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cod-gray/90 to-cod-gray/70" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
