import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';

const placeholderImage = '/images/placeholder.svg';

export const Layout384 = (props) => {
  const { tagline, heading, description, cards, className = '' } = {
    ...Layout384Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold text-pippin-darker md:mb-4">{tagline}</p>
          <h1 className="mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="font-sans text-cod-gray-light md:text-lg">{description}</p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-6 md:gap-8 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = (card) => {
  return (
    <div className="flex flex-col border border-gallery last-of-type:grid last-of-type:auto-cols-fr last-of-type:grid-cols-1 last-of-type:sm:grid-cols-2 lg:last-of-type:col-span-2">
      <div className="block p-6 first-of-type:flex-1 sm:flex sm:flex-col sm:justify-center md:p-8">
        <div>
          <p className="mb-2 font-semibold text-pippin-darker">{card.tagline}</p>
          <h2 className="mb-3 font-heading text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {card.heading}
          </h2>
          <p className="text-cod-gray-light">{card.description}</p>
        </div>
        <div className="mt-5 md:mt-6">
          <Button {...card.button}>
            {card.button.title}
            {card.button.iconRight && <ChevronRight className="ml-2 size-5" />}
          </Button>
        </div>
      </div>
      <div className="flex size-full flex-col items-center justify-center self-start">
        <img src={card.image.src} alt={card.image.alt} className="size-full object-cover" />
      </div>
    </div>
  );
};

export const Layout384Defaults = {
  tagline: "Trademark Licensing",
  heading: "Expand Your Brand's Reach",
  description: "Introduction to Trademark Licensing Agreements and their importance for brand expansion and revenue generation.",
  cards: [
    {
      tagline: "Brand Growth",
      image: {
        src: placeholderImage,
        alt: "Brand Growth through Licensing",
      },
      heading: "Strategic Brand Expansion",
      description: "Leverage your trademark through carefully structured licensing agreements to enter new markets and generate additional revenue streams.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: true,
        className: "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light"
      },
    },
    {
      tagline: "Legal Protection",
      image: {
        src: placeholderImage,
        alt: "Legal Protection in Licensing",
      },
      heading: "Secure Your Brand's Future",
      description: "Protect your trademark's integrity with comprehensive licensing agreements that maintain quality control and brand consistency.",
      button: {
        title: "Explore Services",
        variant: "link",
        size: "link",
        iconRight: true,
        className: "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light"
      },
    },
  ],
};
