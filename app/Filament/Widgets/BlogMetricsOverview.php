<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use App\Models\Category;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;
use Illuminate\Support\Facades\DB;

class BlogMetricsOverview extends BaseWidget
{
    protected static ?int $sort = 6;
    protected static bool $isLazy = false;

    protected function getStats(): array
    {
        $totalViews = BlogPost::sum('view_count');
        $avgViewsPerPost = BlogPost::where('status', 'published')
            ->where('view_count', '>', 0)
            ->avg('view_count');
        
        $topCategory = Category::query()
            ->select('categories.name', DB::raw('COUNT(*) as post_count'))
            ->join('blog_posts', 'categories.id', '=', 'blog_posts.category_id')
            ->where('blog_posts.status', 'published')
            ->groupBy('categories.id', 'categories.name')
            ->orderByDesc('post_count')
            ->first();

        return [
            Stat::make('Total Views', number_format($totalViews))
                ->description('Across all blog posts')
                ->descriptionIcon('heroicon-o-eye')
                ->color('success'),
            
            Stat::make('Avg. Views per Post', number_format($avgViewsPerPost, 1))
                ->description('For published posts')
                ->descriptionIcon('heroicon-o-chart-bar')
                ->color('info'),
            
            Stat::make('Top Category', $topCategory?->name)
                ->description($topCategory ? "{$topCategory->post_count} posts" : 'No posts yet')
                ->descriptionIcon('heroicon-o-bookmark')
                ->color('warning'),
        ];
    }
}
