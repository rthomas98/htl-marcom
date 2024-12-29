<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SchemaMarkupResource\Pages;
use App\Models\SchemaMarkup;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\KeyValue;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ToggleColumn;
use Filament\Tables\Columns\IconColumn;

class SchemaMarkupResource extends Resource
{
    protected static ?string $model = SchemaMarkup::class;

    protected static ?string $navigationIcon = 'heroicon-o-code-bracket';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 11;

    protected static ?string $navigationLabel = 'Schema Markup';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Schema Information')
                            ->schema([
                                Select::make('type')
                                    ->options([
                                        'Article' => 'Article',
                                        'BlogPosting' => 'Blog Post',
                                        'BreadcrumbList' => 'Breadcrumb',
                                        'FAQPage' => 'FAQ Page',
                                        'Organization' => 'Organization',
                                        'Person' => 'Person',
                                        'WebPage' => 'Web Page',
                                        'WebSite' => 'Website',
                                    ])
                                    ->required(),
                                KeyValue::make('schema_data')
                                    ->keyLabel('Property')
                                    ->valueLabel('Value')
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Settings')
                            ->schema([
                                Toggle::make('is_active')
                                    ->label('Active')
                                    ->default(true),
                                TextInput::make('priority')
                                    ->numeric()
                                    ->default(0)
                                    ->helperText('Higher numbers appear first'),
                            ]),

                        Forms\Components\Section::make('Preview')
                            ->schema([
                                Forms\Components\Placeholder::make('json_ld')
                                    ->label('JSON-LD Preview')
                                    ->content(fn (?SchemaMarkup $record): string => 
                                        $record ? $record->getJsonLd() : '{}'),
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
                TextColumn::make('schemaable_type')
                    ->label('Type')
                    ->searchable(),
                TextColumn::make('type')
                    ->searchable()
                    ->sortable(),
                IconColumn::make('is_active')
                    ->boolean()
                    ->sortable(),
                TextColumn::make('priority')
                    ->sortable(),
                TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('type')
                    ->options([
                        'Article' => 'Article',
                        'BlogPosting' => 'Blog Post',
                        'BreadcrumbList' => 'Breadcrumb',
                        'FAQPage' => 'FAQ Page',
                        'Organization' => 'Organization',
                        'Person' => 'Person',
                        'WebPage' => 'Web Page',
                        'WebSite' => 'Website',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('preview')
                    ->icon('heroicon-o-eye')
                    ->url(fn (SchemaMarkup $record): string => 
                        'https://search.google.com/test/rich-results?url=' . urlencode(url()->current()))
                    ->openUrlInNewTab(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('priority', 'desc');
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
            'index' => Pages\ListSchemaMarkups::route('/'),
            'create' => Pages\CreateSchemaMarkup::route('/create'),
            'edit' => Pages\EditSchemaMarkup::route('/{record}/edit'),
        ];
    }
}
