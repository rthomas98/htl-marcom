<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphToMany;

class Media extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'user_id',
        'filename',
        'original_filename',
        'mime_type',
        'extension',
        'size',
        'disk',
        'directory',
        'path',
        'url',
        'alt',
        'title',
        'description',
        'meta_data',
    ];

    protected $casts = [
        'size' => 'integer',
        'meta_data' => 'array',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function blogPosts(): MorphToMany
    {
        return $this->morphedByMany(BlogPost::class, 'mediable')
            ->withPivot('collection', 'order')
            ->withTimestamps();
    }

    public function getFullUrlAttribute(): string
    {
        return Storage::disk($this->disk)->url($this->path);
    }

    public function getSizeForHumansAttribute(): string
    {
        $bytes = $this->size;
        $units = ['B', 'KB', 'MB', 'GB', 'TB'];

        for ($i = 0; $bytes > 1024; $i++) {
            $bytes /= 1024;
        }

        return round($bytes, 2) . ' ' . $units[$i];
    }

    public function getDimensionsAttribute(): ?array
    {
        if (!in_array($this->mime_type, ['image/jpeg', 'image/png', 'image/gif', 'image/webp'])) {
            return null;
        }

        try {
            $path = Storage::disk($this->disk)->path($this->path);
            [$width, $height] = getimagesize($path);
            return compact('width', 'height');
        } catch (\Exception $e) {
            return null;
        }
    }

    public function delete()
    {
        Storage::disk($this->disk)->delete($this->path);
        return parent::delete();
    }

    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($media) {
            if ($media->isForceDeleting()) {
                Storage::disk($media->disk)->delete($media->path);
            }
        });
    }
} 