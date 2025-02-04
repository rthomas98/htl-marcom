import React from 'react';
import { Link } from '@inertiajs/react';

export const Header96 = ({ heading, description, buttons, className = '' }) => {
  const defaultProps = {
    heading: "Medium length hero heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    buttons: [
      { title: "Button", variant: "primary", href: "#" },
      { title: "Button", variant: "secondary", href: "#" },
    ],
  };

  const { heading: finalHeading, description: finalDescription, buttons: finalButtons } = {
    ...defaultProps,
    ...{ heading, description, buttons },
  };

  return (
    <section id="relume" className={`px-[5%] py-12 md:py-16 lg:py-20 ${className}`}>
      <div className="container">
        <div className="relative flex min-h-[32rem] flex-col items-center justify-center border border-cod-gray/10 p-8 text-center md:min-h-[40rem] md:p-16 bg-white">
          <div className="w-full max-w-lg">
            <h1 className="mb-5 font-heading text-6xl font-bold text-cod-gray md:mb-6 md:text-9xl lg:text-10xl">{finalHeading}</h1>
            <p className="font-sans text-cod-gray-light md:text-md">{finalDescription}</p>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
            {finalButtons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                onClick={button.onClick}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  button.variant === 'primary'
                    ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                    : "bg-pippin text-cod-gray hover:bg-pippin-light"
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

export default Header96;
