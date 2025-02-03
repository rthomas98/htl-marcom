import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const defaultImages = [
  {
    src: "/images/tm/renewal/pexels-a-darmel-7710214.jpg",
    alt: "Business professional reviewing documents",
  },
  {
    src: "/images/tm/renewal/pexels-alexander-suhorucov-6457537.jpg",
    alt: "Legal consultation meeting",
  },
  {
    src: "/images/tm/renewal/pexels-alexander-suhorucov-6457555.jpg",
    alt: "Professional signing documents",
  },
  {
    src: "/images/tm/renewal/pexels-kindelmedia-7688174.jpg",
    alt: "Legal documents review",
  },
  {
    src: "/images/tm/renewal/pexels-rethaferguson-3810831.jpg",
    alt: "Business meeting and consultation",
  },
  {
    src: "/images/tm/renewal/pexels-thirdman-5684562.jpg",
    alt: "Legal professional at work",
  },
];

export default function RegistrationHeader({ className = "", ...props }) {
  const content = {
    heading: "Secure Your Brand with Trademark Registration",
    description: "Protect your intellectual property and establish your brand's legal foundation with our comprehensive trademark registration services. We guide you through every step of the process.",
    buttons: [
      { 
        title: "Start Registration",
        variant: "primary",
        href: "/contact"
      },
      { 
        title: "Learn More",
        variant: "secondary",
        href: "/trademark-services"
      }
    ],
    images: defaultImages,
    ...props
  };

  return (
    <section className="bg-pippin grid grid-cols-1 gap-y-16 pt-16 md:grid-flow-row md:pt-24 lg:grid-flow-col lg:grid-cols-2 lg:items-center lg:pt-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-[5%] max-w-[40rem] justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end"
      >
        <h1 className="font-heading mb-5 text-5xl font-bold text-cod-gray md:mb-6 md:text-6xl lg:text-7xl">
          {content.heading}
        </h1>
        <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
          {content.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4 md:mt-10">
          {content.buttons.map((button, index) => {
            const { href, ...buttonProps } = button;
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
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-[30rem] overflow-hidden pl-[5vw] pr-[5vw] md:h-[40rem] lg:h-screen lg:pl-0"
      >
        <div className="grid w-full grid-cols-2 gap-x-4">
          <div className="-mt-[120%] grid size-full animate-loop-vertically columns-2 grid-cols-1 gap-4 self-center">
            {content.images.slice(0, 3).map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full overflow-hidden rounded-lg pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 hover:scale-105"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="grid size-full animate-loop-vertically grid-cols-1 gap-4">
            {content.images.slice(3, 6).map((image, index) => (
              <div key={index} className="grid size-full grid-cols-1 gap-4">
                <div className="relative w-full overflow-hidden rounded-lg pt-[120%]">
                  <img
                    className="absolute inset-0 size-full object-cover transition-transform duration-500 hover:scale-105"
                    src={image.src}
                    alt={image.alt}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
