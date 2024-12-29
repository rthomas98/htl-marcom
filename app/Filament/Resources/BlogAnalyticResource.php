<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogAnalyticResource\Pages;
use App\Models\BlogAnalytic;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\ViewColumn;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Placeholder;

class BlogAnalyticResource extends Resource
{
    protected static ?string $model = BlogAnalytic::class;

    protected static ?string $navigationIcon = 'heroicon-o-chart-bar';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 6;

    protected static ?string $navigationLabel = 'Analytics';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Card::make()
                            ->schema([
                                Select::make('blog_post_id')
                                    ->relationship('post', 'title')
                                    ->required()
                                    ->searchable(),
                                Placeholder::make('views')
                                    ->content(fn (?BlogAnalytic $record): string => $record?->views ?? 0),
                                Placeholder::make('reading_time')
                                    ->content(fn (?BlogAnalytic $record): string => 
                                        ($record?->reading_time_minutes ?? 0) . ' minutes'
                                    ),
                            ]),
                        
                        Card::make()
                            ->schema([
                                Placeholder::make('engagement')
                                    ->content(fn (?BlogAnalytic $record): string => 
                                        'Comments: ' . ($record?->comment_count ?? 0) . 
                                        ' | Likes: ' . ($record?->like_count ?? 0) . 
                                        ' | Shares: ' . ($record?->share_count ?? 0)
                                    ),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Card::make()
                            ->schema([
                                Placeholder::make('referral_sources')
                                    ->content(fn (?BlogAnalytic $record): string => 
                                        json_encode($record?->referral_sources ?? [], JSON_PRETTY_PRINT)
                                    ),
                            ]),
                        Card::make()
                            ->schema([
                                Placeholder::make('device_stats')
                                    ->content(fn (?BlogAnalytic $record): string => 
                                        json_encode($record?->device_stats ?? [], JSON_PRETTY_PRINT)
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
                TextColumn::make('post.title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('views')
                    ->sortable(),
                TextColumn::make('reading_time_minutes')
                    ->label('Reading Time')
                    ->formatStateUsing(fn (string $state): string => "{$state} min")
                    ->sortable(),
                TextColumn::make('comment_count')
                    ->sortable(),
                TextColumn::make('like_count')
                    ->sortable(),
                TextColumn::make('share_count')
                    ->sortable(),
                ViewColumn::make('engagement_rate')
                    ->view('filament.tables.columns.engagement-rate'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('blog_post')
                    ->relationship('post', 'title'),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    //
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
            'index' => Pages\ListBlogAnalytics::route('/'),
        ];
    }
}
