import React, { useState } from 'react';
import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Link, usePage, router } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import debounce from 'lodash/debounce';
import { motion } from 'framer-motion';

const ImageProps = {
  src: String,
  alt: String,
};

const BlogPost = {
  url: String,
  image: ImageProps,
  category: String,
  readTime: String,
  title: String,
  description: String,
  author_profile_image: String,
  author: Object,
  fullName: String,
  date: String,
};

const Props = {
  tagline: String,
  heading: String,
  description: String,
  buttons: Array,
  categoryLink: String,
  blogPosts: Array,
};

const PaginationButton = ({ disabled, onClick, children, className }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      "flex items-center justify-center px-4 py-2 rounded-full border font-sans text-sm transition-colors duration-200",
      disabled
        ? "border-cod-gray-light text-cod-gray-light cursor-not-allowed"
        : "border-cod-gray text-cod-gray hover:bg-cod-gray hover:text-white",
      className
    )}
  >
    {children}
  </button>
);

export const Blog1 = (props) => {
  const { tagline, heading, description, buttons, categoryLink, blogPosts } = {
    ...Blog1Defaults,
    ...props,
  };

  const { currentCategory, search: initialSearch } = usePage().props;
  const { data, links, current_page, last_page } = blogPosts;
  const [search, setSearch] = useState(initialSearch || '');

  const debouncedSearch = debounce((value) => {
    router.get(
      route('insights'),
      { search: value, category: currentCategory },
      { preserveState: true, preserveScroll: true }
    );
  }, 300);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    debouncedSearch(value);
  };

  const clearSearch = () => {
    setSearch('');
    router.get(
      route('insights'),
      { category: currentCategory },
      { preserveState: true, preserveScroll: true }
    );
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-sans font-semibold text-cod-gray-light md:mb-4">{tagline}</p>
            <h1 className="mb-5 font-heading text-6xl font-bold text-cod-gray md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="font-sans text-cod-gray-light md:text-md">{description}</p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search articles..."
                className="w-full rounded-lg border border-cod-gray px-4 py-2 pl-10 pr-8 font-sans text-sm text-cod-gray placeholder-cod-gray-light focus:border-cod-gray focus:outline-none focus:ring-1 focus:ring-cod-gray transition-all duration-200"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
                <Search className="h-4 w-4 text-cod-gray-light" />
              </div>
              {search && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute right-2 top-0 h-full flex items-center"
                >
                  <button
                    onClick={clearSearch}
                    className="flex items-center justify-center rounded-full p-0.5 text-cod-gray-light hover:bg-cod-gray hover:text-white transition-colors duration-200"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={index === 0 ? route('insights') : route('insights', { category: button.title })}
                className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                  (index === 0 && !currentCategory) || button.title === currentCategory
                    ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                    : "bg-pippin text-cod-gray hover:bg-pippin-light"
                }`}
              >
                {button.title}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {data?.map((post, index) => (
              <div key={index} className="w-full">
                <Link
                  href={route('insight.detail', { slug: post.url.split('/').pop() })}
                  className="group mb-4 block w-full overflow-hidden md:mb-5"
                >
                  <div className="w-full overflow-hidden rounded-lg">
                    <img
                      src={post.image.src}
                      alt={post.image.alt}
                      className="aspect-[3/2] size-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <Link
                  href={route('insights', { category: post.category })}
                  className="mb-2 mr-4 inline-block max-w-full font-sans text-sm font-semibold text-cod-gray hover:text-cod-gray-light"
                >
                  {post.category}
                </Link>

                <Link href={route('insight.detail', { slug: post.url.split('/').pop() })} className="mb-2 block max-w-full group">
                  <h5 className="font-heading text-xl font-bold text-cod-gray transition-colors duration-200 group-hover:text-cod-gray-light md:text-2xl">{post.title}</h5>
                </Link>
                <p className="font-sans text-cod-gray-light">{post.description}</p>
                <div className="mt-6 flex items-center">
                  <div className="mr-4 shrink-0">
                    <img
                      src={post.author_profile_image}
                      alt={post.author?.name || 'Author'}
                      className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h6 className="font-sans text-sm font-semibold text-cod-gray">{post.author?.name || post.fullName}</h6>
                    <div className="flex items-center">
                      <p className="font-sans text-sm text-cod-gray-light">{post.date}</p>
                      <span className="mx-2 text-cod-gray-light">•</span>
                      <p className="font-sans text-sm text-cod-gray-light">{post.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {last_page > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {links.prev ? (
                <Link href={links.prev} preserveScroll>
                  <PaginationButton>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Previous
                  </PaginationButton>
                </Link>
              ) : (
                <PaginationButton disabled>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </PaginationButton>
              )}
              <div className="flex items-center justify-center px-4 font-sans text-sm text-cod-gray">
                Page {current_page} of {last_page}
              </div>
              {links.next ? (
                <Link href={links.next} preserveScroll>
                  <PaginationButton>
                    <ChevronRight className="ml-2 h-4 w-4" />
                    Next
                  </PaginationButton>
                </Link>
              ) : (
                <PaginationButton disabled>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </PaginationButton>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Blog1Defaults = {
  tagline: "Legal Insights",
  heading: "Knowledge Hub",
  description: "Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.",
  buttons: [
    {
      title: "View all",
      variant: "secondary",
    },
  ],
  categoryLink: "#",
  blogPosts: {
    data: [],
    links: {},
    current_page: 1,
    last_page: 1,
  },
};
