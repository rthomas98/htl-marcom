<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Category;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Http;

class TestBlogPostSeeder extends Seeder
{
    public function run()
    {
        $this->command->info('Creating test blog post...');

        // Get or create an author
        $author = User::firstOrCreate(
            ['email' => 'adrian@hebert-thomas.law'],
            [
                'name' => 'Adrian Hebert-Thomas',
                'password' => bcrypt('password'),
            ]
        );

        // Get or create category
        $category = Category::firstOrCreate(
            ['name' => 'Test Category'],
            ['slug' => 'test-category']
        );

        // Download and store a test image
        $imageUrl = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3';
        $imageContent = Http::get($imageUrl)->body();
        $filename = 'test-post.jpg';
        
        try {
            Storage::disk('do_spaces')->put($filename, $imageContent, [
                'visibility' => 'public',
                'mimetype' => 'image/jpeg',
                'ACL' => 'public-read'
            ]);

            $this->command->info('Image uploaded successfully');
            
            // Create the blog post
            BlogPost::create([
                'title' => 'Test Blog Post',
                'slug' => 'test-blog-post',
                'excerpt' => 'This is a test blog post to verify image uploads.',
                'content' => '<p>This is a test blog post content.</p>',
                'featured_image' => $filename,
                'status' => 'published',
                'author_id' => $author->id,
                'category_id' => $category->id,
                'published_at' => now(),
                'meta_data' => json_encode([
                    'tags' => ['test'],
                    'reading_time' => 1,
                ]),
            ]);

            $this->command->info('Test blog post created successfully!');
        } catch (\Exception $e) {
            $this->command->error('Error: ' . $e->getMessage());
        }
    }
}
