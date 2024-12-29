<?php

namespace Database\Factories;

use App\Models\Legalnar;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\LegalnarAttendee>
 */
class LegalnarAttendeeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $registeredAt = fake()->dateTimeBetween('-3 months', '-1 day');
        $status = fake()->randomElement(['registered', 'attended', 'no-show', 'cancelled']);
        $attendedAt = null;

        if ($status === 'attended') {
            $attendedAt = fake()->dateTimeBetween($registeredAt, 'now');
        }

        $price = fake()->randomFloat(2, 50, 500);
        $paymentStatus = fake()->randomElement(['pending', 'completed', 'failed', 'refunded']);
        $amountPaid = $paymentStatus === 'completed' ? $price : ($paymentStatus === 'refunded' ? 0 : null);

        return [
            'legalnar_id' => Legalnar::factory(),
            'user_id' => User::factory(),
            'status' => $status,
            'amount_paid' => $amountPaid,
            'payment_status' => $paymentStatus,
            'registered_at' => $registeredAt,
            'attended_at' => $attendedAt,
            'meta_data' => [
                'registration_source' => fake()->randomElement(['website', 'admin', 'referral', 'email']),
                'notes' => fake()->optional()->sentence(),
                'dietary_requirements' => fake()->optional()->randomElement(['vegetarian', 'vegan', 'gluten-free', 'none']),
                'special_requests' => fake()->optional()->sentence(),
            ],
        ];
    }

    public function registered()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'registered',
                'attended_at' => null,
            ];
        });
    }

    public function attended()
    {
        return $this->state(function (array $attributes) {
            $registeredAt = $attributes['registered_at'] ?? fake()->dateTimeBetween('-3 months', '-1 day');
            return [
                'status' => 'attended',
                'attended_at' => fake()->dateTimeBetween($registeredAt, 'now'),
                'payment_status' => 'completed',
                'amount_paid' => fake()->randomFloat(2, 50, 500),
            ];
        });
    }

    public function noShow()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'no-show',
                'attended_at' => null,
            ];
        });
    }

    public function cancelled()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 'cancelled',
                'attended_at' => null,
                'payment_status' => 'refunded',
                'amount_paid' => 0,
            ];
        });
    }

    public function paid()
    {
        return $this->state(function (array $attributes) {
            return [
                'payment_status' => 'completed',
                'amount_paid' => fake()->randomFloat(2, 50, 500),
            ];
        });
    }
}
