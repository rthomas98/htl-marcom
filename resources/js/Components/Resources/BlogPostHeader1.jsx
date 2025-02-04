import React from "react";
import { Link } from '@inertiajs/react';
import { Link as LinkIcon, Linkedin, Facebook } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@relume_io/relume-ui";

const BlogPostHeader1 = ({ breadcrumbs, heading, author, image, socialMediaLinks }) => {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 flex w-full max-w-lg flex-col items-start justify-start md:mb-16 lg:mb-20">
          <Breadcrumb className="mb-6 flex w-full items-center">
            <BreadcrumbList>
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem>
                    <BreadcrumbLink 
                      as={Link}
                      href={item.url}
                      className="font-sans text-cod-gray-light hover:text-cod-gray transition-colors duration-200"
                    >
                      {item.title}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && (
                    <BreadcrumbSeparator className="text-cod-gray-light" />
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="mb-8 font-heading text-5xl font-bold text-cod-gray md:mb-10 md:text-7xl lg:mb-12 lg:text-8xl">
            {heading}
          </h1>
          <div className="flex w-full flex-col items-start justify-between sm:flex-row sm:items-end">
            <div className="rb-4 mb-4 flex items-center sm:mb-0">
              <div className="mr-4 shrink-0">
                <img
                  src={author.avatar.src}
                  alt={author.avatar.alt}
                  className="size-14 min-h-14 min-w-14 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="font-sans font-semibold text-cod-gray">{author.fullName}</h6>
                <div className="mt-1 flex">
                  <p className="font-sans text-sm text-cod-gray-light">{author.date}</p>
                  <span className="mx-2 text-cod-gray-light">•</span>
                  <p className="font-sans text-sm text-cod-gray-light">{author.readTime}</p>
                </div>
              </div>
            </div>
            <div className="rt-4 mt-4 grid grid-flow-col grid-cols-[max-content] items-start gap-2">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (link.onClick) {
                      e.preventDefault();
                      link.onClick();
                    }
                  }}
                  className="rounded-full bg-gallery p-2 text-cod-gray hover:bg-cod-gray hover:text-white transition-colors duration-200"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mx-auto w-full overflow-hidden rounded-lg">
          <img 
            src={image.src} 
            className="aspect-[2] size-full object-cover" 
            alt={image.alt}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogPostHeader1;
