<?php

namespace App\Notifications;

use App\Models\LegalnarAttendee;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class LegalnarRegistrationConfirmed extends Notification implements ShouldQueue
{
    use Queueable;

    public function __construct(
        protected LegalnarAttendee $attendee
    ) {}

    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage
    {
        $legalnar = $this->attendee->legalnar;
        
        return (new MailMessage)
            ->subject("Registration Confirmed: {$legalnar->title}")
            ->greeting("Hello {$notifiable->name}!")
            ->line("Your registration for {$legalnar->title} has been confirmed.")
            ->when($legalnar->type === 'live', function (MailMessage $message) use ($legalnar) {
                return $message
                    ->line("Date: " . $legalnar->scheduled_start->format('F j, Y'))
                    ->line("Time: " . $legalnar->scheduled_start->format('g:i A') . " - " . $legalnar->scheduled_end->format('g:i A') . " {$legalnar->timezone}")
                    ->when($legalnar->meeting_url, fn (MailMessage $m) => 
                        $m->line("Join URL: {$legalnar->meeting_url}")
                    );
            })
            ->when($legalnar->type === 'on-demand', function (MailMessage $message) use ($legalnar) {
                return $message->line("You can access the content at any time through your dashboard.");
            })
            ->line("Thank you for registering!")
            ->action('View Details', route('dashboard.legalnars.show', $legalnar))
            ->line("If you have any questions, please don't hesitate to contact us.");
    }
} 