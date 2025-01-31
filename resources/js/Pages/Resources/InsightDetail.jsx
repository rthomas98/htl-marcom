import React from 'react';
import { Head } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import BlogPostHeader1 from '@/Components/Resources/BlogPostHeader1';
import Content31, { Content31Defaults } from '@/Components/Resources/Content31';
import Blog39, { Blog39Defaults } from '@/Components/Resources/Blog39';
import Cta45, { Cta45Defaults } from '@/Components/Resources/Cta45';
import { Link as LinkIcon, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function InsightDetail({ post, relatedPosts }) {
  const headerData = {
    breadcrumbs: [
      { url: route('insights'), title: 'Insights' },
      { url: route('insights', { category: post.category.slug }), title: post.category.name },
    ],
    heading: post.title,
    author: {
      avatar: {
        src: post.author_profile_image,
        alt: post.author?.name || 'Author',
      },
      fullName: post.author?.name || 'Hebert-Thomas Law',
      date: new Date(post.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }),
      readTime: `${Math.ceil(post.content?.split(' ').length / 200) || 5} min read`,
    },
    image: {
      src: post.featured_image || '/images/placeholder-blog.jpg',
      alt: post.title,
    },
    socialMediaLinks: [
      { 
        url: `${window.location.href}`,
        icon: <LinkIcon className="size-5" />
      },
      { 
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${encodeURIComponent(post.title)}`,
        icon: <Linkedin className="size-5" />
      },
      { 
        url: `https://twitter.com/intent/tweet?url=${window.location.href}&text=${encodeURIComponent(post.title)}`,
        icon: <Twitter className="size-5" />
      },
      { 
        url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
        icon: <Facebook className="size-5" />
      },
    ],
  };

  return (
    <>
      <Head>
        <title>{`${post.title} - Hebert-Thomas Law`}</title>
        <meta 
          name="description" 
          content={post.excerpt}
        />
      </Head>

      <BlogPostHeader1 {...headerData} />

      <Content31 subscribe={Content31Defaults.subscribe}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content31>

      {relatedPosts.length > 0 && (
        <Blog39 
          {...Blog39Defaults}
          blogPosts={relatedPosts}
          className="bg-gallery"
        />
      )}

      <Cta45 {...Cta45Defaults} className="bg-gallery" />
    </>
  );
}

InsightDetail.layout = page => <MarcomLayout children={page} />;
