<?php

namespace App\Observers;

use App\Models\BlogPost;
use App\Services\SeoGeneratorService;

class BlogPostObserver
{
    public function __construct(private SeoGeneratorService $seoGenerator)
    {
    }

    public function saving(BlogPost $blogPost)
    {
        // Handle SEO metadata
        if (request()->has('seoMetadata')) {
            $seoData = request()->input('seoMetadata');
            
            // Create or update SEO metadata
            $blogPost->seoMetadata()->updateOrCreate(
                ['seoable_id' => $blogPost->id, 'seoable_type' => BlogPost::class],
                [
                    'title' => $seoData['title'] ?? '',
                    'description' => $seoData['description'] ?? '',
                    'keywords' => $seoData['keywords'] ?? '',
                    'og_title' => $seoData['og_title'] ?? '',
                    'og_description' => $seoData['og_description'] ?? '',
                    'og_type' => $seoData['og_type'] ?? 'article',
                    'twitter_title' => $seoData['twitter_title'] ?? '',
                    'twitter_description' => $seoData['twitter_description'] ?? '',
                    'twitter_card' => $seoData['twitter_card'] ?? 'summary_large_image',
                ]
            );
        }
    }

    public function created(BlogPost $blogPost)
    {
        if (!$blogPost->seoMetadata()->exists()) {
            $seoData = $this->seoGenerator->generateAllSeoMetadata($blogPost);
            $blogPost->seoMetadata()->create($seoData);
        }
    }

    public function updated(BlogPost $blogPost)
    {
        if (!$blogPost->seoMetadata()->exists()) {
            $seoData = $this->seoGenerator->generateAllSeoMetadata($blogPost);
            $blogPost->seoMetadata()->create($seoData);
        }
    }
}
