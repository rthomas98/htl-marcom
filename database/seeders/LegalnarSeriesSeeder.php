<?php

namespace Database\Seeders;

use App\Models\LegalnarSeries;
use App\Models\User;
use Illuminate\Database\Seeder;

class LegalnarSeriesSeeder extends Seeder
{
    public function run(): void
    {
        // Create some instructors
        $instructors = User::factory()->count(3)->create([
            'role' => 'instructor'
        ]);

        // Create featured series
        LegalnarSeries::factory()
            ->count(2)
            ->state(fn (array $attributes) => [
                'is_featured' => true,
                'instructor_id' => $instructors->random()->id,
            ])
            ->create();

        // Create regular series
        LegalnarSeries::factory()
            ->count(5)
            ->state(fn (array $attributes) => [
                'instructor_id' => $instructors->random()->id,
            ])
            ->create();

        // Create an upcoming series
        LegalnarSeries::factory()
            ->count(2)
            ->state(fn (array $attributes) => [
                'start_date' => now()->addDays(30),
                'end_date' => now()->addDays(120),
                'instructor_id' => $instructors->random()->id,
            ])
            ->create();

        // Create an inactive series
        LegalnarSeries::factory()
            ->count(1)
            ->state(fn (array $attributes) => [
                'is_active' => false,
                'instructor_id' => $instructors->random()->id,
            ])
            ->create();
    }
} 