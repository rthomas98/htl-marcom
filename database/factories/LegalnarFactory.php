<?php

namespace Database\Factories;

use App\Models\Legalnar;
use App\Models\LegalnarSeries;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LegalnarFactory extends Factory
{
    protected $model = Legalnar::class;

    public function definition(): array
    {
        $title = $this->faker->unique()->sentence(4);
        $isLive = $this->faker->boolean(70);
        $startDate = $this->faker->dateTimeBetween('now', '+6 months');
        $endDate = clone $startDate;
        $endDate->modify('+1 hour');

        return [
            'series_id' => LegalnarSeries::factory(),
            'title' => $title,
            'slug' => \Str::slug($title),
            'description' => $this->faker->paragraphs(3, true),
            'learning_outcomes' => $this->faker->paragraphs(2, true),
            'featured_image' => null,
            'level' => $this->faker->randomElement(['beginner', 'intermediate', 'advanced']),
            'type' => $isLive ? 'live' : 'on-demand',
            'duration_minutes' => $this->faker->randomElement([30, 45, 60, 90, 120]),
            'price' => $this->faker->randomElement([null, 29.99, 49.99, 99.99]),
            'max_attendees' => $isLive ? $this->faker->randomElement([null, 50, 100, 200]) : null,
            'status' => $this->faker->randomElement(['draft', 'scheduled', 'live', 'completed']),
            'is_featured' => $this->faker->boolean(20),
            'scheduled_start' => $isLive ? $startDate : null,
            'scheduled_end' => $isLive ? $endDate : null,
            'timezone' => 'UTC',
            'meeting_url' => $isLive ? $this->faker->url() : null,
            'recording_url' => $this->faker->boolean(30) ? $this->faker->url() : null,
            'materials' => [
                [
                    'title' => 'Presentation Slides',
                    'file' => 'slides.pdf',
                    'description' => 'Presentation slides for the session',
                ],
                [
                    'title' => 'Exercise Files',
                    'file' => 'exercises.zip',
                    'description' => 'Practice exercises',
                ],
            ],
            'prerequisites' => [
                [
                    'title' => 'Basic Knowledge',
                    'description' => 'Understanding of fundamental legal concepts',
                ],
                [
                    'title' => 'Software Requirements',
                    'description' => 'Latest version of Zoom installed',
                ],
            ],
            'meta_data' => null,
            'video_details' => $isLive ? null : [
                'chapters' => [
                    ['title' => 'Introduction', 'timestamp' => 0],
                    ['title' => 'Main Concepts', 'timestamp' => 600],
                    ['title' => 'Practical Examples', 'timestamp' => 1800],
                    ['title' => 'Q&A Session', 'timestamp' => 3000],
                ],
                'transcript' => $this->faker->paragraphs(5, true),
            ],
            'is_published' => !$isLive && $this->faker->boolean(70),
            'published_at' => !$isLive ? $this->faker->dateTimeBetween('-1 month', 'now') : null,
            'watch_minutes' => 0,
            'completion_threshold' => 85,
            'instructor_id' => User::factory(),
        ];
    }

    public function live(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'live',
            'scheduled_start' => $this->faker->dateTimeBetween('now', '+6 months'),
            'video_details' => null,
            'is_published' => false,
            'published_at' => null,
        ]);
    }

    public function onDemand(): static
    {
        return $this->state(fn (array $attributes) => [
            'type' => 'on-demand',
            'scheduled_start' => null,
            'scheduled_end' => null,
            'meeting_url' => null,
            'max_attendees' => null,
        ]);
    }

    public function published(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_published' => true,
            'published_at' => $this->faker->dateTimeBetween('-1 month', 'now'),
        ]);
    }

    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    public function withAttendees(int $count = 5): static
    {
        return $this->afterCreating(function (Legalnar $legalnar) use ($count) {
            $users = User::factory()->count($count)->create();
            
            foreach ($users as $user) {
                $legalnar->registerAttendee($user, [
                    'amount_paid' => $legalnar->price,
                    'payment_status' => 'completed',
                ]);
            }
        });
    }
}
