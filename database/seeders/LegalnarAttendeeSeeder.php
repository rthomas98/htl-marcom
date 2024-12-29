<?php

namespace Database\Seeders;

use App\Models\Legalnar;
use App\Models\LegalnarAttendee;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LegalnarAttendeeSeeder extends Seeder
{
    public function run(): void
    {
        // Truncate the tables first
        DB::statement('TRUNCATE TABLE legalnar_attendees CASCADE');
        
        // Create a fixed number of users if we don't have enough
        $existingUsers = User::all();
        if ($existingUsers->count() < 100) {
            User::factory()->count(100 - $existingUsers->count())->create();
        }
        
        // Get all users and Legalnars
        $users = User::all();
        $legalnars = Legalnar::all();

        foreach ($legalnars as $legalnar) {
            // Create exactly 10 attendees per Legalnar
            $attendeeCount = 10;
            
            // Get random users for this Legalnar
            $legalnarUsers = $users->random($attendeeCount);

            // Create 4 registered attendees (40%)
            foreach ($legalnarUsers->take(4) as $user) {
                LegalnarAttendee::factory()
                    ->registered()
                    ->create([
                        'legalnar_id' => $legalnar->id,
                        'user_id' => $user->id,
                    ]);
            }

            // Create 3 attended (30%)
            foreach ($legalnarUsers->slice(4, 3) as $user) {
                LegalnarAttendee::factory()
                    ->attended()
                    ->create([
                        'legalnar_id' => $legalnar->id,
                        'user_id' => $user->id,
                    ]);
            }

            // Create 2 no-shows (20%)
            foreach ($legalnarUsers->slice(7, 2) as $user) {
                LegalnarAttendee::factory()
                    ->noShow()
                    ->create([
                        'legalnar_id' => $legalnar->id,
                        'user_id' => $user->id,
                    ]);
            }

            // Create 1 cancelled (10%)
            foreach ($legalnarUsers->slice(9, 1) as $user) {
                LegalnarAttendee::factory()
                    ->cancelled()
                    ->create([
                        'legalnar_id' => $legalnar->id,
                        'user_id' => $user->id,
                    ]);
            }
        }
    }
}
