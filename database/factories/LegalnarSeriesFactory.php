<?php

namespace Database\Factories;

use App\Models\LegalnarSeries;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LegalnarSeriesFactory extends Factory
{
    protected $model = LegalnarSeries::class;

    public function definition(): array
    {
        $title = $this->faker->unique()->sentence(4);
        $startDate = $this->faker->dateTimeBetween('now', '+6 months');
        $endDate = clone $startDate;
        $endDate->modify('+3 months');

        return [
            'title' => $title,
            'slug' => \Str::slug($title),
            'description' => $this->faker->paragraphs(3, true),
            'featured_image' => null,
            'level' => $this->faker->randomElement(['beginner', 'intermediate', 'advanced']),
            'total_sessions' => $this->faker->numberBetween(3, 12),
            'price' => $this->faker->randomElement([null, 49.99, 99.99, 149.99, 199.99]),
            'is_featured' => $this->faker->boolean(20),
            'is_active' => $this->faker->boolean(80),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'schedule_pattern' => [
                'interval' => 'P1W',
                'duration' => 60,
                'day_of_week' => $this->faker->randomElement(['Monday', 'Tuesday', 'Wednesday', 'Thursday']),
                'time' => $this->faker->randomElement(['09:00', '14:00', '18:00']),
            ],
            'meta_data' => null,
            'instructor_id' => User::factory(),
        ];
    }

    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }

    public function free(): static
    {
        return $this->state(fn (array $attributes) => [
            'price' => null,
        ]);
    }
}
