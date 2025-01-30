<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        // Create admin role if it doesn't exist
        $adminRole = Role::firstOrCreate(['name' => 'admin']);

        // Create admin user
        $user = User::firstOrCreate(
            ['email' => 'rob.thomas@empuls3.com'],
            [
                'name' => 'Rob Thomas',
                'password' => Hash::make('Us3er1!!1013'),
                'email_verified_at' => now(),
            ]
        );

        // Assign admin role
        $user->assignRole($adminRole);
    }
}
