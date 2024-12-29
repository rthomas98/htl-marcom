<?php

namespace App\Filament\Resources\BlogAnalyticResource\Pages;

use App\Filament\Resources\BlogAnalyticResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditBlogAnalytic extends EditRecord
{
    protected static string $resource = BlogAnalyticResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
