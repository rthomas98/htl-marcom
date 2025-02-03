import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  VideoIframe,
} from "@relume_io/relume-ui";
import { Play } from 'lucide-react';
import { Link } from '@inertiajs/react';

const placeholderImage = '/images/placeholder.svg';

export const Layout500 = (props) => {
  const { tagline, heading, description, tabs, buttons, defaultTabValue, className = '' } = {
    ...Layout500Defaults,
    ...props,
  };

  return (
    <section className={`px-5 sm:px-[5%] py-12 sm:py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-8 sm:mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <p className="mb-3 font-heading text-base sm:text-lg font-semibold text-pippin-darker md:mb-4">
            {tagline}
          </p>
          <h2 className="mb-4 sm:mb-5 font-heading text-3xl sm:text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          <p className="font-sans text-base sm:text-lg text-cod-gray-light">
            {description}
          </p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={button.variant === 'primary' 
                  ? "rounded-full bg-cod-gray px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-cod-gray-light inline-flex items-center gap-2"
                  : button.variant === 'link'
                  ? "text-pippin-darker hover:text-pippin-darkest font-semibold inline-flex items-center gap-1"
                  : "rounded-full bg-pippin px-6 py-3 text-sm font-semibold text-cod-gray shadow-sm transition hover:bg-pippin-light inline-flex items-center gap-2"}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
        <Tabs
          defaultValue={defaultTabValue}
          className="grid grid-cols-1 items-center gap-y-8 sm:gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          {tabs.map((tab, index) => (
            <TabsContent 
              key={index} 
              value={tab.value} 
              className="data-[state=active]:animate-tabs rounded-lg overflow-hidden"
            >
              {tab.image && (
                <img 
                  src={tab.image.src} 
                  alt={tab.image.alt} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
              {tab.video && (
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="relative flex w-full items-center justify-center rounded-lg overflow-hidden">
                      <img
                        src={tab.video.image.src}
                        alt={tab.video.image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <span className="absolute inset-0 z-10 bg-black/50" />
                      <Play className="absolute z-20 size-16 text-white" />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <VideoIframe video={tab.video.url} />
                  </DialogContent>
                </Dialog>
              )}
            </TabsContent>
          ))}
          <TabsList className="grid grid-cols-1 items-center gap-x-4">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left data-[state=active]:border-l-pippin data-[state=active]:bg-transparent data-[state=active]:text-cod-gray md:pl-8"
              >
                <h3 className="mb-3 font-heading text-xl font-bold text-cod-gray sm:mb-4 sm:text-2xl md:text-3xl lg:text-4xl">
                  {tab.heading}
                </h3>
                <p className="font-sans text-base text-cod-gray-light">
                  {tab.description}
                </p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export const Layout500Defaults = {
  tagline: "Contract Management",
  heading: "Expert Contract Solutions for Your Business",
  description: "Comprehensive contract services to protect your interests and ensure smooth business operations.",
  defaultTabValue: "drafting",
  tabs: [
    {
      value: "drafting",
      heading: "Contract Drafting",
      description: "Custom contract creation tailored to your specific business needs, ensuring comprehensive coverage and protection of your interests.",
      image: {
        src: placeholderImage,
        alt: "Contract Drafting Services",
      },
    },
    {
      value: "review",
      heading: "Contract Review",
      description: "Thorough analysis of contracts to identify potential risks, ensure compliance, and protect your business interests.",
      image: {
        src: placeholderImage,
        alt: "Contract Review Services",
      },
    },
    {
      value: "negotiation",
      heading: "Contract Negotiation",
      description: "Strategic negotiation services to secure favorable terms while maintaining positive business relationships.",
      image: {
        src: placeholderImage,
        alt: "Contract Negotiation Services",
      },
    },
  ],
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: "#",
    },
    {
      title: "Learn More",
      variant: "link",
      href: "#",
    },
  ],
};
