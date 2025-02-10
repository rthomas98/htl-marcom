<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogPostResource\Pages;
use App\Models\BlogPost;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Components\DateTimePicker;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\IconColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Filters\TernaryFilter;
use App\Filament\Resources\BlogPostResource\RelationManagers\AuthorRelationManager;
use App\Filament\Resources\BlogPostResource\RelationManagers\CategoryRelationManager;
use App\Filament\Resources\BlogPostResource\RelationManagers\TagsRelationManager;
use App\Filament\Resources\BlogPostResource\RelationManagers\SeoMetadataRelationManager;

class BlogPostResource extends Resource
{
    protected static ?string $model = BlogPost::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = -2;

    public static function getRelations(): array
    {
        return [
            AuthorRelationManager::class,
            CategoryRelationManager::class,
            TagsRelationManager::class,
            SeoMetadataRelationManager::class,
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogPosts::route('/'),
            'create' => Pages\CreateBlogPost::route('/create'),
            'edit' => Pages\EditBlogPost::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->with(['seoMetadata', 'author']);
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make()
                            ->schema([
                                TextInput::make('title')
                                    ->required()
                                    ->live(onBlur: true)
                                    ->maxLength(255)
                                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                        if ($operation === 'create') {
                                            // Generate slug and limit to 160 characters
                                            $slug = Str::slug($state);
                                            $set('slug', Str::limit($slug, 160, ''));
                                        }
                                    }),
                                TextInput::make('slug')
                                    ->required()
                                    ->maxLength(160)
                                    ->unique(ignorable: fn ($record) => $record)
                                    ->prefix('insight/')
                                    ->helperText('This will be the URL of your insight post. Max 160 characters.')
                                    ->dehydrated()
                                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                        if ($operation === 'create') {
                                            // Ensure slug is limited to 160 characters
                                            $set('slug', Str::limit(Str::slug($state), 160, ''));
                                        }
                                    }),
                                FileUpload::make('featured_image')
                                    ->disk('do_spaces')
                                    ->directory('blog-images')
                                    ->image()
                                    ->imageEditor()
                                    ->preserveFilenames()
                                    ->visibility('public')
                                    ->storeFiles()
                                    ->openable()
                                    ->downloadable()
                                    ->maxSize(5120) // 5MB
                                    ->imagePreviewHeight('250')
                                    ->panelAspectRatio('16:9')
                                    ->previewable(true)
                                    ->loadingIndicatorPosition('left')
                                    ->removeUploadedFileButtonPosition('right')
                                    ->columnSpanFull(),
                                RichEditor::make('content')
                                    ->required()
                                    ->columnSpanFull(),
                                TextInput::make('excerpt')
                                    ->columnSpanFull(),
                            ])
                            ->columns(2),

                        Forms\Components\Section::make('SEO')
                            ->schema([
                                Forms\Components\Placeholder::make('seo_info')
                                    ->content('SEO fields will be automatically populated when you save the post. You can also use the "Generate SEO" button to update them.'),
                                Forms\Components\Actions::make([
                                    Forms\Components\Actions\Action::make('generateSeo')
                                        ->label('Generate SEO')
                                        ->icon('heroicon-m-arrow-path')
                                        ->action(function ($livewire, $state, Forms\Set $set) {
                                            $blogPost = $livewire->record ?? new \App\Models\BlogPost([
                                                'title' => $state['title'] ?? '',
                                                'content' => $state['content'] ?? '',
                                            ]);
                                            
                                            $seoGenerator = new \App\Services\SeoGeneratorService();
                                            $seoTitle = $seoGenerator->generateSeoTitle($blogPost);
                                            $seoDescription = $seoGenerator->generateSeoDescription($blogPost);
                                            $seoKeywords = implode(', ', $seoGenerator->generateSeoKeywords($blogPost));
                                            
                                            // Set all SEO fields
                                            $set('seoMetadata.title', $seoTitle);
                                            $set('seoMetadata.description', $seoDescription);
                                            $set('seoMetadata.keywords', $seoKeywords);
                                            
                                            // Set Open Graph fields
                                            $set('seoMetadata.og_title', $seoTitle);
                                            $set('seoMetadata.og_description', $seoDescription);
                                            
                                            // Set Twitter Card fields
                                            $set('seoMetadata.twitter_title', $seoTitle);
                                            $set('seoMetadata.twitter_description', $seoDescription);
                                        })
                                        ->visible(fn ($state) => !empty($state['title']) || !empty($state['content'])),
                                ]),
                                Forms\Components\TextInput::make('seoMetadata.title')
                                    ->label('Meta Title')
                                    ->maxLength(60)
                                    ->helperText('Maximum 60 characters')
                                    ->required(),
                                Forms\Components\Textarea::make('seoMetadata.description')
                                    ->label('Meta Description')
                                    ->maxLength(160)
                                    ->helperText('Maximum 160 characters')
                                    ->required(),
                                Forms\Components\TextInput::make('seoMetadata.keywords')
                                    ->label('Meta Keywords')
                                    ->helperText('Comma-separated keywords')
                                    ->required(),
                                Forms\Components\TextInput::make('seoMetadata.og_title')
                                    ->label('OG Title')
                                    ->maxLength(60)
                                    ->helperText('Maximum 60 characters')
                                    ->required(),
                                Forms\Components\Textarea::make('seoMetadata.og_description')
                                    ->label('OG Description')
                                    ->maxLength(160)
                                    ->helperText('Maximum 160 characters')
                                    ->required(),
                                Forms\Components\Hidden::make('seoMetadata.og_type')
                                    ->default('article'),
                                Forms\Components\TextInput::make('seoMetadata.twitter_title')
                                    ->label('Twitter Title')
                                    ->maxLength(60)
                                    ->helperText('Maximum 60 characters')
                                    ->required(),
                                Forms\Components\Textarea::make('seoMetadata.twitter_description')
                                    ->label('Twitter Description')
                                    ->maxLength(160)
                                    ->helperText('Maximum 160 characters')
                                    ->required(),
                                Forms\Components\Hidden::make('seoMetadata.twitter_card')
                                    ->default('summary_large_image'),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Status')
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'draft' => 'Draft',
                                        'published' => 'Published',
                                        'scheduled' => 'Scheduled',
                                    ])
                                    ->default('draft')
                                    ->required(),
                                DateTimePicker::make('published_at')
                                    ->visible(fn (Forms\Get $get): bool => $get('status') === 'published')
                                    ->required(fn (Forms\Get $get): bool => $get('status') === 'published')
                                    ->native(false)
                                    ->displayFormat('M d, Y H:i A')
                                    ->default(now()),
                                Toggle::make('is_featured')
                                    ->label('Featured Post'),
                            ]),

                        Forms\Components\Section::make('Associations')
                            ->schema([
                                Select::make('author_id')
                                    ->relationship('author', 'name')
                                    ->searchable()
                                    ->required(),
                                Select::make('category_id')
                                    ->relationship('category', 'name')
                                    ->searchable()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->required(),
                                        TextInput::make('slug')
                                            ->required(),
                                    ])
                                    ->required(),
                                Select::make('tags')
                                    ->relationship('tags', 'name')
                                    ->multiple()
                                    ->searchable()
                                    ->createOptionForm([
                                        TextInput::make('name')
                                            ->required(),
                                        TextInput::make('slug')
                                            ->required(),
                                    ]),
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
                ImageColumn::make('featured_image')
                    ->circular(),
                TextColumn::make('title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('author.name')
                    ->sortable(),
                TextColumn::make('category.name')
                    ->sortable(),
                TextColumn::make('tags.name')
                    ->badge()
                    ->separator(',')
                    ->limitList(2),
                TextColumn::make('status')
                    ->badge()
                    ->color(fn (BlogPost $record): string => $record->status_color),
                IconColumn::make('is_featured')
                    ->boolean(),
                TextColumn::make('published_at')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('view_count')
                    ->label('Views')
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'scheduled' => 'Scheduled',
                        'published' => 'Published',
                    ]),
                SelectFilter::make('author')
                    ->relationship('author', 'name'),
                SelectFilter::make('category')
                    ->relationship('category', 'name'),
                SelectFilter::make('tags')
                    ->relationship('tags', 'name')
                    ->multiple(),
                TernaryFilter::make('is_featured')
                    ->label('Featured'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }
}
