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
        Schema::table('legalnars', function (Blueprint $table) {
            $table->string('type')->default('live')->after('level');
            $table->jsonb('video_details')->nullable()->after('meta_data');
            $table->boolean('is_published')->default(false)->after('video_details');
            $table->timestamp('published_at')->nullable()->after('is_published');
            $table->integer('watch_minutes')->default(0)->after('published_at');
            $table->integer('completion_threshold')->default(85)->after('watch_minutes');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('legalnars', function (Blueprint $table) {
            $table->dropColumn([
                'type',
                'video_details',
                'is_published',
                'published_at',
                'watch_minutes',
                'completion_threshold'
            ]);
        });
    }
};
