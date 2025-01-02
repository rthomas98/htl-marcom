import React from 'react';
import { Shield, Scale, FileText, Bell } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout12 = (props) => {
  const { heading, description, image, subHeadings, className = '' } = {
    ...Layout12Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold leading-tight text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mb-6 font-sans text-base sm:text-lg text-cod-gray-light md:mb-8">
              {description}
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              {subHeadings.map((subHeading, index) => (
                <div key={index} className="max-w-[540px] sm:max-w-none">
                  <div className="mb-3 text-pippin-darker md:mb-4">
                    {subHeading.icon}
                  </div>
                  <h6 className="mb-2 sm:mb-3 font-heading text-base sm:text-lg font-bold leading-tight text-cod-gray md:mb-4 md:text-xl">
                    {subHeading.title}
                  </h6>
                  <p className="font-sans text-sm sm:text-base text-cod-gray-light">
                    {subHeading.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src={image.src} 
              className="mx-auto w-full max-w-[540px] rounded-lg object-cover shadow-lg md:max-w-none" 
              alt={image.alt} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout12Defaults = {
  heading: "Ongoing Support",
  description: "We provide continuous support and advice to manage and enforce your trademark licensing agreements effectively, ensuring long-term protection and value for your brand.",
  subHeadings: [
    {
      icon: <Bell className="size-12" />,
      title: "Monitoring & Alerts",
      description: "Regular monitoring of licensee activities and instant alerts for any compliance issues or market changes.",
    },
    {
      icon: <FileText className="size-12" />,
      title: "Documentation Support",
      description: "Assistance with maintaining proper records and documentation for all licensing activities.",
    },
    {
      icon: <Scale className="size-12" />,
      title: "Dispute Resolution",
      description: "Expert guidance in resolving any disputes that may arise during the licensing term.",
    },
    {
      icon: <Shield className="size-12" />,
      title: "Quality Control",
      description: "Implementation of effective quality control measures to maintain brand standards.",
    },
  ],
  image: {
    src: placeholderImage,
    alt: "Ongoing Trademark Support",
  },
};
