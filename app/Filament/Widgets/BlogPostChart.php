<?php

namespace App\Filament\Widgets;

use App\Models\BlogPost;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class BlogPostChart extends ChartWidget
{
    protected static ?string $heading = 'Blog Posts Over Time';
    protected static ?int $sort = 3;

    protected function getData(): array
    {
        $data = BlogPost::query()
            ->where('created_at', '>=', now()->subMonths(6))
            ->select(DB::raw("TO_CHAR(created_at, 'YYYY-MM') as month"), DB::raw('COUNT(*) as count'))
            ->groupBy(DB::raw("TO_CHAR(created_at, 'YYYY-MM')"))
            ->orderBy('month')
            ->pluck('count', 'month')
            ->toArray();

        return [
            'datasets' => [
                [
                    'label' => 'Blog Posts',
                    'data' => array_values($data),
                    'backgroundColor' => '#141414',
                    'borderColor' => '#141414',
                ],
            ],
            'labels' => array_map(function ($month) {
                return Carbon::createFromFormat('Y-m', $month)->format('M Y');
            }, array_keys($data)),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}
