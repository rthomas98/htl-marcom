<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SeoMetadataResource\Pages;
use App\Models\SeoMetadata;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\KeyValue;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Infolists\Components\SpatieMediaLibraryImageEntry;
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn as MediaLibraryImageColumn;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload as MediaLibraryFileUpload;

class SeoMetadataResource extends Resource
{
    protected static ?string $model = SeoMetadata::class;

    protected static ?string $navigationIcon = 'heroicon-o-magnifying-glass';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 10;

    protected static ?string $navigationLabel = 'SEO';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Basic SEO')
                            ->schema([
                                TextInput::make('title')
                                    ->maxLength(60)
                                    ->helperText('Recommended length: 50-60 characters'),
                                Textarea::make('description')
                                    ->maxLength(160)
                                    ->helperText('Recommended length: 150-160 characters'),
                                TextInput::make('keywords')
                                    ->helperText('Comma-separated keywords'),
                                TextInput::make('canonical_url')
                                    ->url(),
                                Select::make('robots')
                                    ->options([
                                        'index,follow' => 'Index and Follow',
                                        'noindex,follow' => 'No Index but Follow',
                                        'index,nofollow' => 'Index but No Follow',
                                        'noindex,nofollow' => 'No Index and No Follow',
                                    ])
                                    ->default('index,follow'),
                            ]),

                        Forms\Components\Section::make('Open Graph')
                            ->schema([
                                TextInput::make('og_title')
                                    ->maxLength(95)
                                    ->helperText('Recommended length: 85-95 characters')
                                    ->live()
                                    ->afterStateUpdated(function (Forms\Components\TextInput $component, $state) {
                                        $length = strlen($state);
                                        $remaining = 95 - $length;
                                        $component->helperText("Recommended length: 85-95 characters ($length used, $remaining remaining)");
                                    }),
                                Textarea::make('og_description')
                                    ->maxLength(200)
                                    ->helperText('Recommended length: 180-200 characters')
                                    ->live()
                                    ->afterStateUpdated(function (Forms\Components\Textarea $component, $state) {
                                        $length = strlen($state);
                                        $remaining = 200 - $length;
                                        $component->helperText("Recommended length: 180-200 characters ($length used, $remaining remaining)");
                                    }),
                                MediaLibraryFileUpload::make('og_image')
                                    ->collection('og_image')
                                    ->image()
                                    ->imageEditor()
                                    ->helperText('Recommended size: 1200x630 pixels')
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('1200:630')
                                    ->imageResizeTargetWidth('1200')
                                    ->imageResizeTargetHeight('630'),
                                Select::make('og_type')
                                    ->options([
                                        'article' => 'Article',
                                        'website' => 'Website',
                                        'profile' => 'Profile',
                                    ])
                                    ->default('article'),
                                TextInput::make('og_url')
                                    ->url(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Twitter Card')
                            ->schema([
                                Select::make('twitter_card')
                                    ->options([
                                        'summary' => 'Summary',
                                        'summary_large_image' => 'Summary with Large Image',
                                    ])
                                    ->default('summary_large_image'),
                                TextInput::make('twitter_title')
                                    ->maxLength(70)
                                    ->helperText('Recommended length: 65-70 characters')
                                    ->live()
                                    ->afterStateUpdated(function (Forms\Components\TextInput $component, $state) {
                                        $length = strlen($state);
                                        $remaining = 70 - $length;
                                        $component->helperText("Recommended length: 65-70 characters ($length used, $remaining remaining)");
                                    }),
                                Textarea::make('twitter_description')
                                    ->maxLength(200)
                                    ->helperText('Recommended length: 180-200 characters')
                                    ->live()
                                    ->afterStateUpdated(function (Forms\Components\Textarea $component, $state) {
                                        $length = strlen($state);
                                        $remaining = 200 - $length;
                                        $component->helperText("Recommended length: 180-200 characters ($length used, $remaining remaining)");
                                    }),
                                MediaLibraryFileUpload::make('twitter_image')
                                    ->collection('twitter_image')
                                    ->image()
                                    ->imageEditor()
                                    ->helperText('Recommended size: 800x418 pixels')
                                    ->imageResizeMode('cover')
                                    ->imageCropAspectRatio('800:418')
                                    ->imageResizeTargetWidth('800')
                                    ->imageResizeTargetHeight('418'),
                                TextInput::make('twitter_creator')
                                    ->helperText('@username'),
                            ]),

                        Forms\Components\Section::make('Additional Meta')
                            ->schema([
                                KeyValue::make('custom_meta')
                                    ->keyLabel('Meta Name')
                                    ->valueLabel('Content'),
                                KeyValue::make('structured_data')
                                    ->keyLabel('Key')
                                    ->valueLabel('Value'),
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
                TextColumn::make('seoable_type')
                    ->label('Type')
                    ->searchable(),
                TextColumn::make('title')
                    ->searchable()
                    ->limit(40),
                TextColumn::make('description')
                    ->limit(60),
                MediaLibraryImageColumn::make('og_image')
                    ->collection('og_image')
                    ->circular(),
                TextColumn::make('robots')
                    ->searchable(),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('generate')
                    ->icon('heroicon-o-arrow-path')
                    ->action(function (SeoMetadata $record) {
                        $record->generateMetaTitle();
                        $record->generateMetaDescription();
                    })
                    ->requiresConfirmation(),
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
            'index' => Pages\ListSeoMetadata::route('/'),
            'create' => Pages\CreateSeoMetadata::route('/create'),
            'edit' => Pages\EditSeoMetadata::route('/{record}/edit'),
        ];
    }
}
