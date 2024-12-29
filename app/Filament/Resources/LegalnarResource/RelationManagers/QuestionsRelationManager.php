<?php

namespace App\Filament\Resources\LegalnarResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class QuestionsRelationManager extends RelationManager
{
    protected static string $relationship = 'questions';

    protected static ?string $title = 'Questions';

    protected static ?string $recordTitleAttribute = 'question';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required()
                    ->searchable()
                    ->preload(),

                Forms\Components\Textarea::make('question')
                    ->required()
                    ->maxLength(65535),

                Forms\Components\Textarea::make('answer')
                    ->maxLength(65535),

                Forms\Components\Toggle::make('is_featured')
                    ->default(false),

                Forms\Components\Select::make('answered_by')
                    ->relationship('answeredBy', 'name')
                    ->searchable()
                    ->preload(),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('question')
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Asked By')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('question')
                    ->limit(50)
                    ->searchable(),

                Tables\Columns\TextColumn::make('answer')
                    ->limit(50)
                    ->searchable(),

                Tables\Columns\IconColumn::make('is_answered')
                    ->boolean(),

                Tables\Columns\IconColumn::make('is_featured')
                    ->boolean(),

                Tables\Columns\TextColumn::make('answeredBy.name')
                    ->label('Answered By')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('answered_at')
                    ->dateTime()
                    ->sortable(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_answered'),
                Tables\Filters\TernaryFilter::make('is_featured'),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('answer')
                    ->form([
                        Forms\Components\Textarea::make('answer')
                            ->required()
                            ->maxLength(65535),
                    ])
                    ->action(function (Model $record, array $data): void {
                        $record->answer($data['answer'], auth()->user());
                    })
                    ->visible(fn (Model $record): bool => !$record->is_answered),

                Tables\Actions\Action::make('toggle_featured')
                    ->action(fn (Model $record) => $record->toggleFeatured())
                    ->requiresConfirmation(),

                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('mark_featured')
                        ->action(function ($records): void {
                            $records->each(fn ($record) => $record->update(['is_featured' => true]));
                        })
                        ->requiresConfirmation(),
                    Tables\Actions\BulkAction::make('unmark_featured')
                        ->action(function ($records): void {
                            $records->each(fn ($record) => $record->update(['is_featured' => false]));
                        })
                        ->requiresConfirmation(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
} 