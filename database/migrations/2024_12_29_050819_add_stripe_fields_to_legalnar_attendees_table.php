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
        Schema::table('legalnar_attendees', function (Blueprint $table) {
            $table->string('stripe_payment_intent_id')->nullable()->after('payment_status');
            $table->string('stripe_payment_method_id')->nullable()->after('stripe_payment_intent_id');
            $table->timestamp('payment_completed_at')->nullable()->after('stripe_payment_method_id');
            $table->string('stripe_refund_id')->nullable()->after('payment_completed_at');
            $table->timestamp('refunded_at')->nullable()->after('stripe_refund_id');
            $table->text('payment_notes')->nullable()->after('refunded_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('legalnar_attendees', function (Blueprint $table) {
            $table->dropColumn([
                'stripe_payment_intent_id',
                'stripe_payment_method_id',
                'payment_completed_at',
                'stripe_refund_id',
                'refunded_at',
                'payment_notes',
            ]);
        });
    }
};
