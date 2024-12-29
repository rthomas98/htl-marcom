<?php

namespace App\Filament\Resources\BlogAnalyticResource\Pages;

use App\Filament\Resources\BlogAnalyticResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListBlogAnalytics extends ListRecords
{
    protected static string $resource = BlogAnalyticResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
