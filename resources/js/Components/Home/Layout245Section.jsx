import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Search, FileCheck, Shield } from 'lucide-react';

const Layout245Section = ({ tagline, heading, description, sections, buttons }) => {
  const icons = {
    'trademark-search': Search,
    'trademark-registration': FileCheck,
    'trademark-monitoring': Shield,
  };

  return (
    <section className="bg-cod-gray text-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="rb-12 mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-heading font-semibold md:mb-4">{tagline}</p>
              <h2 className="font-heading text-5xl font-bold md:text-7xl lg:text-8xl">{heading}</h2>
            </div>
            <p className="md:text-md font-sans">{description}</p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => {
              const IconComponent = icons[section.icon.src];
              return (
                <div key={index}>
                  <div className="rb-5 mb-5 md:mb-6">
                    {IconComponent && (
                      <IconComponent className="size-6 text-white" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="mb-5 font-heading text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {section.heading}
                  </h3>
                  <p className="font-sans">{section.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {buttons.map((button, index) => (
              <Button 
                key={index} 
                {...button}
                className={
                  button.variant === 'secondary' 
                    ? 'rounded-full bg-white text-cod-gray hover:bg-cod-gray-lightest hover:text-cod-gray transition-colors duration-200'
                    : 'rounded-full text-white hover:text-pippin transition-colors duration-200'
                }
              >
                {button.title}
                {button.iconRight && <ChevronRight className="ml-2 size-4" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layout245Section;
