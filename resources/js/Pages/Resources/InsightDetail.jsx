import React from 'react';
import { Head } from '@inertiajs/react';
import MarcomLayout from '@/Layouts/MarcomLayout';
import BlogPostHeader1 from '@/Components/Resources/BlogPostHeader1';
import Content31, { Content31Defaults } from '@/Components/Resources/Content31';
import Blog39, { Blog39Defaults } from '@/Components/Resources/Blog39';
import Cta45, { Cta45Defaults } from '@/Components/Resources/Cta45';
import { Link as LinkIcon, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function InsightDetail({ post, relatedPosts }) {
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareText = `${post.title}\n\n${post.excerpt}\n\nRead more at:`;
  const shareUrl = window.location.href;

  const headerData = {
    breadcrumbs: [
      { url: route('insights'), title: 'Insights' },
      { url: route('insights', { category: post.category.slug }), title: post.category.name },
    ],
    heading: post.title,
    author: {
      avatar: {
        src: post.author_profile_image || '/images/placeholders/avatar-placeholder.svg',
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
      src: post.featured_image_url || '/images/placeholders/blog-placeholder.svg',
      alt: post.title,
    },
    socialMediaLinks: [
      { 
        url: '#',
        icon: <LinkIcon className="size-5" />,
        onClick: handleCopyLink
      },
      { 
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}&source=Hebert-Thomas Law`,
        icon: <Linkedin className="size-5" />
      },
      { 
        url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
        icon: <Twitter className="size-5" />
      },
      { 
        url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
        icon: <Facebook className="size-5" />
      },
    ],
  };

  const fullImageUrl = post.featured_image_url || '/images/placeholders/blog-placeholder.svg';

  return (
    <>
      <Head>
        <title>{`${post.title} - Hebert-Thomas Law`}</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={fullImageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={fullImageUrl} />
      </Head>

      <BlogPostHeader1 {...headerData} />

      <Content31 subscribe={Content31Defaults.subscribe}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Content31>

      {relatedPosts.length > 0 && (
        <Blog39 
          {...Blog39Defaults}
          blogPosts={relatedPosts.map(post => ({
            ...post,
            image: {
              src: post.featured_image_url || '/images/placeholders/blog-placeholder.svg',
              alt: post.title,
            },
            avatar: {
              src: post.author_profile_image || '/images/placeholders/avatar-placeholder.svg',
              alt: post.author?.name || 'Author',
            }
          }))}
          className="bg-gallery"
        />
      )}

      <Cta45 {...Cta45Defaults} className="bg-gallery" />
    </>
  );
}

InsightDetail.layout = page => <MarcomLayout children={page} />;
