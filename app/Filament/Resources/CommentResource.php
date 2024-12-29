<?php

namespace App\Filament\Resources;

use App\Filament\Resources\CommentResource\Pages;
use App\Models\Comment;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\RichEditor;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Filters\SelectFilter;

class CommentResource extends Resource
{
    protected static ?string $model = Comment::class;

    protected static ?string $navigationIcon = 'heroicon-o-chat-bubble-left-right';

    protected static ?string $navigationGroup = 'Blog';

    protected static ?int $navigationSort = 4;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Comment Content')
                            ->schema([
                                Select::make('blog_post_id')
                                    ->relationship('post', 'title')
                                    ->required()
                                    ->searchable(),
                                RichEditor::make('content')
                                    ->required()
                                    ->columnSpanFull(),
                            ]),

                        Forms\Components\Section::make('Author Information')
                            ->schema([
                                Select::make('user_id')
                                    ->relationship('user', 'name')
                                    ->searchable(),
                                TextInput::make('author_name')
                                    ->required()
                                    ->hidden(fn (Forms\Get $get): bool => filled($get('user_id'))),
                                TextInput::make('author_email')
                                    ->email()
                                    ->required()
                                    ->hidden(fn (Forms\Get $get): bool => filled($get('user_id'))),
                                TextInput::make('author_website')
                                    ->url(),
                            ]),
                    ])
                    ->columnSpan(['lg' => 2]),

                Forms\Components\Group::make()
                    ->schema([
                        Forms\Components\Section::make('Status & Relations')
                            ->schema([
                                Select::make('status')
                                    ->options([
                                        'pending' => 'Pending',
                                        'approved' => 'Approved',
                                        'spam' => 'Spam',
                                        'trash' => 'Trash',
                                    ])
                                    ->required(),
                                Select::make('parent_id')
                                    ->label('Reply to')
                                    ->relationship('parent', 'content')
                                    ->searchable()
                                    ->placeholder('Select parent comment'),
                            ]),

                        Forms\Components\Section::make('Metadata')
                            ->schema([
                                TextInput::make('ip_address')
                                    ->label('IP Address')
                                    ->disabled(),
                                TextInput::make('user_agent')
                                    ->label('User Agent')
                                    ->disabled(),
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
                TextColumn::make('post.title')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('author_name')
                    ->getStateUsing(fn (Comment $record): string => 
                        $record->user?->name ?? $record->author_name
                    )
                    ->searchable(),
                TextColumn::make('content')
                    ->limit(50)
                    ->searchable(),
                BadgeColumn::make('status')
                    ->colors([
                        'warning' => 'pending',
                        'success' => 'approved',
                        'danger' => 'spam',
                        'gray' => 'trash',
                    ]),
                TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable(),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->options([
                        'pending' => 'Pending',
                        'approved' => 'Approved',
                        'spam' => 'Spam',
                        'trash' => 'Trash',
                    ]),
                SelectFilter::make('blog_post')
                    ->relationship('post', 'title'),
                SelectFilter::make('user')
                    ->relationship('user', 'name'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\Action::make('approve')
                    ->icon('heroicon-o-check')
                    ->color('success')
                    ->action(fn (Comment $record) => $record->update(['status' => 'approved']))
                    ->visible(fn (Comment $record) => $record->status !== 'approved'),
                Tables\Actions\Action::make('spam')
                    ->icon('heroicon-o-exclamation-triangle')
                    ->color('danger')
                    ->action(fn (Comment $record) => $record->update(['status' => 'spam']))
                    ->visible(fn (Comment $record) => $record->status !== 'spam'),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\BulkAction::make('approve')
                        ->icon('heroicon-o-check')
                        ->action(fn ($records) => $records->each->update(['status' => 'approved'])),
                    Tables\Actions\BulkAction::make('mark_as_spam')
                        ->icon('heroicon-o-exclamation-triangle')
                        ->action(fn ($records) => $records->each->update(['status' => 'spam'])),
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
            'index' => Pages\ListComments::route('/'),
            'create' => Pages\CreateComment::route('/create'),
            'edit' => Pages\EditComment::route('/{record}/edit'),
        ];
    }
}
