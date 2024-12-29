<?php

namespace App\Filament\Resources\LegalnarResource\Pages;

use App\Filament\Resources\LegalnarResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLegalnars extends ListRecords
{
    protected static string $resource = LegalnarResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
