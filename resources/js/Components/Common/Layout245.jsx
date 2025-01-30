import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Scale, BarChart2, Gavel } from 'lucide-react';

export const Layout245 = (props) => {
  const { tagline, heading, description, sections, buttons, className = '' } = {
    ...Layout245Defaults,
    ...props,
  };

  const renderIcon = (name) => {
    switch (name) {
      case 'Scale':
        return <Scale className="size-12" />;
      case 'BarChart2':
        return <BarChart2 className="size-12" />;
      case 'Gavel':
        return <Gavel className="size-12" />;
      default:
        return null;
    }
  };

  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start">
          <div className="mb-8 sm:mb-12 grid grid-cols-1 items-start justify-between gap-5 md:mb-16 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
            <div>
              <p className="mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4">
                {tagline}
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:text-5xl lg:text-6xl">
                {heading}
              </h2>
            </div>
            <p className="font-sans text-base sm:text-lg text-cod-gray-light">
              {description}
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-y-8 sm:gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
            {sections.map((section, index) => (
              <div key={index} className="group">
                <div className="mb-4 sm:mb-5 text-pippin-darker transition-colors duration-300 group-hover:text-pippin-darkest md:mb-6">
                  {renderIcon(section.iconName)}
                </div>
                <h3 className="mb-3 sm:mb-4 font-heading text-xl sm:text-2xl font-bold text-cod-gray md:text-3xl">
                  {section.heading}
                </h3>
                <p className="font-sans text-cod-gray-light">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 sm:mt-10 flex items-center gap-4 md:mt-14 lg:mt-16">
            {buttons.map((button, index) => (
              <Button 
                key={index} 
                {...button}
                className={button.variant === 'primary' 
                  ? 'bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray rounded-full'
                  : 'border-cod-gray bg-transparent text-cod-gray hover:bg-cod-gray hover:text-white rounded-full'}
              >
                {button.title}
                {button.iconRight && <ChevronRight className="size-4" />}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout245Defaults = {
  tagline: "Dispute Resolution",
  heading: "Resolving Business Conflicts Effectively",
  description: "We offer comprehensive dispute resolution services to help businesses resolve conflicts efficiently while preserving important relationships and protecting your interests.",
  sections: [
    {
      iconName: "Scale",
      heading: "Mediation",
      description: "Professional mediation services to facilitate productive dialogue and reach mutually beneficial resolutions while maintaining business relationships.",
    },
    {
      iconName: "BarChart2",
      heading: "Arbitration",
      description: "Expert arbitration representation to resolve disputes efficiently through a structured process, saving time and resources compared to litigation.",
    },
    {
      iconName: "Gavel",
      heading: "Litigation Support",
      description: "Strategic litigation support when necessary, providing strong advocacy and representation to protect your business interests in court.",
    }
  ],
  buttons: [
    { 
      title: "Schedule Consultation", 
      variant: "primary"
    },
    {
      title: "Learn More",
      variant: "link",
      iconRight: true
    }
  ],
};
