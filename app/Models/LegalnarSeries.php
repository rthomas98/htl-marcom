<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class LegalnarSeries extends Model implements HasMedia
{
    use HasFactory, SoftDeletes, InteractsWithMedia;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'featured_image',
        'level',
        'total_sessions',
        'price',
        'is_featured',
        'is_active',
        'start_date',
        'end_date',
        'schedule_pattern',
        'meta_data',
        'instructor_id',
    ];

    protected $casts = [
        'schedule_pattern' => 'array',
        'meta_data' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'start_date' => 'datetime',
        'end_date' => 'datetime',
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
    }

    public function legalnars()
    {
        return $this->hasMany(Legalnar::class, 'series_id');
    }

    public function instructor()
    {
        return $this->belongsTo(User::class, 'instructor_id');
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
}
