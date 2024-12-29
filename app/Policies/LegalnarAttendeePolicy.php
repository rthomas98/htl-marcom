<?php

namespace App\Policies;

use App\Models\LegalnarAttendee;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class LegalnarAttendeePolicy
{
    use HandlesAuthorization;

    public function view(User $user, LegalnarAttendee $attendee): bool
    {
        return $user->id === $attendee->user_id;
    }

    public function viewAny(User $user): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, LegalnarAttendee $attendee): bool
    {
        return $user->id === $attendee->user_id;
    }

    public function delete(User $user, LegalnarAttendee $attendee): bool
    {
        return $user->id === $attendee->user_id;
    }
} 