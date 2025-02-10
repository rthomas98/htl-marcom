<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Filament\Models\Contracts\FilamentUser;
use Filament\Models\Contracts\HasName;
use Filament\Models\Contracts\HasAvatar;
use Filament\Panel;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Auth\Notifications\ResetPassword;
use Laravel\Cashier\Billable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\LegalnarAttendee;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class User extends Authenticatable implements MustVerifyEmail, FilamentUser, HasName, HasAvatar
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable, HasRoles, Billable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profile_image',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
            'profile_image' => 'string',
        ];
    }

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_image_url',
    ];

    // Override the default password validation
    public static function boot()
    {
        parent::boot();
        
        static::creating(function ($user) {
            if (!$user->password) {
                $user->password = null;
            }
        });
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

    public function canAccessPanel(Panel $panel): bool
    {
        return true; // You can add more specific conditions here
    }

    public function getFilamentName(): string
    {
        return $this->name;
    }

    public function getFilamentAvatarUrl(): ?string
    {
        if (!$this->profile_image) {
            Log::info('No profile image set for user:', ['user_id' => $this->id]);
            return null;
        }

        // Check if it's already a full URL
        if (str_starts_with($this->profile_image, 'http://') || str_starts_with($this->profile_image, 'https://')) {
            Log::info('Using external URL for profile image:', [
                'user_id' => $this->id,
                'url' => $this->profile_image
            ]);
            return $this->profile_image;
        }

        // Check DO Spaces first
        if (Storage::disk('do_spaces')->exists($this->profile_image)) {
            $url = rtrim(config('filesystems.disks.do_spaces.url'), '/') . '/' . 
                   str_replace(' ', '%20', ltrim($this->profile_image, '/'));
            
            Log::info('Found profile image in DO Spaces:', [
                'user_id' => $this->id,
                'path' => $this->profile_image,
                'encoded_url' => $url
            ]);
            return $url;
        }

        // Fallback to public storage
        if (Storage::disk('public')->exists($this->profile_image)) {
            try {
                // Get the file contents from public storage
                $contents = Storage::disk('public')->get($this->profile_image);
                
                // Ensure we're using a clean path for DO Spaces
                $doSpacesPath = 'profile-images/' . str_replace(' ', '-', basename($this->profile_image));
                
                // Store in DO Spaces
                Storage::disk('do_spaces')->put($doSpacesPath, $contents);
                
                // Update the profile_image path in the database
                $this->update(['profile_image' => $doSpacesPath]);
                
                $url = rtrim(config('filesystems.disks.do_spaces.url'), '/') . '/' . $doSpacesPath;
                Log::info('Copied profile image from public to DO Spaces:', [
                    'user_id' => $this->id,
                    'original_path' => $this->profile_image,
                    'new_path' => $doSpacesPath,
                    'url' => $url
                ]);
                return $url;
            } catch (\Exception $e) {
                Log::error('Failed to copy profile image to DO Spaces:', [
                    'user_id' => $this->id,
                    'path' => $this->profile_image,
                    'error' => $e->getMessage()
                ]);
                // Fallback to public URL if copy fails
                $url = Storage::disk('public')->url($this->profile_image);
                Log::info('Using public storage URL:', [
                    'user_id' => $this->id,
                    'path' => $this->profile_image,
                    'url' => $url
                ]);
                return $url;
            }
        }

        Log::warning('Profile image not found in any storage location:', [
            'user_id' => $this->id,
            'path' => $this->profile_image
        ]);
        return null;
    }

    public function getProfileImageUrlAttribute()
    {
        if (!$this->profile_image) {
            Log::info('No profile image set for user:', ['user_id' => $this->id]);
            return null;
        }

        // Check if it's already a full URL
        if (str_starts_with($this->profile_image, 'http://') || str_starts_with($this->profile_image, 'https://')) {
            Log::info('Using external URL for profile image:', [
                'user_id' => $this->id,
                'url' => $this->profile_image
            ]);
            return $this->profile_image;
        }

        // First try DO Spaces
        if (Storage::disk('do_spaces')->exists($this->profile_image)) {
            // Use the DO_SPACES_URL from config to ensure correct URL format
            $url = config('filesystems.disks.do_spaces.url') . '/' . $this->profile_image;
            Log::info('Found profile image in DO Spaces:', [
                'user_id' => $this->id,
                'path' => $this->profile_image,
                'url' => $url
            ]);
            return $url;
        }

        // If not in DO Spaces but in public storage, copy to DO Spaces
        if (Storage::disk('public')->exists($this->profile_image)) {
            try {
                // Get the file contents from public storage
                $contents = Storage::disk('public')->get($this->profile_image);
                
                // Ensure we're using a clean path for DO Spaces
                $doSpacesPath = 'profile-images/' . basename($this->profile_image);
                
                // Store in DO Spaces
                Storage::disk('do_spaces')->put($doSpacesPath, $contents);
                
                // Update the profile_image path in the database
                $this->update(['profile_image' => $doSpacesPath]);
                
                $url = config('filesystems.disks.do_spaces.url') . '/' . $doSpacesPath;
                Log::info('Copied profile image from public to DO Spaces:', [
                    'user_id' => $this->id,
                    'original_path' => $this->profile_image,
                    'new_path' => $doSpacesPath,
                    'url' => $url
                ]);
                return $url;
            } catch (\Exception $e) {
                Log::error('Failed to copy profile image to DO Spaces:', [
                    'user_id' => $this->id,
                    'path' => $this->profile_image,
                    'error' => $e->getMessage()
                ]);
                // Fallback to public URL if copy fails
                return Storage::disk('public')->url($this->profile_image);
            }
        }

        Log::warning('Profile image not found in any storage location:', [
            'user_id' => $this->id,
            'path' => $this->profile_image
        ]);
        return null;
    }

    public function notifications(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->morphMany(DatabaseNotification::class, 'notifiable')
            ->orderBy('created_at', 'desc');
    }

    public function readNotifications(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->notifications()->whereNotNull('read_at');
    }

    public function unreadNotifications(): \Illuminate\Database\Eloquent\Relations\MorphMany
    {
        return $this->notifications()->whereNull('read_at');
    }

    /**
     * Get the Legalnar registrations for the user.
     */
    public function legalnarAttendees()
    {
        return $this->hasMany(LegalnarAttendee::class);
    }
}
