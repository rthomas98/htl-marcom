import React from 'react';
import { Button } from "@relume_io/relume-ui";
import { ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const BlogSection = ({ tagline, heading, description, button, blogPosts }) => {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-heading font-semibold text-cod-gray-light md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="font-sans text-cod-gray-light md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex size-full flex-col items-center justify-start border border-cod-gray/10 bg-white transition-all duration-300 hover:shadow-md"
            >
              <Link href={post.url} className="w-full">
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  className="aspect-[3/2] size-full object-cover"
                />
              </Link>
              <div className="px-5 py-6 md:p-6">
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <p className="mr-4 bg-pippin-lighter px-2 py-1 font-heading text-sm font-semibold text-cod-gray">
                    {post.category}
                  </p>
                  <p className="inline font-heading text-sm font-semibold text-cod-gray-light">
                    {post.readTime}
                  </p>
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <Link className="mb-2 hover:text-cod-gray-light" href={post.url}>
                    <h2 className="font-heading text-xl font-bold text-cod-gray md:text-2xl">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="font-sans text-cod-gray-light">{post.description}</p>
                  <Button
                    as={Link}
                    href={post.url}
                    variant="link"
                    className="mt-6 flex items-center justify-center gap-x-2 text-cod-gray hover:text-cod-gray-light"
                  >
                    {post.button.title}
                    <ChevronRight className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Button 
            as={Link}
            {...button}
            className="mt-10 bg-cod-gray text-white hover:bg-cod-gray-dark md:mt-14 lg:mt-16"
          >
            {button.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
