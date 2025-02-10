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
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

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
        'status',
        'is_featured',
        'category_id',
        'view_count',
    ];

    protected $casts = [
        'is_published' => 'boolean',
        'is_featured' => 'boolean',
        'published_at' => 'datetime',
        'view_count' => 'integer',
    ];

    protected $appends = [
        'author_profile_image',
        'featured_image_url',
        'url',
        'image',
        'avatar',
        'read_time',
        'formatted_date'
    ];

    public function getAuthorProfileImageAttribute()
    {
        // First try to get the author's profile image
        if ($this->author) {
            $avatarUrl = $this->author->getFilamentAvatarUrl();
            if ($avatarUrl) {
                // Ensure the URL uses HTTPS
                if (str_starts_with($avatarUrl, 'http://')) {
                    $avatarUrl = 'https://' . substr($avatarUrl, 7);
                }
                
                Log::info('Using author profile image:', [
                    'author_id' => $this->author->id,
                    'url' => $avatarUrl,
                    'original_path' => $this->author->profile_image
                ]);
                return $avatarUrl;
            }
        }
        
        Log::info('Using default avatar for author image:', [
            'post_id' => $this->id,
            'url' => '/images/placeholders/avatar-placeholder.svg'
        ]);
        return '/images/placeholders/avatar-placeholder.svg';
    }

    public function getFeaturedImageUrlAttribute()
    {
        if (!$this->featured_image) {
            Log::info('No featured image set for blog post:', ['post_id' => $this->id]);
            return '/images/placeholders/blog-placeholder.svg';
        }

        // Check if it's already a full URL
        if (str_starts_with($this->featured_image, 'http://') || str_starts_with($this->featured_image, 'https://')) {
            Log::info('Using external URL for featured image:', [
                'post_id' => $this->id,
                'url' => $this->featured_image
            ]);
            return $this->featured_image;
        }

        try {
            // Check DO Spaces
            if (Storage::disk('do_spaces')->exists($this->featured_image)) {
                $url = Storage::disk('do_spaces')->url($this->featured_image);
                
                // Ensure HTTPS
                if (str_starts_with($url, 'http://')) {
                    $url = 'https://' . substr($url, 7);
                }
                
                Log::info('Retrieved featured image from DO Spaces:', [
                    'post_id' => $this->id,
                    'path' => $this->featured_image,
                    'url' => $url
                ]);
                return $url;
            }

            // Check public storage as fallback
            if (Storage::disk('public')->exists($this->featured_image)) {
                // Get the file contents
                $contents = Storage::disk('public')->get($this->featured_image);
                
                // Clean the filename
                $filename = pathinfo($this->featured_image, PATHINFO_FILENAME);
                $extension = pathinfo($this->featured_image, PATHINFO_EXTENSION);
                $cleanFilename = Str::slug($filename) . '.' . $extension;
                
                // Define the DO Spaces path
                $doSpacesPath = 'blog-images/' . $cleanFilename;
                
                // Store in DO Spaces
                Storage::disk('do_spaces')->put($doSpacesPath, $contents, 'public');
                
                // Update the database
                $this->update(['featured_image' => $doSpacesPath]);
                
                $url = Storage::disk('do_spaces')->url($doSpacesPath);
                
                // Ensure HTTPS
                if (str_starts_with($url, 'http://')) {
                    $url = 'https://' . substr($url, 7);
                }
                
                Log::info('Migrated featured image to DO Spaces:', [
                    'post_id' => $this->id,
                    'old_path' => $this->featured_image,
                    'new_path' => $doSpacesPath,
                    'url' => $url
                ]);
                return $url;
            }
            
            Log::warning('Featured image not found in any storage:', [
                'post_id' => $this->id,
                'path' => $this->featured_image
            ]);
            return '/images/placeholders/blog-placeholder.svg';
            
        } catch (\Exception $e) {
            Log::error('Error retrieving featured image:', [
                'post_id' => $this->id,
                'path' => $this->featured_image,
                'error' => $e->getMessage()
            ]);
            return '/images/placeholders/blog-placeholder.svg';
        }
    }

    public function getUrlAttribute()
    {
        return route('insights') . '/' . $this->slug;
    }

    public function getImageAttribute()
    {
        return [
            'src' => $this->featured_image_url,
            'alt' => $this->title
        ];
    }

    public function getAvatarAttribute()
    {
        return [
            'src' => $this->author_profile_image,
            'alt' => $this->author ? $this->author->name : 'Author'
        ];
    }

    public function getReadTimeAttribute()
    {
        $words = str_word_count(strip_tags($this->content));
        $minutes = ceil($words / 200); // Assuming average reading speed of 200 words per minute
        return $minutes . ' min read';
    }

    public function getFormattedDateAttribute()
    {
        return $this->published_at ? $this->published_at->format('M d, Y') : null;
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
        return $query
            ->where('status', 'published')
            ->where('published_at', '<=', now())
            ->orderBy('published_at', 'desc');
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeScheduled($query)
    {
        return $query
            ->where('status', 'scheduled')
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
            ->with(['author', 'category']) // Eager load relationships
            ->limit(3)
            ->get()
            ->map(function ($post) {
                $readTime = ceil(str_word_count(strip_tags($post->content)) / 200);
                
                return [
                    'slug' => route('insights') . '/' . $post->slug,
                    'title' => $post->title,
                    'description' => $post->excerpt,
                    'category' => $post->category?->name,
                    'readTime' => $readTime . ' min read',
                    'featured_image_url' => $post->featured_image_url,
                    'image' => [
                        'src' => $post->featured_image_url,
                        'alt' => $post->title
                    ],
                    'button' => [
                        'title' => 'Read More'
                    ]
                ];
            });
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
