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

        // Create admin users
        $users = [
            [
                'email' => 'rob.thomas@empuls3.com',
                'name' => 'Rob Thomas',
                'password' => 'Us3er1!!1013',
            ],
            [
                'email' => 'adrian.thomas@hebertthomaslaw.com',
                'name' => 'Adrian Thomas',
                'password' => 'G00dBoySpot!!0613',
            ],
        ];

        foreach ($users as $userData) {
            $user = User::firstOrCreate(
                ['email' => $userData['email']],
                [
                    'name' => $userData['name'],
                    'password' => Hash::make($userData['password']),
                    'email_verified_at' => now(),
                ]
            );

            // Assign admin role
            $user->assignRole($adminRole);
        }
    }
}
