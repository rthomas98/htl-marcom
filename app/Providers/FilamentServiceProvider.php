<?php

namespace App\Providers;

use Filament\Forms\Components\FileUpload;
use Illuminate\Support\ServiceProvider;

class FilamentServiceProvider extends ServiceProvider
{
    public function boot()
    {
        FileUpload::configureUsing(function (FileUpload $fileUpload) {
            $fileUpload
                ->disk('do_spaces')
                ->visibility('public')
                ->storeFileNamesIn('original_filename')
                ->preserveFilenames();
        });
    }
}
