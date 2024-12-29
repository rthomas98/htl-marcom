<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LegalnarFeedback extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'legalnar_id',
        'user_id',
        'rating',
        'feedback',
        'ratings_breakdown',
    ];

    protected $casts = [
        'rating' => 'integer',
        'ratings_breakdown' => 'array',
    ];

    public function legalnar(): BelongsTo
    {
        return $this->belongsTo(Legalnar::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeWithRating($query)
    {
        return $query->whereNotNull('rating');
    }

    public function scopeWithFeedback($query)
    {
        return $query->whereNotNull('feedback');
    }

    public function scopeRated($query, int $rating)
    {
        return $query->where('rating', $rating);
    }

    public function getStarRatingAttribute(): string
    {
        return str_repeat('★', $this->rating) . str_repeat('☆', 5 - $this->rating);
    }

    public function getRatingColorAttribute(): string
    {
        return match(true) {
            $this->rating >= 4 => 'success',
            $this->rating >= 3 => 'warning',
            default => 'danger',
        };
    }

    public function getTimeAgoAttribute(): string
    {
        return $this->created_at->diffForHumans();
    }

    public function getDetailedRatingsAttribute(): array
    {
        return $this->ratings_breakdown ?? [
            'content' => $this->rating,
            'presentation' => $this->rating,
            'interaction' => $this->rating,
            'technical' => $this->rating,
            'value' => $this->rating,
        ];
    }

    public function getAverageDetailedRatingAttribute(): float
    {
        $ratings = $this->detailed_ratings;
        return round(array_sum($ratings) / count($ratings), 1);
    }
}
