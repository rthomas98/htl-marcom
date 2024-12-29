<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('legalnar_watch_progress', function (Blueprint $table) {
            $table->id();
            $table->foreignId('legalnar_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->integer('minutes_watched')->default(0);
            $table->integer('percentage')->default(0);
            $table->boolean('completed')->default(false);
            $table->timestamp('last_watched_at');
            $table->jsonb('chapter_progress')->nullable();
            $table->timestamps();

            $table->unique(['legalnar_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('legalnar_watch_progress');
    }
};
