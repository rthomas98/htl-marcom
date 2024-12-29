<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class LegalnarAttendee extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'legalnar_id',
        'name',
        'email',
        'company',
        'special_requirements',
        'status',
        'payment_status',
        'amount_paid',
        'registered_at',
        'meta_data',
    ];

    protected $casts = [
        'registered_at' => 'datetime',
        'meta_data' => 'array',
        'amount_paid' => 'decimal:2',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function legalnar(): BelongsTo
    {
        return $this->belongsTo(Legalnar::class);
    }
}
