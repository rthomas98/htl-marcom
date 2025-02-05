<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;

class CategoryDistribution extends ChartWidget
{
    protected static ?string $heading = 'Posts by Category';
    protected static ?int $sort = 5;

    protected function getData(): array
    {
        $data = BlogPost::query()
            ->select('categories.name', DB::raw('COUNT(*) as count'))
            ->join('categories', 'blog_posts.category_id', '=', 'categories.id')
            ->where('blog_posts.status', 'published')
            ->groupBy('categories.id', 'categories.name')
            ->orderByDesc('count')
            ->get();

        return [
            'datasets' => [
                [
                    'label' => 'Posts',
                    'data' => $data->pluck('count')->toArray(),
                    'backgroundColor' => ['#141414', '#FFE8E5', '#F0F0F0'],
                ],
            ],
            'labels' => $data->pluck('name')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
