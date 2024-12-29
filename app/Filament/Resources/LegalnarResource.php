<?php

namespace App\Filament\Resources;

use App\Filament\Resources\LegalnarResource\Pages;
use App\Models\Legalnar;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;
use App\Filament\Resources\LegalnarResource\RelationManagers;

class LegalnarResource extends Resource
{
    protected static ?string $model = Legalnar::class;

    protected static ?string $navigationIcon = 'heroicon-o-video-camera';
    protected static ?string $navigationGroup = 'MarCom';
    protected static ?int $navigationSort = 10;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Basic Information')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->maxLength(255)
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => 
                                $operation === 'create' ? $set('slug', \Str::slug($state)) : null),

                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),

                        Forms\Components\Select::make('series_id')
                            ->relationship('series', 'title')
                            ->searchable()
                            ->preload(),

                        Forms\Components\Select::make('instructor_id')
                            ->relationship('instructor', 'name')
                            ->searchable()
                            ->preload()
                            ->required(),

                        Forms\Components\Select::make('level')
                            ->options([
                                'beginner' => 'Beginner',
                                'intermediate' => 'Intermediate',
                                'advanced' => 'Advanced',
                            ])
                            ->required(),

                        Forms\Components\Select::make('type')
                            ->options([
                                'live' => 'Live',
                                'on-demand' => 'On-demand',
                            ])
                            ->required()
                            ->default('live')
                            ->live(),

                        SpatieMediaLibraryFileUpload::make('featured_image')
                            ->collection('featured_image')
                            ->image()
                            ->imageEditor()
                            ->imageEditorAspectRatios([
                                '16:9',
                                '4:3',
                                '1:1',
                            ])
                            ->directory('legalnars/featured-images'),
                    ]),

                Forms\Components\Section::make('Content')
                    ->schema([
                        Forms\Components\RichEditor::make('description')
                            ->required()
                            ->columnSpanFull(),

                        Forms\Components\RichEditor::make('learning_outcomes')
                            ->columnSpanFull(),

                        SpatieMediaLibraryFileUpload::make('materials')
                            ->collection('materials')
                            ->multiple()
                            ->reorderable()
                            ->directory('legalnars/materials')
                            ->acceptedFileTypes(['application/pdf', 'application/zip', 'application/x-zip-compressed'])
                            ->columnSpanFull(),
                    ]),

                Forms\Components\Section::make('Scheduling & Pricing')
                    ->schema([
                        Forms\Components\TextInput::make('duration_minutes')
                            ->numeric()
                            ->default(60)
                            ->required(),

                        Forms\Components\TextInput::make('price')
                            ->numeric()
                            ->prefix('$')
                            ->maxValue(9999.99),

                        Forms\Components\TextInput::make('max_attendees')
                            ->numeric()
                            ->visible(fn (Forms\Get $get) => $get('type') === 'live'),

                        Forms\Components\DateTimePicker::make('scheduled_start')
                            ->required()
                            ->visible(fn (Forms\Get $get) => $get('type') === 'live'),

                        Forms\Components\DateTimePicker::make('scheduled_end')
                            ->required()
                            ->visible(fn (Forms\Get $get) => $get('type') === 'live'),

                        Forms\Components\TextInput::make('meeting_url')
                            ->url()
                            ->visible(fn (Forms\Get $get) => $get('type') === 'live'),

                        Forms\Components\TextInput::make('recording_url')
                            ->url(),

                        Forms\Components\Toggle::make('is_featured')
                            ->default(false),
                    ]),

                Forms\Components\Section::make('On-demand Settings')
                    ->schema([
                        Forms\Components\Toggle::make('is_published')
                            ->default(false),

                        Forms\Components\DateTimePicker::make('published_at'),

                        Forms\Components\TextInput::make('completion_threshold')
                            ->numeric()
                            ->default(85)
                            ->suffix('%')
                            ->minValue(0)
                            ->maxValue(100),
                    ])
                    ->visible(fn (Forms\Get $get) => $get('type') === 'on-demand'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\SpatieMediaLibraryImageColumn::make('featured_image')
                    ->collection('featured_image')
                    ->conversion('thumb')
                    ->circular(),

                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('type')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('level')
                    ->badge()
                    ->sortable(),

                Tables\Columns\TextColumn::make('price')
                    ->money('USD')
                    ->sortable(),

                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean()
                    ->sortable(),

                Tables\Columns\TextColumn::make('scheduled_start')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),

                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'live' => 'Live',
                        'on-demand' => 'On-demand',
                    ]),

                Tables\Filters\SelectFilter::make('level')
                    ->options([
                        'beginner' => 'Beginner',
                        'intermediate' => 'Intermediate',
                        'advanced' => 'Advanced',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            RelationManagers\AttendeesRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListLegalnars::route('/'),
            'create' => Pages\CreateLegalnar::route('/create'),
            'edit' => Pages\EditLegalnar::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
