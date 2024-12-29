<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class SchemaMarkup extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'schema_data',
        'is_active',
        'priority',
    ];

    protected $casts = [
        'schema_data' => 'array',
        'is_active' => 'boolean',
        'priority' => 'integer',
    ];

    public function schemaable(): MorphTo
    {
        return $this->morphTo();
    }

    public function getJsonLd(): string
    {
        return json_encode($this->schema_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
    }

    public function getScriptTag(): string
    {
        return sprintf(
            '<script type="application/ld+json">%s</script>',
            $this->getJsonLd()
        );
    }

    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    public function scopeByType($query, string $type)
    {
        return $query->where('type', $type);
    }

    public function scopeByPriority($query)
    {
        return $query->orderBy('priority', 'desc');
    }

    public static function generateArticleSchema(BlogPost $post): self
    {
        return static::create([
            'type' => 'Article',
            'schema_data' => [
                '@context' => 'https://schema.org',
                '@type' => 'Article',
                'headline' => $post->title,
                'description' => $post->excerpt,
                'image' => $post->featured_image,
                'datePublished' => $post->published_at?->toIso8601String(),
                'dateModified' => $post->updated_at->toIso8601String(),
                'author' => [
                    '@type' => 'Person',
                    'name' => $post->author->name,
                ],
                'publisher' => [
                    '@type' => 'Organization',
                    'name' => config('app.name'),
                    'logo' => [
                        '@type' => 'ImageObject',
                        'url' => asset('images/logo.png'),
                    ],
                ],
                'mainEntityOfPage' => [
                    '@type' => 'WebPage',
                    '@id' => url()->current(),
                ],
            ],
            'is_active' => true,
            'priority' => 1,
        ]);
    }

    public static function generateBreadcrumbSchema(array $items): self
    {
        $listItems = collect($items)->map(function ($item, $position) {
            return [
                '@type' => 'ListItem',
                'position' => $position + 1,
                'name' => $item['name'],
                'item' => $item['url'],
            ];
        })->all();

        return static::create([
            'type' => 'BreadcrumbList',
            'schema_data' => [
                '@context' => 'https://schema.org',
                '@type' => 'BreadcrumbList',
                'itemListElement' => $listItems,
            ],
            'is_active' => true,
            'priority' => 2,
        ]);
    }

    public static function generateFaqSchema(array $questions): self
    {
        $mainEntity = collect($questions)->map(function ($item) {
            return [
                '@type' => 'Question',
                'name' => $item['question'],
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => $item['answer'],
                ],
            ];
        })->all();

        return static::create([
            'type' => 'FAQPage',
            'schema_data' => [
                '@context' => 'https://schema.org',
                '@type' => 'FAQPage',
                'mainEntity' => $mainEntity,
            ],
            'is_active' => true,
            'priority' => 3,
        ]);
    }
}
