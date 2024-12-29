<?php

namespace App\Filament\Resources\LegalnarResource\RelationManagers;

use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class AttendeesRelationManager extends RelationManager
{
    protected static string $relationship = 'attendees';
    protected static ?string $title = 'Attendees';
    protected static ?string $modelLabel = 'Attendee';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->searchable()
                    ->preload()
                    ->required(),
                Forms\Components\Select::make('status')
                    ->options([
                        'registered' => 'Registered',
                        'attended' => 'Attended',
                        'no-show' => 'No Show',
                        'cancelled' => 'Cancelled',
                    ])
                    ->default('registered')
                    ->required(),
                Forms\Components\TextInput::make('amount_paid')
                    ->numeric()
                    ->prefix('$')
                    ->maxValue(999999.99),
                Forms\Components\Select::make('payment_status')
                    ->options([
                        'pending' => 'Pending',
                        'completed' => 'Completed',
                        'failed' => 'Failed',
                        'refunded' => 'Refunded',
                    ])
                    ->default('pending')
                    ->required(),
                Forms\Components\DateTimePicker::make('registered_at')
                    ->default(now())
                    ->required(),
                Forms\Components\DateTimePicker::make('attended_at')
                    ->visible(fn (string $operation) => $operation === 'edit'),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('id')
            ->columns([
                Tables\Columns\TextColumn::make('user.name')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\SelectColumn::make('status')
                    ->options([
                        'registered' => 'Registered',
                        'attended' => 'Attended',
                        'no-show' => 'No Show',
                        'cancelled' => 'Cancelled',
                    ])
                    ->sortable(),
                Tables\Columns\TextColumn::make('amount_paid')
                    ->money('USD')
                    ->sortable(),
                Tables\Columns\SelectColumn::make('payment_status')
                    ->options([
                        'pending' => 'Pending',
                        'completed' => 'Completed',
                        'failed' => 'Failed',
                        'refunded' => 'Refunded',
                    ])
                    ->sortable(),
                Tables\Columns\TextColumn::make('registered_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('attended_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'registered' => 'Registered',
                        'attended' => 'Attended',
                        'no-show' => 'No Show',
                        'cancelled' => 'Cancelled',
                    ]),
                Tables\Filters\SelectFilter::make('payment_status')
                    ->options([
                        'pending' => 'Pending',
                        'completed' => 'Completed',
                        'failed' => 'Failed',
                        'refunded' => 'Refunded',
                    ]),
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make()
                    ->mutateFormDataUsing(function (array $data): array {
                        $data['registered_at'] = $data['registered_at'] ?? now();
                        return $data;
                    }),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\Action::make('mark_attended')
                    ->action(fn (Model $record) => $record->markAsAttended())
                    ->requiresConfirmation()
                    ->visible(fn (Model $record) => $record->status === 'registered'),
                Tables\Actions\Action::make('mark_no_show')
                    ->action(fn (Model $record) => $record->markAsNoShow())
                    ->requiresConfirmation()
                    ->visible(fn (Model $record) => $record->status === 'registered'),
                Tables\Actions\Action::make('cancel')
                    ->action(fn (Model $record) => $record->cancel())
                    ->requiresConfirmation()
                    ->visible(fn (Model $record) => $record->status === 'registered'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('mark_attended')
                        ->action(fn (Collection $records) => $records->each->markAsAttended())
                        ->requiresConfirmation(),
                    Tables\Actions\BulkAction::make('mark_no_show')
                        ->action(fn (Collection $records) => $records->each->markAsNoShow())
                        ->requiresConfirmation(),
                    Tables\Actions\BulkAction::make('cancel')
                        ->action(fn (Collection $records) => $records->each->cancel())
                        ->requiresConfirmation(),
                ]),
            ]);
    }
}
