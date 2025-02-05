<?php

namespace App\Filament\Resources\BlogPostResource\RelationManagers;

use Filament\Resources\RelationManagers\RelationManager;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Tables;
use Filament\Tables\Table;

class SeoMetadataRelationManager extends RelationManager
{
    protected static string $relationship = 'seoMetadata';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('SEO Metadata')
                    ->description('Search engine optimization metadata for this blog post')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->label('SEO Title')
                            ->required()
                            ->maxLength(60)
                            ->helperText('Max 60 characters. This will appear in search engine results.'),
                        
                        Forms\Components\Textarea::make('description')
                            ->label('SEO Description')
                            ->required()
                            ->maxLength(155)
                            ->helperText('Max 155 characters. This will appear in search engine results.'),
                        
                        Forms\Components\TextInput::make('keywords')
                            ->label('SEO Keywords')
                            ->helperText('Comma-separated keywords (e.g., trademark law, intellectual property)'),
                    ]),

                Forms\Components\Section::make('Open Graph Metadata')
                    ->description('Metadata for social media sharing')
                    ->schema([
                        Forms\Components\TextInput::make('og_title')
                            ->label('OG Title')
                            ->maxLength(60)
                            ->helperText('Title that appears when shared on social media'),
                        
                        Forms\Components\Textarea::make('og_description')
                            ->label('OG Description')
                            ->maxLength(155)
                            ->helperText('Description that appears when shared on social media'),
                        
                        Forms\Components\Select::make('og_type')
                            ->label('OG Type')
                            ->options([
                                'article' => 'Article',
                                'website' => 'Website',
                                'blog' => 'Blog',
                            ])
                            ->default('article'),
                    ]),

                Forms\Components\Section::make('Twitter Card Metadata')
                    ->description('Metadata for Twitter sharing')
                    ->schema([
                        Forms\Components\TextInput::make('twitter_title')
                            ->label('Twitter Title')
                            ->maxLength(60),
                        
                        Forms\Components\Textarea::make('twitter_description')
                            ->label('Twitter Description')
                            ->maxLength(155),
                        
                        Forms\Components\Select::make('twitter_card')
                            ->label('Twitter Card Type')
                            ->options([
                                'summary' => 'Summary',
                                'summary_large_image' => 'Summary with Large Image',
                            ])
                            ->default('summary_large_image'),
                    ]),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->label('SEO Title')
                    ->limit(30),
                Tables\Columns\TextColumn::make('description')
                    ->label('SEO Description')
                    ->limit(50),
                Tables\Columns\TextColumn::make('og_title')
                    ->label('OG Title')
                    ->limit(30),
                Tables\Columns\TextColumn::make('twitter_title')
                    ->label('Twitter Title')
                    ->limit(30),
            ])
            ->filters([])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\DeleteBulkAction::make(),
            ]);
    }
}
