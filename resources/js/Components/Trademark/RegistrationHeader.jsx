import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { motion } from 'framer-motion';

const defaultImages = [
  {
    src: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Business professional reviewing documents",
  },
  {
    src: "https://images.pexels.com/photos/6615076/pexels-photo-6615076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Legal consultation meeting",
  },
  {
    src: "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Professional signing documents",
  },
  {
    src: "https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Legal documents review",
  },
  {
    src: "https://images.pexels.com/photos/5439147/pexels-photo-5439147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Business meeting and consultation",
  },
  {
    src: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
        className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300"
      },
      { 
        title: "Learn More",
        variant: "secondary",
        className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white transition-colors duration-300"
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
