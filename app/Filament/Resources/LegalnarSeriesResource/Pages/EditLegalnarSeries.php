<?php

namespace App\Filament\Resources\LegalnarSeriesResource\Pages;

use App\Filament\Resources\LegalnarSeriesResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditLegalnarSeries extends EditRecord
{
    protected static string $resource = LegalnarSeriesResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
