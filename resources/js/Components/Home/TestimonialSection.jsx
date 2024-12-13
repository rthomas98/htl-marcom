import React from 'react';
import { Star } from 'lucide-react';

const Testimonial = ({ testimonial }) => (
  <div className="flex h-full max-w-lg flex-col items-start justify-start text-left">
    <div className="mb-6 flex md:mb-8">
      {[...Array(testimonial.numberOfStars)].map((_, starIndex) => (
        <Star key={starIndex} className="size-6 fill-current text-cod-gray" />
      ))}
    </div>
    <blockquote className="font-heading text-md font-bold leading-[1.4] md:text-xl text-cod-gray">
      {testimonial.quote}
    </blockquote>
    <div className="mt-6 flex w-full flex-col md:mt-8 md:w-auto">
      <div className="mb-4">
        <img
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          className="size-14 min-h-14 min-w-14 rounded-full object-cover"
        />
      </div>
      <div className="mb-3 md:mb-4">
        <p className="font-heading font-semibold text-cod-gray">{testimonial.name}</p>
        <p className="font-sans text-cod-gray-light">{testimonial.position}</p>
      </div>
      <div className="hidden w-px self-stretch bg-cod-gray/20 md:block" />
      <div>
        <img src={testimonial.logo.src} alt={testimonial.logo.alt} className="max-h-12" />
      </div>
    </div>
  </div>
);

const TestimonialSection = ({ heading, description, testimonials }) => {
  return (
    <section className="bg-pippin-lighter text-cod-gray px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 w-full md:mb-18 lg:mb-20">
          <h1 className="mb-5 font-heading text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h1>
          <p className="font-sans md:text-md text-cod-gray-light">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
