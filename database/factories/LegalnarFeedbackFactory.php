<?php

namespace Database\Factories;

use App\Models\Legalnar;
use App\Models\LegalnarFeedback;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LegalnarFeedbackFactory extends Factory
{
    protected $model = LegalnarFeedback::class;

    public function definition(): array
    {
        $rating = $this->faker->numberBetween(1, 5);

        return [
            'legalnar_id' => Legalnar::factory(),
            'user_id' => User::factory(),
            'rating' => $rating,
            'feedback' => $this->faker->boolean(80) ? $this->faker->paragraph() : null,
            'ratings_breakdown' => [
                'content' => $this->faker->numberBetween(max(1, $rating - 1), min(5, $rating + 1)),
                'presentation' => $this->faker->numberBetween(max(1, $rating - 1), min(5, $rating + 1)),
                'interaction' => $this->faker->numberBetween(max(1, $rating - 1), min(5, $rating + 1)),
                'technical' => $this->faker->numberBetween(max(1, $rating - 1), min(5, $rating + 1)),
                'value' => $this->faker->numberBetween(max(1, $rating - 1), min(5, $rating + 1)),
            ],
        ];
    }

    public function positive(): static
    {
        return $this->state(fn (array $attributes) => [
            'rating' => $this->faker->numberBetween(4, 5),
        ]);
    }

    public function negative(): static
    {
        return $this->state(fn (array $attributes) => [
            'rating' => $this->faker->numberBetween(1, 2),
        ]);
    }

    public function withFeedback(): static
    {
        return $this->state(fn (array $attributes) => [
            'feedback' => $this->faker->paragraph(),
        ]);
    }
}
