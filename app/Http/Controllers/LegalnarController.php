<?php

namespace App\Http\Controllers;

use App\Models\Legalnar;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LegalnarController extends Controller
{
    public function index()
    {
        $legalnars = Legalnar::with('instructor')
            ->where('is_published', true)
            ->latest('published_at')
            ->paginate(12);

        return Inertia::render('Legalnars/Index', [
            'legalnars' => $legalnars,
        ]);
    }

    public function upcoming(Request $request)
    {
        $query = Legalnar::query()
            ->where('type', 'live')
            ->where('scheduled_start', '>', now())
            ->with('instructor')
            ->orderBy('scheduled_start');

        // Search
        if ($request->has('search')) {
            $search = $request->get('search');
            $query->where(function($q) use ($search) {
                $q->where('title', 'like', "%{$search}%")
                  ->orWhere('description', 'like', "%{$search}%");
            });
        }

        // Topics filter (using meta_data->topics)
        if ($request->has('topics')) {
            $topics = explode(',', $request->get('topics'));
            $query->whereJsonContains('meta_data->topics', $topics);
        }

        // Difficulty filter (using level column)
        if ($request->has('difficulty')) {
            $query->where('level', $request->get('difficulty'));
        }

        $legalnars = $query->get();

        // Get all unique topics from meta_data->topics
        $topics = Legalnar::where('type', 'live')
            ->whereNotNull('meta_data')
            ->get()
            ->pluck('meta_data.topics')
            ->flatten()
            ->filter()
            ->unique()
            ->values()
            ->all();

        // Get all unique difficulty levels from the level column
        $difficulty_levels = ['beginner', 'intermediate', 'advanced'];

        return Inertia::render('Legalnars/Upcoming', [
            'legalnars' => $legalnars,
            'topics' => $topics,
            'difficulty_levels' => $difficulty_levels,
        ]);
    }

    public function onDemand()
    {
        $legalnars = Legalnar::with('instructor')
            ->where('is_published', true)
            ->where('type', 'on-demand')
            ->latest('published_at')
            ->paginate(12);

        return Inertia::render('Legalnars/Index', [
            'legalnars' => $legalnars,
            'title' => 'On-Demand Content',
            'description' => 'Access our library of on-demand legal education content.',
        ]);
    }

    public function myRegistrations()
    {
        $registrations = auth()->user()->legalnarAttendees()
            ->with('legalnar.instructor')
            ->latest('registered_at')
            ->paginate(12);

        return Inertia::render('Dashboard/Legalnars/Index', [
            'registrations' => $registrations,
        ]);
    }

    public function show(Legalnar $legalnar)
    {
        if (!$legalnar->is_published) {
            abort(404);
        }

        $legalnar->load('instructor');
        
        if (auth()->check()) {
            $isRegistered = $legalnar->attendees()
                ->where('user_id', auth()->id())
                ->exists();
            $legalnar->is_registered = $isRegistered;
        }

        // Get related Legalnars (same type or by same instructor)
        $relatedLegalnars = Legalnar::with('instructor')
            ->where('is_published', true)
            ->where('id', '!=', $legalnar->id)
            ->where(function ($query) use ($legalnar) {
                $query->where('type', $legalnar->type)
                    ->orWhere('instructor_id', $legalnar->instructor_id);
            })
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('Legalnars/Show', [
            'legalnar' => $legalnar,
            'relatedLegalnars' => $relatedLegalnars,
        ]);
    }
} 