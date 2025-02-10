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
        return $this->profile_image_url;
    }

    public function getProfileImageUrlAttribute()
    {
        if (!$this->profile_image) {
            Log::info('No profile image set for user:', ['user_id' => $this->id]);
            return null;
        }

        // Check if it's an external URL
        if (str_starts_with($this->profile_image, 'http://') || str_starts_with($this->profile_image, 'https://')) {
            Log::info('Using external URL for profile image:', [
                'user_id' => $this->id,
                'url' => $this->profile_image
            ]);
            return $this->profile_image;
        }

        // Check if the file exists in DO Spaces
        if (Storage::disk('do_spaces')->exists($this->profile_image)) {
            $url = Storage::disk('do_spaces')->url($this->profile_image);
            Log::info('Found profile image in DO Spaces:', [
                'user_id' => $this->id,
                'path' => $this->profile_image,
                'url' => $url
            ]);
            return $url;
        }

        // Check if the file exists in public storage
        if (Storage::disk('public')->exists($this->profile_image)) {
            $url = Storage::disk('public')->url($this->profile_image);
            Log::info('Found profile image in public storage:', [
                'user_id' => $this->id,
                'path' => $this->profile_image,
                'url' => $url
            ]);
            return $url;
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
