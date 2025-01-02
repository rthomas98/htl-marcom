import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Scroll, Shield, FileText } from 'lucide-react';

export const Layout235 = (props) => {
  const { sections, className = '' } = { ...Layout235Defaults, ...props };
  
  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {sections.map((section, index) => (
            <div key={index} className="group">
              <div className="mb-6 text-pippin-darker transition-colors duration-300 group-hover:text-pippin-darkest md:mb-8">
                {section.icon === 'Scroll' && <Scroll className="size-12" />}
                {section.icon === 'Shield' && <Shield className="size-12" />}
                {section.icon === 'FileText' && <FileText className="size-12" />}
              </div>
              <p className="mb-3 font-heading text-base font-semibold text-pippin-darker md:mb-4">
                {section.tagline}
              </p>
              <h3 className="mb-5 font-heading text-2xl font-bold text-cod-gray md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {section.heading}
              </h3>
              <p className="font-sans text-cod-gray-light">
                {section.description}
              </p>
              <div className="mt-6 flex items-center gap-4 md:mt-8">
                {section.buttons.map((button, index) => (
                  <Button 
                    key={index} 
                    {...button}
                    className={button.variant === 'secondary' 
                      ? "rounded-full bg-white px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-gallery inline-flex items-center gap-2"
                      : "text-pippin-darker hover:text-pippin-darkest font-semibold inline-flex items-center gap-1"}
                  >
                    {button.title}
                    {button.variant === 'link' && <ChevronRight className="size-4" />}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout235Defaults = {
  sections: [
    {
      tagline: "Wills & Trusts",
      icon: "Scroll",
      heading: "Secure Your Legacy\nThrough Estate Documents",
      description: "We help you create comprehensive\nwills and establish trusts tailored\nto your needs, ensuring your assets\nare protected for future generations.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        { title: "See Details", variant: "link" }
      ],
    },
    {
      tagline: "Powers of Attorney",
      icon: "Shield",
      heading: "Protect Your Future\nWith Legal Authority",
      description: "Designate trusted individuals to\nmanage your financial and medical\ndecisions with carefully crafted\npower of attorney documents.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        { title: "See Details", variant: "link" }
      ],
    },
    {
      tagline: "Estate Administration",
      icon: "FileText",
      heading: "Navigate Probate\nWith Expert Guidance",
      description: "Our experienced team guides you\nthrough the probate process with\nprofessional expertise, ensuring\nefficient estate administration.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        { title: "See Details", variant: "link" }
      ],
    },
  ],
};
