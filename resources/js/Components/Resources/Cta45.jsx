import { Button } from "@relume_io/relume-ui";
import { Link } from '@inertiajs/react';

const Cta45 = ({ heading, description, buttons, className = "" }) => {
  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container">
        <div className="grid grid-cols-1 items-start justify-start gap-6 border border-gallery bg-white p-8 md:grid-cols-[1fr_max-content] md:items-center md:justify-between md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:p-12 rounded-lg">
          <div className="md:mr-12 lg:mr-0">
            <div className="w-full max-w-lg">
              <h3 className="mb-3 font-heading text-4xl font-bold leading-[1.2] text-cod-gray md:mb-4 md:text-5xl lg:text-6xl">
                {heading}
              </h3>
              <p className="font-sans text-cod-gray-light md:text-md">{description}</p>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:w-auto md:justify-end">
            {buttons.map((button, index) => (
              <Link 
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center transition-colors duration-200 ${
                  button.variant === 'secondary' 
                    ? 'border border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white rounded-full px-6 py-2' 
                    : 'bg-cod-gray text-white hover:bg-cod-gray-light rounded-full px-6 py-2'
                }`}
              >
                {button.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Cta45Defaults = {
  heading: "Ready to protect your intellectual property?",
  description: "Schedule a consultation with our experienced trademark attorneys today.",
  buttons: [
    { 
      title: "Schedule Consultation", 
      href: route('contact')
    }, 
    { 
      title: "About Me", 
      variant: "secondary",
      href: route('about-me')
    }
  ],
};

export default Cta45;
