import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const processSteps = [
  {
    image: {
      src: "/images/tm/renewal/shutterstock_375557014.jpg",
      alt: "Initial trademark review process",
    },
    heading: "Initial Review & Strategy",
    description:
      "We begin with a comprehensive review of your trademark and develop a strategic plan for registration, considering your business goals and market position.",
  },
  {
    image: {
      src: "/images/tm/renewal/shutterstock_1829462777.jpg",
      alt: "Trademark application filing",
    },
    heading: "Application Filing",
    description:
      "Our experienced attorneys prepare and file your trademark application with the USPTO, ensuring all documentation is complete and accurate.",

  },
  {
    image: {
      src: "/images/tm/renewal/shutterstock_2141946577.jpg",
      alt: "Trademark monitoring and protection",
    },
    heading: "Monitoring & Protection",
    description:
      "We actively monitor your application's progress, respond to office actions, and protect your trademark rights throughout the registration process.",
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <ChevronRight className="h-4 w-4" />,
        className: "text-cod-gray hover:text-pippin transition-colors duration-300"
      },
    ],
  },
];

export default function RegistrationProcess({ className = "", ...props }) {
  const content = {
    heading: "Your Path to Trademark Protection",
    sections: processSteps,
    ...props
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20"
        >
          <h2 className="font-heading text-4xl font-bold leading-[1.2] text-cod-gray md:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {content.sections.map((section, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex w-full flex-col items-center text-center"
            >
              <div className="mb-6 overflow-hidden rounded-lg md:mb-8">
                <img 
                  src={section.image.src} 
                  alt={section.image.alt}
                  className="w-full transform object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <h3 className="font-heading mb-3 text-xl font-bold text-cod-gray md:mb-4 md:text-2xl">
                {section.heading}
              </h3>
              <p className="font-sans text-cod-gray/80">
                {section.description}
              </p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
