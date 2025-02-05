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
        // Generate SEO metadata if not provided
        if (!request()->has('seoMetadata')) {
            $seoData = $this->seoGenerator->generateAllSeoMetadata($blogPost);
        } else {
            $seoData = request()->input('seoMetadata');
        }
            
        // Create or update SEO metadata
        $blogPost->seoMetadata()->updateOrCreate(
            ['seoable_id' => $blogPost->id, 'seoable_type' => BlogPost::class],
            [
                'title' => $seoData['title'] ?? $this->seoGenerator->generateSeoTitle($blogPost),
                'description' => $seoData['description'] ?? $this->seoGenerator->generateSeoDescription($blogPost),
                'keywords' => $seoData['keywords'] ?? implode(', ', $this->seoGenerator->generateSeoKeywords($blogPost)),
                'og_title' => $seoData['og_title'] ?? $seoData['title'] ?? $this->seoGenerator->generateSeoTitle($blogPost),
                'og_description' => $seoData['og_description'] ?? $seoData['description'] ?? $this->seoGenerator->generateSeoDescription($blogPost),
                'og_type' => $seoData['og_type'] ?? 'article',
                'twitter_title' => $seoData['twitter_title'] ?? $seoData['title'] ?? $this->seoGenerator->generateSeoTitle($blogPost),
                'twitter_description' => $seoData['twitter_description'] ?? $seoData['description'] ?? $this->seoGenerator->generateSeoDescription($blogPost),
                'twitter_card' => $seoData['twitter_card'] ?? 'summary_large_image',
            ]
        );
    }

    public function created(BlogPost $blogPost)
    {
        // SEO metadata is already handled in saving()
    }

    public function updated(BlogPost $blogPost)
    {
        // SEO metadata is already handled in saving()
    }
}
