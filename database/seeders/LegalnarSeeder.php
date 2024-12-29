<?php

namespace Database\Seeders;

use App\Models\Legalnar;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class LegalnarSeeder extends Seeder
{
    public function run(): void
    {
        $faker = Faker::create();

        $topics = [
            'Corporate Law',
            'Criminal Law',
            'Family Law',
            'Intellectual Property',
            'Real Estate',
            'Tax Law',
            'Employment Law',
            'Immigration Law',
            'Environmental Law',
            'Constitutional Law'
        ];

        // Create live sessions
        foreach (range(1, 10) as $index) {
            $startDate = now()->addDays(rand(1, 30))->setHour(rand(9, 17))->setMinute(0)->setSecond(0);
            
            Legalnar::create([
                'title' => $faker->sentence(4),
                'slug' => $faker->slug(),
                'description' => $faker->paragraphs(3, true),
                'learning_outcomes' => $faker->paragraphs(2, true),
                'level' => $faker->randomElement(['beginner', 'intermediate', 'advanced']),
                'type' => 'live',
                'duration_minutes' => $faker->randomElement([30, 45, 60, 90, 120]),
                'price' => $faker->randomElement([0, 49.99, 99.99, 149.99]),
                'max_attendees' => $faker->randomElement([null, 20, 30, 50, 100]),
                'status' => 'scheduled',
                'is_featured' => $faker->boolean(20),
                'scheduled_start' => $startDate,
                'scheduled_end' => $startDate->copy()->addMinutes(60),
                'timezone' => 'UTC',
                'is_published' => true,
                'published_at' => now(),
                'instructor_id' => $faker->randomElement([1, 2, 3]),
                'meta_data' => [
                    'topics' => $faker->randomElements($topics, rand(1, 3)),
                    'target_audience' => $faker->randomElement(['Students', 'Professionals', 'Both']),
                    'certification' => $faker->boolean(70),
                ],
            ]);
        }

        // Create on-demand sessions
        foreach (range(1, 5) as $index) {
            Legalnar::create([
                'title' => $faker->sentence(4),
                'slug' => $faker->slug(),
                'description' => $faker->paragraphs(3, true),
                'learning_outcomes' => $faker->paragraphs(2, true),
                'level' => $faker->randomElement(['beginner', 'intermediate', 'advanced']),
                'type' => 'on-demand',
                'duration_minutes' => $faker->randomElement([30, 45, 60, 90, 120]),
                'price' => $faker->randomElement([0, 29.99, 49.99, 99.99]),
                'status' => 'completed',
                'is_featured' => $faker->boolean(20),
                'is_published' => true,
                'published_at' => now()->subDays(rand(1, 30)),
                'instructor_id' => $faker->randomElement([1, 2, 3]),
                'meta_data' => [
                    'topics' => $faker->randomElements($topics, rand(1, 3)),
                    'target_audience' => $faker->randomElement(['Students', 'Professionals', 'Both']),
                    'certification' => $faker->boolean(70),
                ],
            ]);
        }
    }
} 