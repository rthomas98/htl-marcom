import { Button } from "@relume_io/relume-ui";
import clsx from "clsx";
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import { useForm } from '@inertiajs/react';

export const Blog1 = (props) => {
  const { tagline, heading, description, buttons, blogPosts, links } = {
    ...Blog1Defaults,
    ...props,
  };

  const { data, setData, get } = useForm({
    search: '',
  });

  const handleSearch = (e) => {
    e.preventDefault();
    get(route('insights', { search: data.search }), {
      preserveState: true,
      preserveScroll: true,
    });
  };

  const clearSearch = () => {
    setData('search', '');
    get(route('insights', { category: null, search: null }), {
      preserveState: true,
      preserveScroll: true,
    });
  };

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <p className="mb-3 font-sans font-semibold text-cod-gray-light md:mb-4">{tagline}</p>
            <h1 className="mb-5 font-heading text-6xl font-bold text-cod-gray md:mb-6 md:text-9xl lg:text-10xl">{heading}</h1>
            <p className="mb-6 font-sans text-cod-gray-light md:text-md">{description}</p>
            <Link
              href={route('newsletter')}
              className="inline-flex items-center justify-center rounded-full border border-cod-gray bg-cod-gray px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-pippin hover:text-cod-gray"
            >
              Subscribe to Newsletter
            </Link>
          </div>
          <div className="mx-auto mt-8 max-w-md">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={data.search}
                onChange={e => setData('search', e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-cod-gray/20 px-6 py-2.5 pr-24 text-sm font-sans text-cod-gray placeholder:text-cod-gray-light focus:border-cod-gray focus:outline-none focus:ring-1 focus:ring-cod-gray"
              />
              {data.search && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-12 top-1/2 -translate-y-1/2 rounded-full p-2 text-cod-gray-light transition-colors duration-200 hover:text-cod-gray"
                >
                  <X className="size-5" />
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-cod-gray-light transition-colors duration-200 hover:text-cod-gray"
              >
                <Search className="size-5" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start gap-2 overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={clsx(
                  "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                  {
                    "border border-cod-gray bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray": index === 0,
                    "border border-transparent text-cod-gray-light hover:border-cod-gray hover:text-cod-gray": !button.active && index !== 0,
                    "border border-cod-gray text-cod-gray": button.active && index !== 0,
                  }
                )}
              >
                {button.title}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
            {blogPosts.length > 0 ? (
              blogPosts.map((post, index) => (
                <div key={index}>
                  <Link href={post.url} className="mb-6 inline-block w-full max-w-full">
                    <div className="w-full overflow-hidden">
                      <img
                        src={post.image.src}
                        alt={post.image.alt}
                        className="aspect-[3/2] size-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <Link
                    href={post.url}
                    className="mb-2 mr-4 inline-block max-w-full text-sm font-semibold text-cod-gray-light hover:text-cod-gray transition-colors duration-200"
                  >
                    {post.category}
                  </Link>
                  <Link href={post.url} className="mb-2 block max-w-full group">
                    <h5 className="font-heading text-xl font-bold text-cod-gray transition-colors duration-200 group-hover:text-cod-gray-light md:text-2xl line-clamp-2">{post.title}</h5>
                  </Link>
                  <p className="font-sans text-cod-gray-light line-clamp-3">{post.description}</p>
                  <div className="mt-6 flex items-center">
                    <div className="mr-4 shrink-0">
                      <img
                        src={post.avatar.src}
                        alt={post.avatar.alt}
                        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h6 className="text-sm font-sans font-semibold text-cod-gray">{post.fullName}</h6>
                      <div className="flex items-center">
                        <p className="text-sm font-sans text-cod-gray-light">{post.date}</p>
                        <span className="mx-2 text-cod-gray-light">•</span>
                        <p className="text-sm font-sans text-cod-gray-light">{post.readTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="font-sans text-xl text-cod-gray-light mb-4">No articles found</p>
                <p className="font-sans text-cod-gray-light">Try adjusting your search terms or browse all articles</p>
                <Link
                  href={route('insights')}
                  className="mt-6 inline-flex items-center justify-center rounded-full border border-cod-gray px-6 py-2.5 text-sm font-semibold text-cod-gray transition-all duration-200 hover:bg-cod-gray hover:text-white"
                >
                  View All Articles
                </Link>
              </div>
            )}
          </div>
          {links && links.length > 3 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {links.map((link, i) => {
                if (link.url === null) {
                  return (
                    <span
                      key={i}
                      className="rounded-full px-4 py-2 text-sm font-semibold text-cod-gray-light"
                      dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                  );
                }

                const isActive = link.active;
                const isPrevNext = link.label.includes('Previous') || link.label.includes('Next');

                return (
                  <Link
                    key={i}
                    href={link.url}
                    className={clsx(
                      "flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                      {
                        "bg-cod-gray text-white": isActive,
                        "text-cod-gray-light hover:text-cod-gray": !isActive,
                        "gap-1": isPrevNext,
                      }
                    )}
                  >
                    {link.label.includes('Previous') && <ChevronLeft className="size-4" />}
                    <span dangerouslySetInnerHTML={{ __html: link.label.replace('Previous', '').replace('Next', '') }} />
                    {link.label.includes('Next') && <ChevronRight className="size-4" />}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export const Blog1Defaults = {
  tagline: "Blog",
  heading: "Short heading goes here",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  buttons: [
    { title: "View all", variant: "secondary" },
    { title: "Category one", variant: "link" },
    { title: "Category two", variant: "link" },
    { title: "Category three", variant: "link" },
    { title: "Category four", variant: "link" },
  ],
  categoryLink: "#",
  blogPosts: [],
  links: [],
};