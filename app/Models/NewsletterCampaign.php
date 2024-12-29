<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class NewsletterCampaign extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'subject',
        'content',
        'template_data',
        'status',
        'scheduled_at',
        'sent_at',
        'sent_count',
        'open_count',
        'click_count',
        'tracking_data',
        'user_id',
    ];

    protected $casts = [
        'template_data' => 'array',
        'tracking_data' => 'array',
        'scheduled_at' => 'datetime',
        'sent_at' => 'datetime',
        'sent_count' => 'integer',
        'open_count' => 'integer',
        'click_count' => 'integer',
    ];

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function subscribers(): BelongsToMany
    {
        return $this->belongsToMany(NewsletterSubscriber::class, 'newsletter_campaign_subscriber', 'campaign_id', 'subscriber_id')
            ->withPivot(['status', 'sent_at', 'opened_at', 'clicked_at', 'tracking_data'])
            ->withTimestamps();
    }

    public function scopeDraft($query)
    {
        return $query->where('status', 'draft');
    }

    public function scopeScheduled($query)
    {
        return $query->where('status', 'scheduled');
    }

    public function scopeSending($query)
    {
        return $query->where('status', 'sending');
    }

    public function scopeSent($query)
    {
        return $query->where('status', 'sent');
    }

    public function scopeFailed($query)
    {
        return $query->where('status', 'failed');
    }

    public function schedule(string $datetime): void
    {
        $this->update([
            'status' => 'scheduled',
            'scheduled_at' => $datetime,
        ]);
    }

    public function send(): void
    {
        $this->update([
            'status' => 'sending',
            'sent_at' => now(),
        ]);

        // Here you would implement the actual email sending logic
        // This could be done through a job queue
    }

    public function markAsSent(): void
    {
        $this->increment('sent_count');
    }

    public function markAsOpened(): void
    {
        $this->increment('open_count');
    }

    public function markAsClicked(): void
    {
        $this->increment('click_count');
    }

    public function getOpenRateAttribute(): float
    {
        if ($this->sent_count === 0) {
            return 0;
        }

        return round(($this->open_count / $this->sent_count) * 100, 2);
    }

    public function getClickRateAttribute(): float
    {
        if ($this->sent_count === 0) {
            return 0;
        }

        return round(($this->click_count / $this->sent_count) * 100, 2);
    }
}
