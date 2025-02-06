import React from "react";
import { Link } from '@inertiajs/react';

const imageColumns = [
  { className: "-mt-[20%] animate-loop-vertically-top" },
  { className: "-mt-[50%] animate-loop-vertically-bottom" },
  { className: "animate-loop-vertically-top" },
  { className: "mt-[-30%] animate-loop-vertically-bottom" },
  { className: "mt-[-20%] animate-loop-vertically-top" },
];

export const Header79 = (props) => {
  const { heading, description, buttons, imagesPartOne, imagesPartTwo } = {
    ...Header79Defaults,
    ...props,
  };
  return (
    <section id="relume" className="relative bg-cod-gray">
      <div className="px-[5%]">
        <div className="flex max-h-[60rem] min-h-svh items-center">
          <div className="container relative z-20 py-16 md:py-24 lg:py-28">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="mb-5 font-heading text-6xl font-bold text-white md:mb-6 md:text-9xl lg:text-10xl">
                {heading}
              </h1>
              <p className="font-sans text-white md:text-md">{description}</p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                {buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                      button.variant === 'primary'
                        ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                        : "border border-white text-white hover:bg-white hover:text-cod-gray"
                    }`}
                  >
                    {button.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-10 overflow-hidden">
            <div className="grid h-full w-full grid-cols-2 gap-x-4 px-4 md:grid-cols-3 lg:grid-cols-5">
              {imageColumns.map((column, index) => (
                <AnimatedImageColumn
                  key={index}
                  imagesPartOne={imagesPartOne}
                  imagesPartTwo={imagesPartTwo}
                  className={column.className}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-black/50 z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ImageGrid = ({ images }) => (
  <React.Fragment>
    {images.map((image, index) => (
      <div key={index} className="grid size-full grid-cols-1 gap-4">
        <div className="relative w-full pt-[120%]">
          <img
            className="absolute inset-0 size-full object-cover"
            src={image.src}
            alt={image.alt}
          />
        </div>
      </div>
    ))}
  </React.Fragment>
);

const AnimatedImageColumn = ({
  imagesPartOne,
  imagesPartTwo,
  className,
}) => (
  <div className={`grid size-full columns-2 grid-cols-1 gap-4 self-center ${className}`}>
    <ImageGrid images={imagesPartOne} />
    <ImageGrid images={imagesPartTwo} />
  </div>
);

export const Header79Defaults = {
  heading: "Empowering Your Business Through Legal Excellence",
  description:
    "Protecting your intellectual property and business interests with comprehensive legal solutions tailored to your needs.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      href: route('contact')
    },
    { 
      title: "Learn More",
      variant: "secondary",
      href: route('about-me')
    }
  ],
  imagesPartOne: [
    {
      src: "/images/home/hero/home-1.jpg",
      alt: "Legal consultation",
    },
    {
      src: "/images/home/hero/h-hero-2.jpg",
      alt: "Business meeting",
    },
    {
      src: "/images/home/hero/h-hero-3.jpg",
      alt: "Legal document signing",
    },
    {
      src: "/images/home/hero/shutterstock_1751360906.jpg",
      alt: "Legal professionals",
    },
    {
      src: "/images/home/hero/shutterstock_2149633471.jpg",
      alt: "Business discussion",
    },
    {
      src: "/images/home/hero/shutterstock_2155127675.jpg",
      alt: "Corporate meeting",
    },
    {
      src: "/images/home/hero/shutterstock_2250194205.jpg",
      alt: "Legal consultation",
    },
  ],
  imagesPartTwo: [
    {
      src: "/images/home/hero/h-hero-4.jpg",
      alt: "Corporate law office",
    },
    {
      src: "/images/home/hero/h-hero-5.jpg",
      alt: "Legal team discussion",
    },
    {
      src: "/images/home/hero/h-hero-6.jpg",
      alt: "Client meeting",
    },
    {
      src: "/images/home/hero/shutterstock_2570475845.jpg",
      alt: "Legal advice",
    },
    {
      src: "/images/home/hero/shutterstock_2575125383.jpg",
      alt: "Business strategy",
    },
    {
      src: "/images/home/hero/shutterstock_2578625115.jpg",
      alt: "Professional meeting",
    },
    {
      src: "/images/home/hero/h-hreo-7.jpg",
      alt: "Legal research",
    },
    {
      src: "/images/home/hero/h-hreo-8.jpg",
      alt: "Modern law office",
    },
  ],
};

export default Header79;
