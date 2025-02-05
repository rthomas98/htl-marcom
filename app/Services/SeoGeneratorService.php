<?php

namespace App\Services;

use App\Models\BlogPost;
use Illuminate\Support\Str;

class SeoGeneratorService
{
    const TITLE_MAX_LENGTH = 60;
    const DESCRIPTION_MAX_LENGTH = 155; // Set to 155 to ensure we stay under 160 with ellipsis
    const MAX_KEYWORDS = 10;

    public function generateSeoTitle(BlogPost $blogPost): string
    {
        return Str::limit(strip_tags($blogPost->title), self::TITLE_MAX_LENGTH, '');
    }

    public function generateSeoDescription(BlogPost $blogPost): string
    {
        // Clean the content first
        $content = strip_tags($blogPost->content);
        $content = preg_replace('/\s+/', ' ', $content); // Normalize whitespace
        $content = trim($content); // Remove leading/trailing whitespace
        
        // Get the first sentence or first few words that fit within our limit
        $firstSentence = Str::before($content . '.', '.');
        return Str::limit($firstSentence, self::DESCRIPTION_MAX_LENGTH, '...');
    }

    public function generateSeoKeywords(BlogPost $blogPost): array
    {
        // Extract potential keywords from title and content
        $text = strip_tags($blogPost->title . ' ' . $blogPost->content);
        
        // Remove common words and get unique words
        $commonWords = ['the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on', 'with', 'he', 'as', 'you', 'do', 'at'];
        $words = array_filter(
            str_word_count(strtolower($text), 1),
            fn($word) => !in_array($word, $commonWords) && strlen($word) > 3
        );
        
        // Get frequency of words
        $wordFrequency = array_count_values($words);
        arsort($wordFrequency);
        
        // Return top keywords
        return array_slice(array_keys($wordFrequency), 0, self::MAX_KEYWORDS);
    }

    public function generateAllSeoMetadata(BlogPost $blogPost): array
    {
        $title = $this->generateSeoTitle($blogPost);
        $description = $this->generateSeoDescription($blogPost);
        $keywords = $this->generateSeoKeywords($blogPost);

        return [
            'title' => $title,
            'description' => $description,
            'keywords' => implode(', ', $keywords),
            'og_title' => $title,
            'og_description' => $description,
            'og_type' => 'article',
            'twitter_title' => $title,
            'twitter_description' => $description,
            'twitter_card' => 'summary_large_image',
        ];
    }
}
