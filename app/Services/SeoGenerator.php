<?php

namespace App\Services;

use App\Models\BlogPost;

class SeoGenerator
{
    public function generateSeoTitle($model): string
    {
        return $model->title;
    }

    public function generateSeoDescription($model): string
    {
        return $model->excerpt ?? substr(strip_tags($model->content), 0, 160);
    }

    public function generateSeoKeywords($model): array
    {
        $keywords = [];
        
        // Add title words
        $keywords = array_merge($keywords, explode(' ', strtolower($model->title)));
        
        // Add category if it exists
        if ($model->category) {
            $keywords[] = strtolower($model->category->name);
        }
        
        // Add meta_data tags if they exist
        if (isset($model->meta_data['tags'])) {
            $keywords = array_merge($keywords, $model->meta_data['tags']);
        }
        
        // Clean up keywords
        $keywords = array_unique(array_filter($keywords, function($keyword) {
            return strlen($keyword) > 2;
        }));
        
        return array_slice($keywords, 0, 10);
    }
}
