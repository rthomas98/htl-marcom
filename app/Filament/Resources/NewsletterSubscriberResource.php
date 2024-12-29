<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsletterSubscriberResource\Pages;
use App\Models\NewsletterSubscriber;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;

class NewsletterSubscriberResource extends Resource
{
    protected static ?string $model = NewsletterSubscriber::class;

    protected static ?string $navigationIcon = 'heroicon-o-users';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 8;

    protected static ?string $navigationLabel = 'Subscribers';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Subscriber Information')
                            ->schema([
                                TextInput::make('email')
                                    ->email()
                                    ->required()
                                    ->unique(ignoreRecord: true),
                                TextInput::make('first_name'),
                                TextInput::make('last_name'),
                                Select::make('status')
                                    ->options([
                                        'subscribed' => 'Subscribed',
                                        'unsubscribed' => 'Unsubscribed',
                                        'bounced' => 'Bounced',
                                        'complained' => 'Complained',
                                    ])
                                    ->required(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Subscription Details')
                            ->schema([
                                DateTimePicker::make('subscribed_at')
                                    ->label('Subscribed Date'),
                                DateTimePicker::make('unsubscribed_at')
                                    ->label('Unsubscribed Date'),
                            ]),

                        Forms\Components\Section::make('Additional Information')
                            ->schema([
                                KeyValue::make('preferences')
                                    ->keyLabel('Preference')
                                    ->valueLabel('Setting'),
                                KeyValue::make('metadata')
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
                TextColumn::make('email')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('full_name')
                    ->searchable(['first_name', 'last_name'])
                    ->sortable(),
                BadgeColumn::make('status')
                    ->colors([
                        'success' => 'subscribed',
                        'danger' => 'unsubscribed',
                        'warning' => 'bounced',
                        'gray' => 'complained',
                    ]),
                TextColumn::make('subscribed_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('unsubscribed_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'subscribed' => 'Subscribed',
                        'unsubscribed' => 'Unsubscribed',
                        'bounced' => 'Bounced',
                        'complained' => 'Complained',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('unsubscribe')
                    ->icon('heroicon-o-no-symbol')
                    ->color('danger')
                    ->action(fn (NewsletterSubscriber $record) => $record->unsubscribe())
                    ->requiresConfirmation()
                    ->visible(fn (NewsletterSubscriber $record) => $record->status === 'subscribed'),
                Tables\Actions\Action::make('resubscribe')
                    ->icon('heroicon-o-check-circle')
                    ->color('success')
                    ->action(fn (NewsletterSubscriber $record) => $record->resubscribe())
                    ->requiresConfirmation()
                    ->visible(fn (NewsletterSubscriber $record) => $record->status === 'unsubscribed'),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\BulkAction::make('unsubscribe_selected')
                        ->label('Unsubscribe Selected')
                        ->icon('heroicon-o-no-symbol')
                        ->action(fn ($records) => $records->each->unsubscribe())
                        ->requiresConfirmation(),
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
            'index' => Pages\ListNewsletterSubscribers::route('/'),
            'create' => Pages\CreateNewsletterSubscriber::route('/create'),
            'edit' => Pages\EditNewsletterSubscriber::route('/{record}/edit'),
        ];
    }
}
