<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MediaResource\Pages;
use App\Models\Media;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\SelectFilter;

class MediaResource extends Resource
{
    protected static ?string $model = Media::class;

    protected static ?string $navigationIcon = 'heroicon-o-photo';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 5;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Media Upload')
                            ->schema([
                                FileUpload::make('file')
                                    ->image()
                                    ->imageEditor()
                                    ->directory('media')
                                    ->visibility('public')
                                    ->maxSize(5120)
                                    ->columnSpanFull(),
                            ]),

                        Forms\Components\Section::make('Media Information')
                            ->schema([
                                TextInput::make('title')
                                    ->required(),
                                Textarea::make('description'),
                                TextInput::make('alt')
                                    ->label('Alt Text'),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Settings')
                            ->schema([
                                Select::make('disk')
                                    ->options([
                                        'public' => 'Public',
                                        's3' => 'Amazon S3',
                                    ])
                                    ->default('public')
                                    ->required(),
                                TextInput::make('directory')
                                    ->default('uploads')
                                    ->required(),
                            ]),

                        Forms\Components\Section::make('Metadata')
                            ->schema([
                                TextInput::make('mime_type')
                                    ->disabled(),
                                TextInput::make('size')
                                    ->disabled()
                                    ->formatStateUsing(fn ($state) => 
                                        $state ? round($state / 1024, 2) . ' KB' : null
                                    ),
                            ]),
                    ])
                    ->columnSpan(['lg' => 1]),
            ])
            ->columns(3);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('url')
                    ->square()
                    ->label('Preview'),
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('filename')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('mime_type')
                    ->sortable(),
                TextColumn::make('size')
                    ->formatStateUsing(fn ($state) => 
                        $state ? round($state / 1024, 2) . ' KB' : null
                    )
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('disk')
                    ->options([
                        'public' => 'Public',
                        's3' => 'Amazon S3',
                    ]),
                SelectFilter::make('mime_type')
                    ->options([
                        'image/jpeg' => 'JPEG',
                        'image/png' => 'PNG',
                        'image/gif' => 'GIF',
                        'image/webp' => 'WebP',
                    ])
                    ->multiple(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('download')
                    ->icon('heroicon-o-arrow-down-tray')
                    ->url(fn (Media $record) => $record->full_url)
                    ->openUrlInNewTab(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMedia::route('/'),
            'create' => Pages\CreateMedia::route('/create'),
            'edit' => Pages\EditMedia::route('/{record}/edit'),
        ];
    }
}
