<?php

namespace App\Filament\Resources\LegalnarResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class FeedbackRelationManager extends RelationManager
{
    protected static string $relationship = 'feedback';

    protected static ?string $title = 'Feedback';

    protected static ?string $recordTitleAttribute = 'feedback';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required()
                    ->searchable()
                    ->preload(),

                Forms\Components\TextInput::make('rating')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(5)
                    ->required(),

                Forms\Components\Textarea::make('feedback')
                    ->maxLength(65535),

                Forms\Components\Section::make('Detailed Ratings')
                    ->schema([
                        Forms\Components\TextInput::make('ratings_breakdown.content')
                            ->label('Content Quality')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(5),

                        Forms\Components\TextInput::make('ratings_breakdown.presentation')
                            ->label('Presentation')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(5),

                        Forms\Components\TextInput::make('ratings_breakdown.interaction')
                            ->label('Interaction')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(5),

                        Forms\Components\TextInput::make('ratings_breakdown.technical')
                            ->label('Technical Quality')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(5),

                        Forms\Components\TextInput::make('ratings_breakdown.value')
                            ->label('Value for Money')
                            ->numeric()
                            ->minValue(1)
                            ->maxValue(5),
                    ])
                    ->columns(2),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('feedback')
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->label('Attendee')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('rating')
                    ->sortable()
                    ->badge()
                    ->color(fn (int $state): string => match (true) {
                        $state >= 4 => 'success',
                        $state >= 3 => 'warning',
                        default => 'danger',
                    }),

                Tables\Columns\TextColumn::make('feedback')
                    ->limit(50)
                    ->searchable(),

                Tables\Columns\TextColumn::make('average_detailed_rating')
                    ->label('Detailed Rating')
                    ->badge()
                    ->color(fn (float $state): string => match (true) {
                        $state >= 4 => 'success',
                        $state >= 3 => 'warning',
                        default => 'danger',
                    }),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('rating')
                    ->options([
                        1 => '1 Star',
                        2 => '2 Stars',
                        3 => '3 Stars',
                        4 => '4 Stars',
                        5 => '5 Stars',
                    ]),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->defaultSort('created_at', 'desc');
    }
} 