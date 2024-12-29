<?php

namespace App\Filament\Resources;

use App\Filament\Resources\NewsletterCampaignResource\Pages;
use App\Models\NewsletterCampaign;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\KeyValue;
use Filament\Forms\Components\Grid;

class NewsletterCampaignResource extends Resource
{
    protected static ?string $model = NewsletterCampaign::class;

    protected static ?string $navigationIcon = 'heroicon-o-envelope';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 9;

    protected static ?string $navigationLabel = 'Campaigns';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Campaign Details')
                            ->schema([
                                TextInput::make('name')
                                    ->required()
                                    ->maxLength(255),
                                TextInput::make('subject')
                                    ->required()
                                    ->maxLength(255),
                                RichEditor::make('content')
                                    ->required()
                                    ->columnSpanFull(),
                            ]),

                        Forms\Components\Section::make('Template Data')
                            ->schema([
                                KeyValue::make('template_data')
                                    ->keyLabel('Variable')
                                    ->valueLabel('Value')
                                    ->columnSpanFull(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Campaign Status')
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'draft' => 'Draft',
                                        'scheduled' => 'Scheduled',
                                        'sending' => 'Sending',
                                        'sent' => 'Sent',
                                        'failed' => 'Failed',
                                    ])
                                    ->required(),
                                DateTimePicker::make('scheduled_at')
                                    ->label('Schedule Date'),
                                DateTimePicker::make('sent_at')
                                    ->label('Sent Date')
                                    ->disabled(),
                            ]),

                        Forms\Components\Section::make('Campaign Statistics')
                            ->schema([
                                Grid::make(3)
                                    ->schema([
                                        TextInput::make('sent_count')
                                            ->disabled(),
                                        TextInput::make('open_count')
                                            ->disabled(),
                                        TextInput::make('click_count')
                                            ->disabled(),
                                    ]),
                            ]),

                        Forms\Components\Section::make('Tracking Data')
                            ->schema([
                                KeyValue::make('tracking_data')
                                    ->keyLabel('Metric')
                                    ->valueLabel('Data'),
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
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('subject')
                    ->searchable()
                    ->limit(50),
                BadgeColumn::make('status')
                    ->colors([
                        'primary' => 'draft',
                        'warning' => 'scheduled',
                        'info' => 'sending',
                        'success' => 'sent',
                        'danger' => 'failed',
                    ]),
                TextColumn::make('scheduled_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('sent_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('sent_count')
                    ->label('Sent')
                    ->sortable(),
                TextColumn::make('open_rate')
                    ->label('Open Rate')
                    ->formatStateUsing(fn ($state): string => number_format($state, 1) . '%'),
                TextColumn::make('click_rate')
                    ->label('Click Rate')
                    ->formatStateUsing(fn ($state): string => number_format($state, 1) . '%'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'scheduled' => 'Scheduled',
                        'sending' => 'Sending',
                        'sent' => 'Sent',
                        'failed' => 'Failed',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('schedule')
                    ->icon('heroicon-o-clock')
                    ->form([
                        DateTimePicker::make('scheduled_at')
                            ->required(),
                    ])
                    ->action(fn (NewsletterCampaign $record, array $data) => $record->schedule($data['scheduled_at']))
                    ->visible(fn (NewsletterCampaign $record): bool => $record->status === 'draft'),
                Tables\Actions\Action::make('send')
                    ->icon('heroicon-o-paper-airplane')
                    ->action(fn (NewsletterCampaign $record) => $record->send())
                    ->requiresConfirmation()
                    ->visible(fn (NewsletterCampaign $record): bool => in_array($record->status, ['draft', 'scheduled'])),
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
            'index' => Pages\ListNewsletterCampaigns::route('/'),
            'create' => Pages\CreateNewsletterCampaign::route('/create'),
            'edit' => Pages\EditNewsletterCampaign::route('/{record}/edit'),
        ];
    }
}
