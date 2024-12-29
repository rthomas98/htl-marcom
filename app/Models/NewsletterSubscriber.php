<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class NewsletterSubscriber extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'email',
        'first_name',
        'last_name',
        'status',
        'preferences',
        'metadata',
        'subscribed_at',
        'unsubscribed_at',
        'ip_address',
        'user_agent',
    ];

    protected $casts = [
        'preferences' => 'array',
        'metadata' => 'array',
        'subscribed_at' => 'datetime',
        'unsubscribed_at' => 'datetime',
    ];

    public function campaigns(): BelongsToMany
    {
        return $this->belongsToMany(NewsletterCampaign::class, 'newsletter_campaign_subscriber', 'subscriber_id', 'campaign_id')
            ->withPivot(['status', 'sent_at', 'opened_at', 'clicked_at', 'tracking_data'])
            ->withTimestamps();
    }

    public function getFullNameAttribute(): string
    {
        return trim($this->first_name . ' ' . $this->last_name);
    }

    public function scopeSubscribed($query)
    {
        return $query->where('status', 'subscribed');
    }

    public function scopeUnsubscribed($query)
    {
        return $query->where('status', 'unsubscribed');
    }

    public function scopeBounced($query)
    {
        return $query->where('status', 'bounced');
    }

    public function scopeComplained($query)
    {
        return $query->where('status', 'complained');
    }

    public function unsubscribe(): void
    {
        $this->update([
            'status' => 'unsubscribed',
            'unsubscribed_at' => now(),
        ]);
    }

    public function resubscribe(): void
    {
        $this->update([
            'status' => 'subscribed',
            'unsubscribed_at' => null,
            'subscribed_at' => now(),
        ]);
    }

    public function markAsBounced(): void
    {
        $this->update(['status' => 'bounced']);
    }

    public function markAsComplained(): void
    {
        $this->update(['status' => 'complained']);
    }

    public function updatePreferences(array $preferences): void
    {
        $this->update(['preferences' => $preferences]);
    }
}
