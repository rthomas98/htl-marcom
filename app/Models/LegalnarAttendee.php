<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LegalnarAttendee extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'legalnar_id',
        'user_id',
        'status',
        'amount_paid',
        'payment_status',
        'registered_at',
        'attended_at',
        'meta_data',
    ];

    protected $casts = [
        'meta_data' => 'array',
        'registered_at' => 'datetime',
        'attended_at' => 'datetime',
        'amount_paid' => 'decimal:2',
    ];

    public function legalnar(): BelongsTo
    {
        return $this->belongsTo(Legalnar::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function scopeRegistered($query)
    {
        return $query->where('status', 'registered');
    }

    public function scopeAttended($query)
    {
        return $query->where('status', 'attended');
    }

    public function scopeNoShow($query)
    {
        return $query->where('status', 'no-show');
    }

    public function scopeCancelled($query)
    {
        return $query->where('status', 'cancelled');
    }

    public function markAsAttended()
    {
        $this->update([
            'status' => 'attended',
            'attended_at' => now(),
        ]);
    }

    public function markAsNoShow()
    {
        $this->update([
            'status' => 'no-show',
        ]);
    }

    public function cancel()
    {
        $this->update([
            'status' => 'cancelled',
        ]);
    }
}
