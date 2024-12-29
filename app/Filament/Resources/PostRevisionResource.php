<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PostRevisionResource\Pages;
use App\Models\PostRevision;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\DateTimePicker;

class PostRevisionResource extends Resource
{
    protected static ?string $model = PostRevision::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-duplicate';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 7;

    protected static ?string $navigationLabel = 'Revisions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Post Information')
                            ->schema([
                                Select::make('blog_post_id')
                                    ->relationship('post', 'title')
                                    ->required()
                                    ->searchable(),
                                TextInput::make('title')
                                    ->required()
                                    ->maxLength(255),
                                RichEditor::make('content')
                                    ->required()
                                    ->columnSpanFull(),
                                Textarea::make('excerpt')
                                    ->maxLength(65535)
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Revision Details')
                            ->schema([
                                Select::make('user_id')
                                    ->relationship('author', 'name')
                                    ->required(),
                                TextInput::make('version')
                                    ->required()
                                    ->numeric()
                                    ->disabled(),
                                Textarea::make('change_summary')
                                    ->maxLength(65535),
                                DateTimePicker::make('published_at'),
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
                TextColumn::make('post.title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('version')
                    ->sortable(),
                TextColumn::make('author.name')
                    ->sortable(),
                TextColumn::make('change_summary')
                    ->limit(50),
                TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('blog_post')
                    ->relationship('post', 'title'),
                Tables\Filters\SelectFilter::make('author')
                    ->relationship('author', 'name'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\Action::make('revert')
                    ->icon('heroicon-o-arrow-path')
                    ->action(fn (PostRevision $record) => $record->revertTo())
                    ->requiresConfirmation(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('version', 'desc');
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
            'index' => Pages\ListPostRevisions::route('/'),
        ];
    }
}
