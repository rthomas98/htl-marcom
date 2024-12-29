<?php

namespace App\Filament\Resources\UserResource\Pages;

use App\Filament\Resources\UserResource;
use Filament\Resources\Pages\CreateRecord;
use Filament\Notifications\Notification;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Log;

class CreateUser extends CreateRecord
{
    protected static string $resource = UserResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        $data['password'] = null;
        return $data;
    }

    protected function afterCreate(): void
    {
        try {
            $user = $this->record;
            
            // Generate a password reset token
            $token = Password::createToken($user);
            
            // Send the invitation
            $user->sendPasswordResetNotification($token);

            Notification::make()
                ->title('User created and invitation sent successfully')
                ->success()
                ->send();

            Log::info('Invitation sent successfully to: ' . $user->email);
        } catch (\Exception $e) {
            Log::error('Failed to send invitation: ' . $e->getMessage());
            
            Notification::make()
                ->title('User created but failed to send invitation')
                ->danger()
                ->send();
        }
    }
}
