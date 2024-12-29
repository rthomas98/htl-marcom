<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\LegalnarAttendee;

class UserLegalnarDashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        
        $registrations = LegalnarAttendee::with(['legalnar' => function ($query) {
                $query->with('instructor');
            }])
            ->where('user_id', $user->id)
            ->latest('registered_at')
            ->get()
            ->groupBy(function ($registration) {
                if ($registration->legalnar->type === 'live') {
                    return $registration->legalnar->scheduled_start > now() ? 'upcoming' : 'past';
                }
                return 'on_demand';
            })
            ->map(function ($group) {
                return $group->map(function ($registration) {
                    $legalnar = $registration->legalnar;
                    return [
                        'id' => $registration->id,
                        'status' => $registration->status,
                        'registered_at' => $registration->registered_at->format('M j, Y'),
                        'payment_status' => $registration->payment_status,
                        'legalnar' => [
                            'id' => $legalnar->id,
                            'title' => $legalnar->title,
                            'type' => $legalnar->type,
                            'featured_image' => $legalnar->featured_image_url,
                            'scheduled_start' => optional($legalnar->scheduled_start)->format('M j, Y g:i A'),
                            'scheduled_end' => optional($legalnar->scheduled_end)->format('g:i A'),
                            'timezone' => $legalnar->timezone,
                            'meeting_url' => $legalnar->meeting_url,
                            'instructor' => [
                                'name' => $legalnar->instructor->name,
                            ],
                        ],
                    ];
                });
            });

        return Inertia::render('Dashboard/Legalnars/Index', [
            'registrations' => $registrations,
        ]);
    }

    public function show(LegalnarAttendee $registration)
    {
        $this->authorize('view', $registration);

        $registration->load(['legalnar' => function ($query) {
            $query->with(['instructor', 'materials']);
        }]);

        return Inertia::render('Dashboard/Legalnars/Show', [
            'registration' => [
                'id' => $registration->id,
                'status' => $registration->status,
                'registered_at' => $registration->registered_at->format('M j, Y'),
                'payment_status' => $registration->payment_status,
                'legalnar' => [
                    'id' => $registration->legalnar->id,
                    'title' => $registration->legalnar->title,
                    'description' => $registration->legalnar->description,
                    'type' => $registration->legalnar->type,
                    'featured_image' => $registration->legalnar->featured_image_url,
                    'scheduled_start' => optional($registration->legalnar->scheduled_start)->format('M j, Y g:i A'),
                    'scheduled_end' => optional($registration->legalnar->scheduled_end)->format('g:i A'),
                    'timezone' => $registration->legalnar->timezone,
                    'meeting_url' => $registration->legalnar->meeting_url,
                    'recording_url' => $registration->legalnar->recording_url,
                    'materials' => $registration->legalnar->materials,
                    'instructor' => [
                        'name' => $registration->legalnar->instructor->name,
                    ],
                ],
            ],
        ]);
    }
} 