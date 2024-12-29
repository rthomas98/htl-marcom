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
        Schema::create('legalnars', function (Blueprint $table) {
            $table->id();
            $table->foreignId('series_id')->nullable()->constrained('legalnar_series')->nullOnDelete();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->text('learning_outcomes')->nullable();
            $table->string('featured_image')->nullable();
            $table->string('level')->default('beginner'); // beginner, intermediate, advanced
            $table->string('type')->default('live'); // live, on-demand
            $table->integer('duration_minutes')->default(60);
            $table->decimal('price', 10, 2)->nullable();
            $table->integer('max_attendees')->nullable();
            $table->string('status')->default('draft'); // draft, scheduled, live, completed, cancelled
            $table->boolean('is_featured')->default(false);
            $table->timestamp('scheduled_start')->nullable();
            $table->timestamp('scheduled_end')->nullable();
            $table->string('timezone')->default('UTC');
            $table->string('meeting_url')->nullable();
            $table->string('recording_url')->nullable();
            $table->jsonb('materials')->nullable(); // For downloadable materials
            $table->jsonb('prerequisites')->nullable();
            $table->jsonb('meta_data')->nullable();
            $table->jsonb('video_details')->nullable(); // For on-demand video details like chapters, transcripts
            $table->boolean('is_published')->default(false); // For on-demand content
            $table->timestamp('published_at')->nullable(); // For on-demand content
            $table->integer('watch_minutes')->default(0); // Total watch minutes for analytics
            $table->integer('completion_threshold')->default(85); // Percentage required to mark as completed
            $table->foreignId('instructor_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });

        // Create pivot table for attendees
        Schema::create('legalnar_attendees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('legalnar_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('status')->default('registered'); // registered, attended, no-show, cancelled
            $table->timestamp('registered_at')->useCurrent();
            $table->timestamp('attended_at')->nullable();
            $table->decimal('amount_paid', 10, 2)->nullable();
            $table->string('payment_status')->nullable();
            $table->jsonb('meta_data')->nullable();
            $table->timestamps();
            
            $table->unique(['legalnar_id', 'user_id']);
        });

        // Create table for questions/interactions during legalnars
        Schema::create('legalnar_questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('legalnar_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->text('question');
            $table->text('answer')->nullable();
            $table->boolean('is_answered')->default(false);
            $table->boolean('is_featured')->default(false);
            $table->timestamp('answered_at')->nullable();
            $table->foreignId('answered_by')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });

        // Create table for feedback/ratings
        Schema::create('legalnar_feedback', function (Blueprint $table) {
            $table->id();
            $table->foreignId('legalnar_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->integer('rating')->nullable(); // 1-5 stars
            $table->text('feedback')->nullable();
            $table->jsonb('ratings_breakdown')->nullable(); // Detailed ratings for different aspects
            $table->timestamps();
            $table->softDeletes();
            
            $table->unique(['legalnar_id', 'user_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('legalnar_feedback');
        Schema::dropIfExists('legalnar_questions');
        Schema::dropIfExists('legalnar_attendees');
        Schema::dropIfExists('legalnars');
    }
};
