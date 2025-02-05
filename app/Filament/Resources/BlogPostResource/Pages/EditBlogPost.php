<?php

namespace App\Filament\Resources\BlogPostResource\Pages;

use App\Filament\Resources\BlogPostResource;
use App\Models\BlogPost;
use Filament\Actions;
use Filament\Actions\Action;
use Filament\Resources\Pages\EditRecord;
use Filament\Notifications\Notification;
use Illuminate\Support\Str;

class EditBlogPost extends EditRecord
{
    protected static string $resource = BlogPostResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Action::make('generateSEO')
                ->label('Generate SEO')
                ->icon('heroicon-o-sparkles')
                ->color('success')
                ->action(function () {
                    $post = $this->record;
                    
                    // Generate SEO title (max 60 chars)
                    $seoTitle = Str::limit($post->title, 60);
                    
                    // Generate SEO description (max 160 chars)
                    $description = strip_tags($post->content);
                    $seoDescription = Str::limit($description, 160);
                    
                    // Generate keywords from title and content
                    $keywords = collect(explode(' ', $post->title . ' ' . $description))
                        ->map(fn ($word) => strtolower(preg_replace('/[^a-zA-Z0-9]/', '', $word)))
                        ->filter(fn ($word) => strlen($word) > 3)
                        ->unique()
                        ->take(10)
                        ->join(', ');

                    // Update or create SEO metadata
                    $seoMetadata = $post->seoMetadata()->updateOrCreate(
                        [],
                        [
                            'title' => $seoTitle,
                            'description' => $seoDescription,
                            'keywords' => $keywords,
                            'og_title' => $seoTitle,
                            'og_description' => $seoDescription,
                            'og_type' => 'article',
                            'og_url' => url("/blog/{$post->slug}"),
                            'twitter_card' => 'summary_large_image',
                            'twitter_title' => $seoTitle,
                            'twitter_description' => $seoDescription,
                            'robots' => 'index, follow',
                            'canonical_url' => url("/blog/{$post->slug}"),
                        ]
                    );

                    $this->record->refresh();

                    Notification::make()
                        ->title('SEO fields generated successfully')
                        ->success()
                        ->send();

                    // Refresh the form data to show the new values
                    $this->fillForm();
                }),
            Actions\DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        // Ensure SEO data is loaded
        if (isset($this->record->seoMetadata)) {
            $data['seoMetadata'] = $this->record->seoMetadata->toArray();
        }
        return $data;
    }
}
