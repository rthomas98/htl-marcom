import React from 'react';
import {
  Button,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const faqContent = {
  heading: "Frequently Asked Questions",
  description:
    "Get answers to common questions about trademark registration and protection.",
  questions: [
    {
      title: "How long does the trademark registration process take?",
      answer:
        "The trademark registration process typically takes 8-12 months from filing to registration, assuming there are no objections or office actions. However, you gain certain rights as soon as you file your application. We'll guide you through each step and keep you informed of your application's progress.",
    },
    {
      title: "What's the difference between ™ and ®?",
      answer:
        "The ™ symbol can be used with any unregistered trademark to claim common law rights. The ® symbol can only be used after your trademark is officially registered with the USPTO. Using ® without registration can result in legal penalties.",
    },
    {
      title: "What can I trademark?",
      answer:
        "You can trademark various brand identifiers including names, logos, slogans, symbols, designs, and sometimes sounds or colors. The mark must be distinctive and used in commerce. We can help evaluate if your mark qualifies for trademark protection.",
    },
    {
      title: "What happens if someone infringes on my trademark?",
      answer:
        "As a registered trademark owner, you have strong legal rights to prevent others from using similar marks. You can send cease and desist letters, file infringement lawsuits, and seek damages. We can help enforce your rights and protect your brand.",
    },
    {
      title: "Do I need a trademark search before registering?",
      answer:
        "Yes, a comprehensive trademark search is strongly recommended before filing. It helps identify potential conflicts that could block your registration and avoid costly legal disputes. We offer thorough clearance searches to assess your mark's availability.",
    },
  ],
  footerHeading: "Have more questions?",
  footerDescription: "Schedule a consultation to discuss your trademark needs.",
  button: {
    title: "Schedule Consultation",
    variant: "secondary",
    className: "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray transition-colors duration-300 rounded-full",
    href: "/contact"
  },
};

export default function RegistrationFAQ({ className = "", ...props }) {
  const content = { ...faqContent, ...props };

  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-18 lg:mb-20"
        >
          <h2 className="font-heading mb-5 text-4xl font-bold text-cod-gray md:mb-6 md:text-5xl lg:text-6xl">
            {content.heading}
          </h2>
          <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
            {content.description}
          </p>
        </motion.div>
        
        <Accordion type="multiple" className="space-y-4">
          {content.questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="border-b border-cod-gray/10 last:border-b-0"
              >
                <AccordionTrigger className="font-heading py-4 text-left text-lg font-medium text-cod-gray hover:text-pippin md:py-5 md:text-xl">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="font-sans pb-6 text-cod-gray/80">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20"
        >
          <h4 className="font-heading mb-3 text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {content.footerHeading}
          </h4>
          <p className="font-sans text-lg text-cod-gray/80 md:text-xl">
            {content.footerDescription}
          </p>
          <div className="mt-6 md:mt-8">
            <Link href={content.button.href}>
              <Button 
                {...content.button}
                className={content.button.className}
              >
                {content.button.title}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
