<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Legalnar extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia;

    protected $fillable = [
        'series_id',
        'title',
        'slug',
        'description',
        'learning_outcomes',
        'featured_image',
        'level',
        'type',
        'duration_minutes',
        'price',
        'max_attendees',
        'status',
        'is_featured',
        'scheduled_start',
        'scheduled_end',
        'timezone',
        'meeting_url',
        'recording_url',
        'materials',
        'prerequisites',
        'meta_data',
        'video_details',
        'is_published',
        'published_at',
        'watch_minutes',
        'completion_threshold',
        'instructor_id',
    ];

    protected $casts = [
        'materials' => 'array',
        'prerequisites' => 'array',
        'meta_data' => 'array',
        'video_details' => 'array',
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
        'scheduled_start' => 'datetime',
        'scheduled_end' => 'datetime',
        'published_at' => 'datetime',
    ];

    public function registerMediaCollections(): void
    {
        $this->addMediaCollection('featured_image')
            ->singleFile()
            ->acceptsMimeTypes(['image/jpeg', 'image/png', 'image/webp'])
            ->registerMediaConversions(function (Media $media) {
                $this->addMediaConversion('thumb')
                    ->width(200)
                    ->height(200);
                
                $this->addMediaConversion('preview')
                    ->width(800)
                    ->height(600);
            });

        $this->addMediaCollection('materials')
            ->acceptsMimeTypes(['application/pdf', 'application/zip', 'application/x-zip-compressed']);
    }

    public function series()
    {
        return $this->belongsTo(LegalnarSeries::class, 'series_id');
    }

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
    }

    public function questions()
    {
        return $this->hasMany(LegalnarQuestion::class);
    }

    public function feedback()
    {
        return $this->hasMany(LegalnarFeedback::class);
    }

    public function getFeaturedImageUrlAttribute()
    {
        return $this->getFirstMediaUrl('featured_image');
    }

    public function getFeaturedImageThumbUrlAttribute()
    {
        return $this->getFirstMediaUrl('featured_image', 'thumb');
    }

    public function getFeaturedImagePreviewUrlAttribute()
    {
        return $this->getFirstMediaUrl('featured_image', 'preview');
    }

    public function attendees(): HasMany
    {
        return $this->hasMany(LegalnarAttendee::class);
    }

    public function registeredAttendees(): HasMany
    {
        return $this->attendees()->registered();
    }

    public function actualAttendees(): HasMany
    {
        return $this->attendees()->attended();
    }

    public function noShows(): HasMany
    {
        return $this->attendees()->noShow();
    }

    public function cancelledRegistrations(): HasMany
    {
        return $this->attendees()->cancelled();
    }
}
