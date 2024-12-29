<?php

namespace App\Filament\Resources\LegalnarSeriesResource\Pages;

use App\Filament\Resources\LegalnarSeriesResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListLegalnarSeries extends ListRecords
{
    protected static string $resource = LegalnarSeriesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
