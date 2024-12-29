<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BlogAnalytic extends Model
{
    use HasFactory;

    protected $fillable = [
        'blog_post_id',
        'views',
        'reading_time_minutes',
        'comment_count',
        'like_count',
        'share_count',
        'referral_sources',
        'device_stats',
        'reader_engagement',
    ];

    protected $casts = [
        'views' => 'integer',
        'reading_time_minutes' => 'integer',
        'comment_count' => 'integer',
        'like_count' => 'integer',
        'share_count' => 'integer',
        'referral_sources' => 'array',
        'device_stats' => 'array',
        'reader_engagement' => 'array',
    ];

    public function post(): BelongsTo
    {
        return $this->belongsTo(BlogPost::class, 'blog_post_id');
    }

    public function incrementViews(): void
    {
        $this->increment('views');
    }

    public function updateCommentCount(): void
    {
        $this->update([
            'comment_count' => $this->post->comments()->approved()->count()
        ]);
    }

    public function recordEngagement(array $data): void
    {
        $engagement = $this->reader_engagement ?? [];
        $engagement[] = array_merge($data, ['timestamp' => now()->toDateTimeString()]);
        
        $this->update(['reader_engagement' => $engagement]);
    }

    public function recordDeviceStats(array $data): void
    {
        $stats = $this->device_stats ?? [];
        $stats[] = array_merge($data, ['timestamp' => now()->toDateTimeString()]);
        
        $this->update(['device_stats' => $stats]);
    }

    public function recordReferralSource(string $source): void
    {
        $sources = $this->referral_sources ?? [];
        $sources[$source] = ($sources[$source] ?? 0) + 1;
        
        $this->update(['referral_sources' => $sources]);
    }

    public function calculateReadingTime(string $content): void
    {
        $wordsPerMinute = 200;
        $wordCount = str_word_count(strip_tags($content));
        $minutes = ceil($wordCount / $wordsPerMinute);
        
        $this->update(['reading_time_minutes' => $minutes]);
    }
}
