<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;
use Filament\Facades\Filament;

class UserInvitation extends ResetPassword
{
    protected function buildMailMessage($url): MailMessage
    {
        return (new MailMessage)
            ->subject('Welcome to ' . config('app.name'))
            ->greeting('Hello!')
            ->line('You have been invited to join ' . config('app.name') . '.')
            ->line('Please click the button below to set up your password and access your account.')
            ->action('Set Up Password', $url)
            ->line('This password setup link will expire in ' . config('auth.passwords.'.config('auth.defaults.passwords').'.expire') . ' minutes.')
            ->line('If you did not expect this invitation, no further action is required.');
    }

    protected function resetUrl($notifiable): string
    {
        $panel = Filament::getPanel('marcom');
        return $panel->getResetPasswordUrl($this->token, $notifiable);
    }
}
