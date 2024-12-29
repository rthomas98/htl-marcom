<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LegalnarQuestion extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'legalnar_id',
        'user_id',
        'question',
        'answer',
        'is_answered',
        'is_featured',
        'answered_at',
        'answered_by',
    ];

    protected $casts = [
        'is_answered' => 'boolean',
        'is_featured' => 'boolean',
        'answered_at' => 'datetime',
    ];

    public function legalnar(): BelongsTo
    {
        return $this->belongsTo(Legalnar::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function answeredBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'answered_by');
    }

    public function scopeAnswered($query)
    {
        return $query->where('is_answered', true);
    }

    public function scopeUnanswered($query)
    {
        return $query->where('is_answered', false);
    }

    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    public function answer(string $answer, User $answeredBy): void
    {
        $this->update([
            'answer' => $answer,
            'is_answered' => true,
            'answered_at' => now(),
            'answered_by' => $answeredBy->id,
        ]);
    }

    public function toggleFeatured(): void
    {
        $this->update(['is_featured' => !$this->is_featured]);
    }

    public function getTimeAgoAttribute(): string
    {
        return $this->created_at->diffForHumans();
    }

    public function getAnswerTimeAgoAttribute(): ?string
    {
        return $this->answered_at?->diffForHumans();
    }
}
