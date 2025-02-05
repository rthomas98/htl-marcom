<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class PopularBlogPosts extends BaseWidget
{
    protected static ?int $sort = 4;
    protected int $pageSize = 5;
    protected static ?string $heading = 'Most Viewed Posts';

    public function table(Table $table): Table
    {
        return $table
            ->query(
                BlogPost::query()
                    ->where('status', 'published')
                    ->orderByDesc('view_count')
                    ->limit(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable()
                    ->limit(50),
                Tables\Columns\TextColumn::make('view_count')
                    ->label('Views')
                    ->sortable()
                    ->alignRight(),
                Tables\Columns\TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->actions([
                Tables\Actions\ViewAction::make(),
            ]);
    }
}
