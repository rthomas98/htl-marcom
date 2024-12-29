<?php

namespace Database\Factories;

use App\Models\Legalnar;
use App\Models\LegalnarQuestion;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class LegalnarQuestionFactory extends Factory
{
    protected $model = LegalnarQuestion::class;

    public function definition(): array
    {
        $isAnswered = $this->faker->boolean(70);

        return [
            'legalnar_id' => Legalnar::factory(),
            'user_id' => User::factory(),
            'question' => $this->faker->paragraph(),
            'answer' => $isAnswered ? $this->faker->paragraph() : null,
            'is_answered' => $isAnswered,
            'is_featured' => $this->faker->boolean(20),
            'answered_at' => $isAnswered ? $this->faker->dateTimeBetween('-1 week', 'now') : null,
            'answered_by' => $isAnswered ? User::factory() : null,
        ];
    }

    public function answered(): static
    {
        return $this->state(fn (array $attributes) => [
            'answer' => $this->faker->paragraph(),
            'is_answered' => true,
            'answered_at' => $this->faker->dateTimeBetween('-1 week', 'now'),
            'answered_by' => User::factory(),
        ]);
    }

    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}
