<?php

namespace App\Filament\Resources\PostRevisionResource\Pages;

use App\Filament\Resources\PostRevisionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditPostRevision extends EditRecord
{
    protected static string $resource = PostRevisionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
