<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PostRevision extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'blog_post_id',
        'user_id',
        'title',
        'content',
        'excerpt',
        'meta_data',
        'change_summary',
        'version',
        'published_at',
    ];

    protected $casts = [
        'meta_data' => 'array',
        'published_at' => 'datetime',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(BlogPost::class, 'blog_post_id');
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function isDraft(): bool
    {
        return is_null($this->published_at);
    }

    public function isPublished(): bool
    {
        return !$this->isDraft();
    }

    public function publish(): void
    {
        if ($this->isDraft()) {
            $this->update(['published_at' => now()]);
        }
    }

    public function unpublish(): void
    {
        if ($this->isPublished()) {
            $this->update(['published_at' => null]);
        }
    }

    public function revertTo(): void
    {
        $this->post->update([
            'title' => $this->title,
            'content' => $this->content,
            'excerpt' => $this->excerpt,
            'meta_data' => $this->meta_data,
        ]);
    }

    public static function createFromPost(BlogPost $post, ?string $changeSummary = null): self
    {
        return static::create([
            'blog_post_id' => $post->id,
            'user_id' => auth()->id(),
            'title' => $post->title,
            'content' => $post->content,
            'excerpt' => $post->excerpt,
            'meta_data' => $post->meta_data,
            'change_summary' => $changeSummary,
            'version' => static::where('blog_post_id', $post->id)->max('version') + 1,
            'published_at' => now(),
        ]);
    }
}
