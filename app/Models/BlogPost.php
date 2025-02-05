<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class BlogPost extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'slug',
        'content',
        'author_id',
        'is_published',
        'published_at',
        'featured_image',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'published_at' => 'datetime',
    ];

    protected $appends = ['author_profile_image'];

    public function getAuthorProfileImageAttribute()
    {
        return $this->author?->profile_photo_path ?? '/images/web-logo-black (2).svg';
    }

    public function seoMetadata(): MorphOne
    {
        return $this->morphOne(SeoMetadata::class, 'seoable')->withDefault([
            'title' => '',
            'description' => '',
            'keywords' => '',
            'og_title' => '',
            'og_description' => '',
            'og_type' => 'article',
            'twitter_title' => '',
            'twitter_description' => '',
            'twitter_card' => 'summary_large_image',
        ]);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tag::class)
            ->withTimestamps();
    }

    public function getStatusColorAttribute(): string
    {
        return match($this->status) {
            'published' => 'success',
            'draft' => 'warning',
            'scheduled' => 'info',
            default => 'danger',
        };
    }

    public function scopePublished($query)
    {
        return $query->where('status', 'published')
            ->where('published_at', '<=', now());
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled')
            ->where('published_at', '>', now());
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function incrementViewCount(): void
    {
        $this->increment('view_count');
    }

    public function getExcerptAttribute($value): string
    {
        if (!empty($value)) {
            return $value;
        }
        
        return Str::limit(strip_tags($this->content), 150);
    }

    public function getRelatedPosts()
    {
        return static::published()
            ->where('id', '!=', $this->id)
            ->where(function ($query) {
                $query->where('category_id', $this->category_id)
                    ->orWhereHas('tags', function ($query) {
                        $query->whereIn('id', $this->tags->pluck('id'));
                    });
            })
            ->limit(3)
            ->get();
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function analytics(): HasOne
    {
        return $this->hasOne(BlogAnalytic::class);
    }

    public function revisions(): HasMany
    {
        return $this->hasMany(PostRevision::class)->orderBy('version', 'desc');
    }

    public function latestRevision(): HasOne
    {
        return $this->hasOne(PostRevision::class)->latestOfMany('version');
    }

    public function schemaMarkup(): MorphOne
    {
        return $this->morphOne(SchemaMarkup::class, 'schemaable');
    }

    public function schemaMarkups(): MorphMany
    {
        return $this->morphMany(SchemaMarkup::class, 'schemaable');
    }

    protected static function boot()
    {
        parent::boot();
        static::observe(\App\Observers\BlogPostObserver::class);
    }

    protected function generateSchemaMarkup(): void
    {
        $schemaData = [
            '@context' => 'https://schema.org',
            '@type' => 'Article',
            'headline' => $this->title,
            'description' => Str::limit(strip_tags($this->content), 160),
            'image' => $this->featured_image,
            'datePublished' => $this->published_at?->toIso8601String(),
            'dateModified' => $this->updated_at->toIso8601String(),
            'author' => [
                '@type' => 'Person',
                'name' => 'Rob Thomas'
            ],
            'publisher' => [
                '@type' => 'Organization',
                'name' => config('app.name'),
                'logo' => [
                    '@type' => 'ImageObject',
                    'url' => asset('images/logo.png')
                ]
            ],
            'mainEntityOfPage' => [
                '@type' => 'WebPage',
                '@id' => url()->current()
            ]
        ];

        $this->schemaMarkup()->updateOrCreate(
            [],
            [
                'type' => 'Article',
                'schema_data' => $schemaData,
                'is_active' => true,
                'priority' => 1
            ]
        );
    }

    public function generateSitemap(): array
    {
        return [
            'loc' => route('blog.show', $this->slug),
            'lastmod' => $this->updated_at->tz('UTC')->toAtomString(),
            'changefreq' => 'weekly',
            'priority' => $this->is_featured ? '0.8' : '0.6',
        ];
    }

    public function generateBreadcrumbs(): array
    {
        return [
            ['name' => 'Home', 'url' => url('/')],
            ['name' => 'Blog', 'url' => route('blog.index')],
            ['name' => $this->category->name, 'url' => route('blog.category', $this->category->slug)],
            ['name' => $this->title, 'url' => route('blog.show', $this->slug)],
        ];
    }
}
