import React from 'react';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const Header5Defaults = {
  heading: "Secure Your Legacy Through Estate Planning",
  description:
    "Protect your assets and provide for your loved ones with comprehensive estate planning services. Our experienced attorneys will help you create a tailored plan that ensures your wishes are honored.",
  buttons: [
    { 
      title: "Schedule Consultation",
      variant: "primary",
      icon: Calendar,
      href: "#"
    }, 
    { 
      title: "Learn More",
      variant: "secondary",
      icon: ArrowRight,
      href: "#"
    }
  ],
  image: {
    src: "/images/estate-planning-hero.webp",
    alt: "Estate Planning Services at Hebert-Thomas Law",
  },
};

function Header5(props) {
  const { heading, description, buttons, image, ...rest } = {
    ...Header5Defaults,
    ...props,
  };

  return (
    <section 
      className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image.src})` }}
      {...rest}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-[5%]">
        <div className="container mx-auto flex min-h-screen items-center py-16 md:py-24 lg:py-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md"
          >
            <h1 className="mb-5 font-heading text-6xl font-bold text-white md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="font-sans text-white/90 md:text-lg">{description}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              {buttons.map((button, index) => (
                <Link 
                  key={index} 
                  href={button.href}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                    button.variant === 'primary'
                      ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                      : "bg-pippin text-cod-gray hover:bg-pippin-light"
                  }`}
                >
                  {button.icon && <button.icon className="size-4" />}
                  {button.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header5;
