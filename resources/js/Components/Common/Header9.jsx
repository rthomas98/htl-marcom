import React from 'react';
import { Button } from "@relume_io/relume-ui";

const placeholderImage = '/images/placeholder.svg';

export const Header9 = (props) => {
  const { heading, description, buttons, image, className = '' } = {
    ...Header9Defaults,
    ...props,
  };
  
  return (
    <section id="relume" className={`flex h-svh min-h-svh flex-col ${className}`}>
      <div className="relative flex-1">
        <div className="absolute inset-0 -z-10">
          <img
            src={image.src}
            alt={image.alt}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
      <div className="px-[5%]">
        <div className="container">
          <div className="grid grid-rows-1 items-start gap-y-5 py-12 md:grid-cols-2 md:gap-x-12 md:gap-y-8 md:py-18 lg:gap-x-20 lg:gap-y-16 lg:py-20">
            <h1 className="font-heading text-6xl font-bold text-cod-gray md:text-8xl lg:text-9xl">
              {heading}
            </h1>
            <div>
              <p className="font-sans text-base text-cod-gray md:text-lg">
                {description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {buttons.map((button, index) => {
                  const { title, icon: Icon, ...buttonProps } = button;
                  return (
                    <Button key={index} {...buttonProps}>
                      {Icon && <Icon className="mr-2 size-5" />}
                      {title}
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Header9Defaults = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: placeholderImage,
    alt: "Placeholder image",
  },
};
