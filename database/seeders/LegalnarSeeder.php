<?php

namespace Database\Seeders;

use App\Models\Legalnar;
use App\Models\LegalnarFeedback;
use App\Models\LegalnarQuestion;
use App\Models\LegalnarSeries;
use App\Models\User;
use Illuminate\Database\Seeder;

class LegalnarSeeder extends Seeder
{
    public function run(): void
    {
        // Get all series
        $series = LegalnarSeries::all();
        
        // Create some instructors if none exist
        if (User::where('role', 'instructor')->count() === 0) {
            $instructors = User::factory()->count(3)->create([
                'role' => 'instructor'
            ]);
        } else {
            $instructors = User::where('role', 'instructor')->get();
        }

        // Create some attendees
        $attendees = User::factory()->count(20)->create();

        // Create live Legalnars for each series
        foreach ($series as $series) {
            $legalnars = Legalnar::factory()
                ->count(rand(3, 6))
                ->state(fn (array $attributes) => [
                    'series_id' => $series->id,
                    'instructor_id' => $series->instructor_id,
                    'type' => 'live',
                ])
                ->create();

            // Add questions and feedback for each Legalnar
            foreach ($legalnars as $legalnar) {
                // Create questions
                LegalnarQuestion::factory()
                    ->count(rand(2, 8))
                    ->state(fn (array $attributes) => [
                        'legalnar_id' => $legalnar->id,
                        'user_id' => $attendees->random()->id,
                    ])
                    ->create();

                // Create feedback
                LegalnarFeedback::factory()
                    ->count(rand(5, 15))
                    ->state(fn (array $attributes) => [
                        'legalnar_id' => $legalnar->id,
                        'user_id' => $attendees->random()->id,
                    ])
                    ->create();
            }
        }

        // Create some standalone on-demand Legalnars
        $onDemandLegalnars = Legalnar::factory()
            ->count(5)
            ->state(fn (array $attributes) => [
                'instructor_id' => $instructors->random()->id,
                'type' => 'on-demand',
                'is_published' => true,
                'published_at' => now()->subDays(rand(1, 30)),
            ])
            ->create();

        // Add questions and feedback for on-demand Legalnars
        foreach ($onDemandLegalnars as $legalnar) {
            // Create questions
            LegalnarQuestion::factory()
                ->count(rand(5, 15))
                ->state(fn (array $attributes) => [
                    'legalnar_id' => $legalnar->id,
                    'user_id' => $attendees->random()->id,
                ])
                ->create();

            // Create feedback
            LegalnarFeedback::factory()
                ->count(rand(10, 30))
                ->state(fn (array $attributes) => [
                    'legalnar_id' => $legalnar->id,
                    'user_id' => $attendees->random()->id,
                ])
                ->create();
        }

        // Create some upcoming live Legalnars
        Legalnar::factory()
            ->count(3)
            ->state(fn (array $attributes) => [
                'instructor_id' => $instructors->random()->id,
                'type' => 'live',
                'scheduled_start' => now()->addDays(rand(1, 30)),
                'status' => 'scheduled',
            ])
            ->create();
    }
} 