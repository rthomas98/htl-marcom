<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class SampleBlogPostsSeeder extends Seeder
{
    protected $samplePosts = [
        [
            'title' => 'Understanding Trademark Law: A Guide for Business Owners',
            'excerpt' => 'Learn the fundamentals of trademark law and how it can protect your business assets.',
            'content' => '<p>Trademark law is a crucial aspect of intellectual property protection that every business owner should understand. This comprehensive guide will walk you through the basics of trademark law and how it applies to your business.</p>

<h2>What is a Trademark?</h2>
<p>A trademark is a distinctive sign, symbol, word, or combination thereof that identifies and distinguishes the goods or services of one business from those of others. It can include:</p>
<ul>
<li>Brand names</li>
<li>Logos</li>
<li>Slogans</li>
<li>Product packaging</li>
</ul>

<h2>Why Trademarks Matter</h2>
<p>Trademarks are valuable business assets that:</p>
<ul>
<li>Protect your brand identity</li>
<li>Prevent customer confusion</li>
<li>Build brand value</li>
<li>Provide legal protection</li>
</ul>',
            'image_url' => 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
            'category' => 'Trademark Law',
        ],
        [
            'title' => 'The Importance of Data Privacy in Modern Business',
            'excerpt' => 'Discover why data privacy is crucial for your business and how to ensure compliance.',
            'content' => '<p>In today\'s digital age, data privacy has become a critical concern for businesses of all sizes. Understanding and implementing proper data protection measures is essential for maintaining customer trust and complying with regulations.</p>

<h2>Key Data Privacy Considerations</h2>
<p>When developing your data privacy strategy, consider:</p>
<ul>
<li>Data collection practices</li>
<li>Storage security</li>
<li>Customer consent</li>
<li>Data processing procedures</li>
</ul>

<h2>Compliance Requirements</h2>
<p>Businesses must comply with various data protection regulations:</p>
<ul>
<li>GDPR</li>
<li>CCPA</li>
<li>Industry-specific regulations</li>
</ul>',
            'image_url' => 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3',
            'category' => 'Privacy & Data Protection',
        ],
        [
            'title' => 'Estate Planning Essentials for Business Owners',
            'excerpt' => 'Learn why estate planning is crucial for business owners and how to get started.',
            'content' => '<p>Estate planning is a critical component of business succession and personal asset protection. This guide explores the essential elements of estate planning for business owners.</p>

<h2>Key Components of Estate Planning</h2>
<p>A comprehensive estate plan should include:</p>
<ul>
<li>Will and trust creation</li>
<li>Business succession planning</li>
<li>Power of attorney designation</li>
<li>Tax planning strategies</li>
</ul>

<h2>Business Succession Planning</h2>
<p>Consider these aspects when planning your business succession:</p>
<ul>
<li>Leadership transition</li>
<li>Ownership transfer</li>
<li>Tax implications</li>
<li>Timeline and milestones</li>
</ul>',
            'image_url' => 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3',
            'category' => 'Estate Planning',
        ],
    ];

    public function run()
    {
        $this->command->info('Starting to seed sample blog posts...');

        // Get or create an author
        $author = User::firstOrCreate(
            ['email' => 'adrian@hebert-thomas.law'],
            [
                'name' => 'Adrian Hebert-Thomas',
                'password' => bcrypt('password'),
            ]
        );

        foreach ($this->samplePosts as $post) {
            // Get or create category
            $category = Category::firstOrCreate(
                ['name' => $post['category']],
                ['slug' => Str::slug($post['category'])]
            );

            // Download and store the image
            $imageContent = Http::get($post['image_url'])->body();
            $filename = 'blog-images/' . Str::slug($post['title']) . '.jpg';
            Storage::disk('do_spaces')->put($filename, $imageContent, 'public');

            // Create the blog post
            BlogPost::create([
                'title' => $post['title'],
                'slug' => Str::slug($post['title']),
                'excerpt' => $post['excerpt'],
                'content' => $post['content'],
                'featured_image' => $filename,
                'status' => 'published',
                'author_id' => $author->id,
                'category_id' => $category->id,
                'published_at' => now(),
                'meta_data' => json_encode([
                    'tags' => explode(' ', Str::slug($post['title'])),
                    'reading_time' => ceil(str_word_count(strip_tags($post['content'])) / 200),
                ]),
            ]);
        }

        $this->command->info('Sample blog posts seeded successfully!');
    }
}
