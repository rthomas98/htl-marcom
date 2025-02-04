import { Button } from "@relume_io/relume-ui";
import { Link } from '@inertiajs/react';

export const Blog39 = (props) => {
  const { tagline, heading, description, button, blogPosts, className = "" } = {
    ...Blog39Defaults,
    ...props,
  };
  return (
    <section id="relume" className={`px-[5%] py-16 md:py-24 lg:py-28 ${className}`}>
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-sans font-semibold text-cod-gray-light md:mb-4">{tagline}</p>
            <h2 className="rb-5 mb-5 font-heading text-5xl font-bold text-cod-gray md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="font-sans text-cod-gray-light md:text-md">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="group border border-gallery bg-white transition-all duration-200 hover:border-cod-gray">
              <Link href={post.url} className="block w-full max-w-full overflow-hidden">
                <div className="w-full overflow-hidden">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="aspect-[3/2] size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="px-5 py-6 md:p-6">
                <Link 
                  href={post.url} 
                  className="mb-2 inline-flex text-sm font-semibold text-cod-gray-light hover:text-cod-gray transition-colors duration-200"
                >
                  {post.category}
                </Link>
                <Link 
                  href={post.url} 
                  className="mb-2 block max-w-full group/title"
                >
                  <h5 className="font-heading text-xl font-bold text-cod-gray transition-colors duration-200 group-hover/title:text-cod-gray-light md:text-2xl">
                    {post.title}
                  </h5>
                </Link>
                <p className="font-sans text-cod-gray-light">{post.description}</p>
                <div className="mt-4 flex items-center">
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
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Button {...button} className={`inline-flex items-center justify-center gap-2 mt-6 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-300 ${
                button.variant === 'primary'
                    ? "bg-cod-gray text-white hover:bg-pippin hover:text-cod-gray"
                    : "bg-pippin text-cod-gray hover:bg-pippin-light"
            }`}>
            {button.title}
          </Button>
        </div>
      </div>
    </section>
  );
};

export const Blog39Defaults = {
  tagline: "Related Articles",
  heading: "More from our blog",
  description: "Discover more insights and legal perspectives from our team of experts.",
  button: { 
    title: "View all articles", 
    variant: "secondary",
    href: route('insights')
  },
  blogPosts: []
};

export default Blog39;
