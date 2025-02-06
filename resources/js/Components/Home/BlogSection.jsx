import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from '@inertiajs/react';

const BlogSection = ({ tagline, heading, description, button, blogPosts }) => {
  return (
    <section className="bg-white px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-heading font-semibold text-cod-gray-light md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl line-clamp-2">
              {heading}
            </h2>
            <p className="font-sans text-cod-gray-light md:text-md line-clamp-3">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="flex size-full flex-col items-center justify-start border border-cod-gray/10 bg-white transition-all duration-300 hover:shadow-md"
            >
              <Link href={post.slug} className="w-full">
                <img
                  src={post.featured_image_url || post.image.src}
                  alt={post.image.alt}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
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
                  <Link className="mb-2 hover:text-cod-gray-light" href={post.slug}>
                    <h2 className="font-heading text-xl font-bold text-cod-gray md:text-2xl line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="font-sans text-cod-gray-light line-clamp-3">{post.description}</p>
                  <Link
                    href={post.slug}
                    className="group mt-4 inline-flex items-center gap-2 rounded-full text-cod-gray transition hover:text-cod-gray-light"
                  >
                    {post.button.title}
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Link
            href={route('insights')}
            className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
              button.variant === 'primary'
                ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                : "bg-pippin text-cod-gray hover:bg-pippin-light"
            }`}
          >
            {button.title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
