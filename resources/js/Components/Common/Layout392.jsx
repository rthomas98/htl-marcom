import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight, Globe2, Scale, Shield, FileCheck } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout392 = (props) => {
  const { tagline, heading, description, cards, featureSections, className = '' } = {
    ...Layout392Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-8 sm:mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4">
            {tagline}
          </p>
          <h1 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h1>
          <p className="font-sans text-base sm:text-lg text-cod-gray-light">
            {description}
          </p>
        </div>
        <div className="grid auto-cols-fr gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
          {featureSections.map((feature, index) => (
            <FeatureSection key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = (card) => {
  return (
    <div className="grid auto-cols-fr grid-cols-1 overflow-hidden rounded-lg border border-gallery bg-white first-of-type:row-span-2 first-of-type:flex first-of-type:flex-col sm:col-span-2 sm:grid-cols-2 lg:first-of-type:col-span-1">
      <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
        <div>
          <p className="mb-2 font-heading text-sm font-semibold text-pippin-darker sm:text-base">
            {card.tagline}
          </p>
          <h2 className="mb-3 font-heading text-xl font-bold text-cod-gray sm:text-2xl md:mb-4 md:text-3xl lg:text-4xl">
            {card.heading}
          </h2>
          <p className="font-sans text-cod-gray-light">
            {card.description}
          </p>
        </div>
        <div className="mt-5 md:mt-6">
          <Button 
            {...card.button}
            className="text-pippin-darker hover:text-pippin-darkest font-semibold inline-flex items-center gap-1"
          >
            {card.button.title}
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>
      <div className="flex size-full flex-col items-center justify-center self-start bg-gallery/50 p-6 lg:h-auto">
        <img 
          src={card.image.src} 
          className="max-w-full rounded-lg object-cover shadow-lg" 
          alt={card.image.alt}
          loading="lazy"
        />
      </div>
    </div>
  );
};

const FeatureSection = (featureSection) => (
  <div className="flex flex-col overflow-hidden rounded-lg border border-gallery bg-white">
    <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
      <div>
        <div className="mb-4 sm:mb-5 text-pippin-darker md:mb-6">
          {featureSection.icon}
        </div>
        <h2 className="mb-3 font-heading text-xl font-bold text-cod-gray sm:text-2xl md:mb-4 md:text-3xl">
          {featureSection.heading}
        </h2>
        <p className="font-sans text-cod-gray-light">
          {featureSection.description}
        </p>
      </div>
      <div className="mt-5 md:mt-6">
        <Button 
          {...featureSection.button}
          className="text-pippin-darker hover:text-pippin-darkest font-semibold inline-flex items-center gap-1"
        >
          {featureSection.button.title}
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  </div>
);

export const Layout392Defaults = {
  tagline: "Global Brand Protection",
  heading: "International Trademark Registration",
  description: "Overview of international trademark registration and its benefits for businesses seeking global expansion.",
  cards: [
    {
      tagline: "Madrid Protocol",
      image: {
        src: placeholderImage,
        alt: "Madrid Protocol Registration",
      },
      heading: "Streamlined International Filing",
      description: "File a single international application to protect your trademark in multiple countries through the Madrid Protocol system.",
      button: {
        title: "Learn About Madrid Protocol",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
    {
      tagline: "Direct Filing",
      image: {
        src: placeholderImage,
        alt: "Direct National Filing",
      },
      heading: "Direct National Registration",
      description: "Strategic direct filing in specific countries to ensure comprehensive trademark protection.",
      button: {
        title: "Explore Direct Filing",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
  ],
  featureSections: [
    {
      icon: <Globe2 className="size-12" />,
      heading: "Global Coverage",
      description: "Access to international trademark protection in over 120 countries through various filing systems.",
      button: {
        title: "View Coverage",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
    {
      icon: <Scale className="size-12" />,
      heading: "Local Compliance",
      description: "Expert guidance on meeting local trademark requirements and regulations in each jurisdiction.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
    {
      icon: <Shield className="size-12" />,
      heading: "Enforcement Support",
      description: "Comprehensive assistance in monitoring and enforcing your trademark rights internationally.",
      button: {
        title: "Discover Services",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
    {
      icon: <FileCheck className="size-12" />,
      heading: "Strategic Planning",
      description: "Develop an effective international trademark strategy aligned with your business goals.",
      button: {
        title: "Start Planning",
        variant: "link",
        size: "link",
        iconRight: true,
      },
    },
  ],
};
