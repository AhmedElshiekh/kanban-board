<?php

namespace Database\Factories;

use App\Enums\Status;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Member>
 */
class MemberFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name,
            'title' => $this->faker->title,
            'age' => $this->faker->numberBetween(18, 65),
            'email' => $this->faker->unique()->safeEmail(),
            'phone' => $this->faker->phoneNumber,
            // 'status' => $this->faker->randomElement(
            //     Status::cases()->values()
            // ),
            'status' => Status::cases()[array_rand(Status::cases())]->value,
        ];
    }
}
