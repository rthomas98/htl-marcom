import React from "react";
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
import { ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from '@inertiajs/react';

export default function Layout500({
  tagline = "Renewal Process",
  heading = "Understanding Trademark Renewals",
  description = "Learn about the key stages of trademark renewal and how our experienced team ensures your intellectual property remains protected.",
  tabs = [],
  buttons = [],
  defaultTabValue = "declaration",
  ...rest
}) {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28" {...rest}>
      <div className="container">
        <motion.div 
          className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 md:w-auto lg:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 font-heading text-sm font-semibold text-cod-gray/80 md:mb-4">{tagline}</p>
          <h1 className="mb-5 font-heading text-4xl font-bold text-cod-gray md:mb-6 md:text-6xl lg:text-7xl">{heading}</h1>
          <p className="font-sans text-cod-gray/80 md:text-lg">{description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href || '#'}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                    button.variant === 'primary'
                        ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                        : "bg-pippin text-cod-gray hover:bg-pippin-light"
                }`}
              >
                {button.title}
                {button.variant === 'link' && <ChevronRight className="ml-2 h-4 w-4" />}
              </Link>
            ))}
          </div>
        </motion.div>
        <Tabs
          defaultValue={defaultTabValue}
          className="grid grid-cols-1 items-center gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20"
        >
          {tabs.map((tab, index) => (
            <TabsContent 
              key={index} 
              value={tab.value} 
              className="data-[state=active]:animate-tabs"
            >
              {tab.image && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <img 
                    src={tab.image.src} 
                    alt={tab.image.alt} 
                    className="aspect-video w-full rounded-lg object-cover" 
                  />
                </motion.div>
              )}
              {tab.video && (
                <Dialog>
                  <DialogTrigger asChild>
                    <motion.button 
                      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={tab.video.image.src}
                        alt={tab.video.image.alt}
                        className="aspect-video w-full object-cover"
                      />
                      <span className="absolute inset-0 bg-cod-gray/50 transition-colors hover:bg-cod-gray/40" />
                      <Play className="absolute z-20 size-16 text-white transition-transform hover:scale-110" />
                    </motion.button>
                  </DialogTrigger>

                  <DialogContent className="sm:max-w-[800px]">
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
                className="flex-col items-start whitespace-normal border-0 border-l-2 border-transparent bg-transparent py-4 pl-6 pr-0 text-left transition-colors hover:border-l-pippin data-[state=active]:border-l-cod-gray data-[state=active]:bg-transparent data-[state=active]:text-cod-gray md:pl-8"
              >
                <h3 className="mb-3 font-heading text-xl font-bold text-cod-gray md:mb-4 md:text-2xl lg:text-3xl">
                  {tab.heading}
                </h3>
                <p className="font-sans text-sm text-cod-gray/80 md:text-base">{tab.description}</p>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}
