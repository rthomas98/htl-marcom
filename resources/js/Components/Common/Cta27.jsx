import React from 'react';
import { Button } from "@relume_io/relume-ui";

export const Cta27Defaults = {
  heading: "Secure Your Legacy\nToday",
  description:
    "Take the first step in protecting your assets and providing for your loved ones. Schedule a consultation with our experienced estate planning attorneys.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      className: "bg-cod-gray text-white hover:bg-cod-gray/90"
    }, 
    { 
      title: "Learn More",
      variant: "secondary",
      className: "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white"
    }
  ],
  image: {
    src: "/images/placeholder.svg",
    alt: "Estate Planning Consultation",
  },
};

export const Cta27 = ({ className, ...props }) => {
  const { heading, description, buttons, image } = {
    ...Cta27Defaults,
    ...props,
  };
  
  return (
    <section className={`relative px-[5%] py-16 md:py-24 lg:py-28 ${className || ''}`}>
      <div className="container max-w-lg text-center">
        <h2 className="mb-5 text-5xl font-bold text-cod-gray whitespace-pre-line md:mb-6 md:text-7xl lg:text-8xl">
          {heading}
        </h2>
        <p className="text-cod-gray md:text-md">{description}</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-pippin">
        <div className="absolute inset-0 bg-pippin" />
      </div>
    </section>
  );
};
