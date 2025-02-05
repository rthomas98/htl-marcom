<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogPostResource\Pages;
use App\Models\BlogPost;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;
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

class BlogPostResource extends Resource
{
    protected static ?string $model = BlogPost::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = -2;

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
                                        $slug = Str::slug($state);
                                        if (strlen($slug) > 60) {
                                            $slug = substr($slug, 0, 60);
                                            $lastHyphen = strrpos($slug, '-');
                                            if ($lastHyphen !== false) {
                                                $slug = substr($slug, 0, $lastHyphen);
                                            }
                                        }
                                        $set('slug', $slug);
                                    }),
                                TextInput::make('slug')
                                    ->required()
                                    ->maxLength(60)
                                    ->unique(ignorable: fn ($record) => $record)
                                    ->prefix('insight/')
                                    ->helperText('This will be the URL of your insight post. Max 60 characters.')
                                    ->dehydrated()
                                    ->afterStateUpdated(function (string $operation, $state, Forms\Set $set) {
                                        if ($operation === 'create') {
                                            $slug = Str::slug($state);
                                            if (strlen($slug) > 60) {
                                                $slug = substr($slug, 0, 60);
                                                $lastHyphen = strrpos($slug, '-');
                                                if ($lastHyphen !== false) {
                                                    $slug = substr($slug, 0, $lastHyphen);
                                                }
                                            }
                                            $set('slug', $slug);
                                        }
                                    }),
                                FileUpload::make('featured_image')
                                    ->disk('public')
                                    ->directory('blog-images')
                                    ->image()
                                    ->maxSize(102400) // 100MB in KB
                                    ->preserveFilenames()
                                    ->storeFileNamesIn('original_filename')
                                    ->imageEditor()
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
                                TextInput::make('meta_data.title')
                                    ->label('Meta Title'),
                                TextInput::make('meta_data.description')
                                    ->label('Meta Description'),
                                TextInput::make('meta_data.keywords')
                                    ->label('Meta Keywords'),
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
                                        'scheduled' => 'Scheduled',
                                        'published' => 'Published',
                                    ])
                                    ->required(),
                                DateTimePicker::make('published_at')
                                    ->label('Publish Date')
                                    ->required()
                                    ->visible(fn (Forms\Get $get) => 
                                        in_array($get('status'), ['scheduled', 'published'])
                                    ),
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
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
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
            'index' => Pages\ListBlogPosts::route('/'),
            'create' => Pages\CreateBlogPost::route('/create'),
            'edit' => Pages\EditBlogPost::route('/{record}/edit'),
        ];
    }
}
