<?php

namespace App\Console\Commands;

use App\Models\BlogPost;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ClearBlogPosts extends Command
{
    protected $signature = 'blog:clear';
    protected $description = 'Remove all blog posts from the database';

    public function handle()
    {
        $this->info('Starting to remove blog posts...');

        DB::beginTransaction();
        try {
            // Delete associated SEO metadata first
            DB::table('seo_metadata')
                ->where('seoable_type', 'App\Models\BlogPost')
                ->delete();

            // Delete all blog posts
            BlogPost::truncate();

            DB::commit();
            $this->info('Successfully removed all blog posts and their associated data.');
        } catch (\Exception $e) {
            DB::rollBack();
            $this->error('Failed to remove blog posts: ' . $e->getMessage());
        }
    }
}
