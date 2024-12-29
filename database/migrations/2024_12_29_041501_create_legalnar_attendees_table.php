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
        Schema::create('legalnar_attendees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('legalnar_id')->constrained()->cascadeOnDelete();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('name');
            $table->string('email');
            $table->string('company')->nullable();
            $table->text('special_requirements')->nullable();
            $table->enum('status', ['registered', 'attended', 'no-show', 'cancelled'])->default('registered');
            $table->decimal('amount_paid', 10, 2)->nullable();
            $table->enum('payment_status', ['pending', 'completed', 'failed', 'refunded'])->default('pending');
            $table->timestamp('registered_at');
            $table->timestamp('attended_at')->nullable();
            $table->jsonb('meta_data')->nullable();
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
        Schema::dropIfExists('legalnar_attendees');
    }
};
