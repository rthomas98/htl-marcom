import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function Faq1({
  heading = "FAQs",
  description = "",
  questions = [],
  footerHeading = "Still have questions?",
  footerDescription = "",
  button = {},
  ...rest
}) {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container max-w-lg">
        <motion.div 
          className="mb-12 text-center sm:mb-14 md:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-heading text-4xl font-bold text-cod-gray sm:text-5xl md:mb-5 md:text-6xl lg:mb-6 lg:text-7xl">
            {heading}
          </h2>
          <p className="font-sans text-cod-gray/80 md:text-lg">{description}</p>
        </motion.div>
        
        <Accordion type="multiple" className="space-y-4">
          {questions.map((question, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem 
                value={`item-${index}`}
                className="rounded-lg border border-gallery bg-white"
              >
                <AccordionTrigger className="w-full p-4 text-left font-heading font-semibold text-cod-gray transition-colors duration-200 hover:text-pippin sm:p-5 md:text-lg">
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className="overflow-hidden px-4 pb-4 font-sans text-cod-gray/80 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down sm:px-5 sm:pb-5">
                  {question.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div 
          className="mx-auto mt-12 max-w-md text-center sm:mt-14 md:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="mb-3 font-heading text-2xl font-bold text-cod-gray md:mb-4 md:text-3xl lg:text-4xl">
            {footerHeading}
          </h4>
          <p className="font-sans text-cod-gray/80 md:text-lg">{footerDescription}</p>
          <div className="mt-6 md:mt-8">
            <Link
              href={button.href || '#'}
              className={`inline-flex items-center justify-center gap-2 rounded-full bg-cod-gray px-6 py-3 font-sans text-base font-medium text-white transition-colors duration-200 hover:bg-pippin hover:text-cod-gray md:text-lg ${button.className || ''}`}
            >
              {button.title}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
