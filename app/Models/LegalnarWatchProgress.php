<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LegalnarWatchProgress extends Model
{
    use HasFactory;

    protected $table = 'legalnar_watch_progress';

    protected $fillable = [
        'legalnar_id',
        'user_id',
        'minutes_watched',
        'percentage',
        'completed',
        'last_watched_at',
        'chapter_progress',
    ];

    protected $casts = [
        'minutes_watched' => 'integer',
        'percentage' => 'integer',
        'completed' => 'boolean',
        'last_watched_at' => 'datetime',
        'chapter_progress' => 'array',
    ];

    public function legalnar(): BelongsTo
    {
        return $this->belongsTo(Legalnar::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeCompleted($query)
    {
        return $query->where('completed', true);
    }

    public function scopeInProgress($query)
    {
        return $query->where('completed', false)
            ->where('percentage', '>', 0);
    }

    public function scopeNotStarted($query)
    {
        return $query->where('percentage', 0);
    }

    public function getFormattedProgressAttribute(): string
    {
        return $this->percentage . '%';
    }

    public function getFormattedTimeWatchedAttribute(): string
    {
        $hours = floor($this->minutes_watched / 60);
        $minutes = $this->minutes_watched % 60;
        
        if ($hours > 0) {
            return $hours . 'h ' . ($minutes > 0 ? $minutes . 'm' : '');
        }
        
        return $minutes . ' minutes';
    }

    public function getLastWatchedTimeAgoAttribute(): string
    {
        return $this->last_watched_at->diffForHumans();
    }

    public function updateChapterProgress(string $chapterId, int $percentage): void
    {
        $progress = $this->chapter_progress ?? [];
        $progress[$chapterId] = $percentage;
        
        $this->update(['chapter_progress' => $progress]);
    }

    public function getChapterProgressAttribute(): array
    {
        return $this->chapter_progress ?? [];
    }

    public function getAverageChapterProgressAttribute(): int
    {
        $progress = $this->chapter_progress;
        
        if (empty($progress)) {
            return 0;
        }

        return (int) round(array_sum($progress) / count($progress));
    }
}
