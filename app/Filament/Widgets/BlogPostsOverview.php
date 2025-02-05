<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class BlogPostsOverview extends BaseWidget
{
    protected static ?int $sort = 1;
    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        return [
            Stat::make('Total Posts', BlogPost::count())
                ->description('Total number of blog posts')
                ->descriptionIcon('heroicon-o-document-text')
                ->color('primary'),
            
            Stat::make('Published Posts', BlogPost::where('status', 'published')->count())
                ->description('Published blog posts')
                ->descriptionIcon('heroicon-o-check-circle')
                ->color('success'),
            
            Stat::make('Draft Posts', BlogPost::where('status', 'draft')->count())
                ->description('Posts in draft')
                ->descriptionIcon('heroicon-o-pencil')
                ->color('gray'),
        ];
    }
}
