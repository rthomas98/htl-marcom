<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\PostRevision;
use App\Models\SeoMetadata;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\DB;

class BlogPostSeeder extends Seeder
{
    public function run(): void
    {
        // Temporarily disable model events
        Event::fake([
            'eloquent.created: App\Models\BlogPost',
            'eloquent.updated: App\Models\BlogPost'
        ]);

        // Create categories if they don't exist
        $categories = [
            'Trademark Law',
            'Business Law',
            'IP Strategy',
            'Legal Updates',
            'Estate Planning',
            'Privacy Law',
        ];

        $categoryModels = [];
        foreach ($categories as $category) {
            $categoryModels[$category] = Category::firstOrCreate(['name' => $category]);
        }

        // Get a default author
        $author = User::where('email', 'rob.thomas@empuls3.com')->first();

        $posts = [
            [
                'title' => 'Understanding Trademark Registration Process',
                'category' => 'Trademark Law',
                'excerpt' => 'A comprehensive guide to navigating the trademark registration process and protecting your intellectual property.',
                'content' => 'Here is a detailed explanation of the trademark registration process...',
                'featured_image' => 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(2),
            ],
            [
                'title' => 'Common Business Formation Mistakes to Avoid',
                'category' => 'Business Law',
                'excerpt' => 'Learn about the most common pitfalls entrepreneurs face when forming their business entities.',
                'content' => 'When starting a business, many entrepreneurs make these common mistakes...',
                'featured_image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(5),
            ],
            [
                'title' => 'Developing a Strong IP Portfolio',
                'category' => 'IP Strategy',
                'excerpt' => 'Strategic approaches to building and maintaining a valuable intellectual property portfolio.',
                'content' => 'A strong IP portfolio is essential for modern businesses...',
                'featured_image' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(7),
            ],
            [
                'title' => '2025 Trademark Law Updates',
                'category' => 'Legal Updates',
                'excerpt' => 'Recent changes in trademark law and their implications for business owners.',
                'content' => 'Several significant changes to trademark law took effect in 2025...',
                'featured_image' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(10),
            ],
            [
                'title' => 'Estate Planning for Business Owners',
                'category' => 'Estate Planning',
                'excerpt' => 'How to protect your business assets through proper estate planning.',
                'content' => 'Business owners need specialized estate planning strategies...',
                'featured_image' => 'https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(12),
            ],
            [
                'title' => 'Data Privacy Compliance Guide',
                'category' => 'Privacy Law',
                'excerpt' => 'Essential steps for ensuring your business complies with current privacy regulations.',
                'content' => 'Privacy compliance is becoming increasingly important...',
                'featured_image' => 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(15),
            ],
            [
                'title' => 'International Trademark Protection',
                'category' => 'Trademark Law',
                'excerpt' => 'Strategies for protecting your trademarks in global markets.',
                'content' => 'As businesses expand globally, international trademark protection becomes crucial...',
                'featured_image' => 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(17),
            ],
            [
                'title' => 'Small Business Contract Essentials',
                'category' => 'Business Law',
                'excerpt' => 'Key elements every small business contract should include.',
                'content' => 'Well-drafted contracts are fundamental to business success...',
                'featured_image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(20),
            ],
            [
                'title' => 'IP Valuation Methods',
                'category' => 'IP Strategy',
                'excerpt' => 'Understanding different approaches to valuing intellectual property assets.',
                'content' => 'Accurate IP valuation is crucial for business transactions...',
                'featured_image' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(22),
            ],
            [
                'title' => 'Recent Privacy Law Changes',
                'category' => 'Legal Updates',
                'excerpt' => 'Updates on recent privacy law developments and compliance requirements.',
                'content' => 'Privacy laws continue to evolve rapidly...',
                'featured_image' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(25),
            ],
            [
                'title' => 'Trust Formation Strategies',
                'category' => 'Estate Planning',
                'excerpt' => 'Different types of trusts and their benefits for estate planning.',
                'content' => 'Trusts are powerful tools for estate planning...',
                'featured_image' => 'https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(27),
            ],
            [
                'title' => 'GDPR Compliance Guide',
                'category' => 'Privacy Law',
                'excerpt' => 'Comprehensive guide to achieving GDPR compliance.',
                'content' => 'GDPR compliance requires careful attention to several key areas...',
                'featured_image' => 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(30),
            ],
            [
                'title' => 'Trademark Monitoring Best Practices',
                'category' => 'Trademark Law',
                'excerpt' => 'How to effectively monitor and protect your trademarks.',
                'content' => 'Regular trademark monitoring is essential for protection...',
                'featured_image' => 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(32),
            ],
            [
                'title' => 'Business Succession Planning',
                'category' => 'Business Law',
                'excerpt' => 'Planning for the future of your business through succession strategies.',
                'content' => 'Effective succession planning ensures business continuity...',
                'featured_image' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(35),
            ],
            [
                'title' => 'IP Licensing Strategies',
                'category' => 'IP Strategy',
                'excerpt' => 'Maximizing value through strategic IP licensing agreements.',
                'content' => 'IP licensing can create new revenue streams...',
                'featured_image' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(37),
            ],
            [
                'title' => 'Cybersecurity Legal Requirements',
                'category' => 'Legal Updates',
                'excerpt' => 'Current legal obligations for cybersecurity and data protection.',
                'content' => 'Cybersecurity laws are becoming more stringent...',
                'featured_image' => 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(40),
            ],
            [
                'title' => 'Digital Asset Estate Planning',
                'category' => 'Estate Planning',
                'excerpt' => 'Including digital assets in your estate planning strategy.',
                'content' => 'Digital assets require special consideration in estate planning...',
                'featured_image' => 'https://images.unsplash.com/photo-1557495235-340eb888a9fb?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(42),
            ],
            [
                'title' => 'Data Breach Response Protocol',
                'category' => 'Privacy Law',
                'excerpt' => 'Steps to take before, during, and after a data breach.',
                'content' => 'Having a data breach response plan is crucial...',
                'featured_image' => 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?ixlib=rb-4.0.3',
                'published_at' => Carbon::now()->subDays(45),
            ],
        ];

        DB::transaction(function () use ($posts, $author, $categoryModels) {
            foreach ($posts as $postData) {
                // Check if post already exists
                if (!BlogPost::where('title', $postData['title'])->exists()) {
                    $post = BlogPost::create([
                        'title' => $postData['title'],
                        'slug' => Str::slug($postData['title']),
                        'excerpt' => $postData['excerpt'],
                        'content' => $postData['content'],
                        'status' => 'published',
                        'featured_image' => $postData['featured_image'],
                        'author_id' => $author->id,
                        'category_id' => $categoryModels[$postData['category']]->id,
                        'published_at' => $postData['published_at'],
                        'meta_data' => [
                            'seo_title' => $postData['title'],
                            'seo_description' => $postData['excerpt'],
                        ],
                    ]);

                    // Create initial revision
                    PostRevision::create([
                        'blog_post_id' => $post->id,
                        'user_id' => $author->id,
                        'title' => $post->title,
                        'content' => $post->content,
                        'excerpt' => $post->excerpt,
                        'meta_data' => $post->meta_data,
                        'change_summary' => 'Initial version',
                        'version' => 1,
                        'published_at' => $post->published_at,
                    ]);

                    // Create analytics record
                    $post->analytics()->create();

                    // Create SEO metadata
                    $post->seoMetadata()->create([
                        'title' => $postData['title'],
                        'description' => $postData['excerpt'],
                        'keywords' => implode(', ', ['law', 'trademark', 'intellectual property', $postData['category']]),
                        'og_title' => $postData['title'],
                        'og_description' => $postData['excerpt'],
                        'og_type' => 'article',
                        'twitter_card' => 'summary_large_image',
                        'twitter_title' => $postData['title'],
                        'twitter_description' => $postData['excerpt'],
                        'structured_data' => [
                            '@context' => 'https://schema.org',
                            '@type' => 'Article',
                            'headline' => $postData['title'],
                            'description' => $postData['excerpt'],
                            'author' => [
                                '@type' => 'Person',
                                'name' => $author->name,
                            ],
                            'datePublished' => $postData['published_at'],
                            'publisher' => [
                                '@type' => 'Organization',
                                'name' => 'Hebert-Thomas Law',
                                'logo' => [
                                    '@type' => 'ImageObject',
                                    'url' => 'https://hebert-thomas.com/logo.png'
                                ]
                            ]
                        ],
                    ]);
                }
            }
        });
    }
}
