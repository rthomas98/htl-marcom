<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class SeoMetadata extends Model implements HasMedia
{
    use HasFactory;
    use InteractsWithMedia;

    protected $fillable = [
        'title',
        'description',
        'keywords',
        'canonical_url',
        'robots',
        'og_title',
        'og_description',
        'og_type',
        'og_url',
        'twitter_card',
        'twitter_title',
        'twitter_description',
        'twitter_creator',
        'custom_meta',
        'structured_data',
    ];

    protected $casts = [
        'custom_meta' => 'array',
        'structured_data' => 'array',
    ];

    public function seoable(): MorphTo
    {
        return $this->morphTo();
    }

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('og_image')
            ->singleFile()
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/webp'])
            ->withResponsiveImages();

        $this->addMediaCollection('twitter_image')
            ->singleFile()
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/webp'])
            ->withResponsiveImages();
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this->addMediaConversion('og')
            ->width(1200)
            ->height(630)
            ->sharpen(10)
            ->optimize()
            ->performOnCollections('og_image');

        $this->addMediaConversion('twitter')
            ->width(800)
            ->height(418)
            ->sharpen(10)
            ->optimize()
            ->performOnCollections('twitter_image');
    }

    public function getOgImageAttribute(): ?string
    {
        return $this->getFirstMediaUrl('og_image');
    }

    public function getTwitterImageAttribute(): ?string
    {
        return $this->getFirstMediaUrl('twitter_image');
    }

    public function getMetaTags(): array
    {
        $tags = [];

        // Basic Meta Tags
        if ($this->title) {
            $tags[] = ['name' => 'title', 'content' => $this->title];
        }
        if ($this->description) {
            $tags[] = ['name' => 'description', 'content' => $this->description];
        }
        if ($this->keywords) {
            $tags[] = ['name' => 'keywords', 'content' => $this->keywords];
        }
        if ($this->canonical_url) {
            $tags[] = ['rel' => 'canonical', 'href' => $this->canonical_url];
        }
        if ($this->robots) {
            $tags[] = ['name' => 'robots', 'content' => $this->robots];
        }

        // Open Graph Tags
        if ($this->og_title) {
            $tags[] = ['property' => 'og:title', 'content' => $this->og_title];
        }
        if ($this->og_description) {
            $tags[] = ['property' => 'og:description', 'content' => $this->og_description];
        }
        if ($this->og_image) {
            $tags[] = ['property' => 'og:image', 'content' => $this->og_image];
            $tags[] = ['property' => 'og:image:width', 'content' => '1200'];
            $tags[] = ['property' => 'og:image:height', 'content' => '630'];
            $tags[] = ['property' => 'og:image:type', 'content' => 'image/jpeg'];
        }
        if ($this->og_type) {
            $tags[] = ['property' => 'og:type', 'content' => $this->og_type];
        }
        if ($this->og_url) {
            $tags[] = ['property' => 'og:url', 'content' => $this->og_url];
        }

        // Twitter Card Tags
        if ($this->twitter_card) {
            $tags[] = ['name' => 'twitter:card', 'content' => $this->twitter_card];
        }
        if ($this->twitter_title) {
            $tags[] = ['name' => 'twitter:title', 'content' => $this->twitter_title];
        }
        if ($this->twitter_description) {
            $tags[] = ['name' => 'twitter:description', 'content' => $this->twitter_description];
        }
        if ($this->twitter_image) {
            $tags[] = ['name' => 'twitter:image', 'content' => $this->twitter_image];
        }
        if ($this->twitter_creator) {
            $tags[] = ['name' => 'twitter:creator', 'content' => $this->twitter_creator];
        }

        // Custom Meta Tags
        if ($this->custom_meta) {
            foreach ($this->custom_meta as $name => $content) {
                $tags[] = ['name' => $name, 'content' => $content];
            }
        }

        return $tags;
    }

    public function getStructuredData(): ?string
    {
        if (!$this->structured_data) {
            return null;
        }

        return json_encode($this->structured_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    public function generateMetaTitle(): void
    {
        if (!$this->title) {
            $this->title = $this->seoable->title ?? null;
        }
        if (!$this->og_title) {
            $this->og_title = $this->title;
        }
        if (!$this->twitter_title) {
            $this->twitter_title = $this->title;
        }
        $this->save();
    }

    public function generateMetaDescription(): void
    {
        if (!$this->description && $this->seoable) {
            $content = $this->seoable->content ?? '';
            $this->description = str_limit(strip_tags($content), 160);
        }
        if (!$this->og_description) {
            $this->og_description = $this->description;
        }
        if (!$this->twitter_description) {
            $this->twitter_description = $this->description;
        }
        $this->save();
    }
}
