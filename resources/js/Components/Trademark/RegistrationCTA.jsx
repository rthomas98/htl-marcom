import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

export default function RegistrationCTA({ className = "", ...props }) {
  const content = {
    heading: "Protect Your Brand Today",
    description:
      "Don't wait until it's too late. Secure your trademark rights and build a strong foundation for your business's future.",
    buttons: [
      { 
        title: "Start Registration",
        variant: "primary",
        className: "bg-white text-cod-gray hover:bg-pippin transition-colors duration-300"
      },
      { 
        title: "Schedule Consultation",
        variant: "secondary",
        className: "border border-white bg-transparent text-white hover:bg-white hover:text-cod-gray transition-all duration-300"
      }
    ],
    image: {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2940&auto=format&fit=crop",
      alt: "Modern business office meeting",
    },
    ...props
  };

  return (
    <section className="relative overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container relative z-10"
      >
        <div className="w-full max-w-lg">
          <h2 className="font-heading mb-5 text-4xl font-bold text-white md:mb-6 md:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="font-sans text-lg text-white/90 md:text-xl">
            {content.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
            {content.buttons.map((button, index) => (
              <Button 
                key={index} 
                {...button}
                className={button.className}
              >
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
      
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${content.image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-cod-gray/80" />
      </div>
    </section>
  );
}
