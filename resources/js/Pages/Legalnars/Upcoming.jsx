import React, { useState, useEffect, useCallback } from 'react';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { debounce } from 'lodash';
import MarcomLayout from '@/Layouts/MarcomLayout';
import { Button } from '@relume_io/relume-ui';
import { Search, Filter, X } from 'lucide-react';
import { Transition } from '@headlessui/react';

const placeholderImage = '/images/placeholders/legalnar-placeholder.svg';
const placeholderAvatar = '/images/placeholders/avatar-placeholder.svg';

export default function Upcoming({ legalnars, topics, difficulty_levels }) {
    const { url } = usePage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Create a debounced version of the search function
    const debouncedSearch = useCallback(
        debounce((value) => {
            updateFilters({ search: value });
        }, 300),
        []
    );

    // Update URL and fetch results
    const updateFilters = (updates = {}) => {
        setIsLoading(true);
        const params = new URLSearchParams();
        
        const currentSearch = updates.search ?? searchTerm;
        const currentTopics = updates.topics ?? selectedTopics;
        const currentDifficulty = updates.difficulty ?? selectedDifficulty;

        if (currentSearch) params.set('search', currentSearch);
        if (currentTopics.length > 0) params.set('topics', currentTopics.join(','));
        if (currentDifficulty) params.set('difficulty', currentDifficulty);

        router.get(url.split('?')[0] + (params.toString() ? `?${params.toString()}` : ''), {}, {
            preserveState: true,
            preserveScroll: true,
            onFinish: () => setIsLoading(false)
        });
    };

    // Handle search input
    const handleSearch = (value) => {
        setSearchTerm(value);
        debouncedSearch(value);
    };

    // Handle topic selection
    const handleTopicChange = (topic, checked) => {
        const newTopics = checked 
            ? [...selectedTopics, topic]
            : selectedTopics.filter(t => t !== topic);
        setSelectedTopics(newTopics);
        updateFilters({ topics: newTopics });
    };

    // Handle difficulty selection
    const handleDifficultyChange = (value) => {
        setSelectedDifficulty(value);
        updateFilters({ difficulty: value });
    };

    const clearFilters = () => {
        setSearchTerm('');
        setSelectedTopics([]);
        setSelectedDifficulty('');
        updateFilters({ search: '', topics: [], difficulty: '' });
    };

    const hasActiveFilters = searchTerm || selectedTopics.length > 0 || selectedDifficulty;

    return (
        <MarcomLayout>
            <Head title="Upcoming Live Sessions" />

            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h1 className="text-3xl font-heading font-bold tracking-tight text-cod-gray sm:text-4xl">
                            Upcoming Live Sessions
                        </h1>
                        <p className="mt-4 text-xl text-cod-gray-light">
                            Browse our upcoming live sessions and secure your spot today.
                        </p>
                    </div>

                    {/* Search and Filter Bar */}
                    <div className="mb-8">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div className="relative flex-1 max-w-lg">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Search className="h-5 w-5 text-cod-gray-light" />
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    placeholder="Search sessions..."
                                    className="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 text-sm placeholder:text-cod-gray-light focus:border-cod-gray focus:outline-none focus:ring-1 focus:ring-cod-gray"
                                />
                            </div>
                            <div className="flex items-center gap-4">
                                <Button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="inline-flex items-center gap-2 bg-white border border-cod-gray text-cod-gray hover:bg-gray-50"
                                >
                                    <Filter className="h-4 w-4" />
                                    Filters
                                    {hasActiveFilters && (
                                        <span className="ml-1 rounded-full bg-cod-gray text-white px-2 py-0.5 text-xs">
                                            {(selectedTopics.length > 0 ? 1 : 0) + (selectedDifficulty ? 1 : 0)}
                                        </span>
                                    )}
                                </Button>
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm text-cod-gray-light hover:text-cod-gray"
                                    >
                                        Clear all
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Filter Panel */}
                        <Transition
                            show={showFilters}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0"
                            enterTo="transform opacity-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100"
                            leaveTo="transform opacity-0"
                        >
                            <div className="mt-4 rounded-lg border border-gray-200 bg-white p-4">
                                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                    {/* Topics Filter */}
                                    <div>
                                        <h3 className="text-sm font-medium text-cod-gray mb-2">Topics</h3>
                                        <div className="space-y-2 max-h-48 overflow-y-auto">
                                            {topics.map((topic) => (
                                                <label key={topic} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={selectedTopics.includes(topic)}
                                                        onChange={(e) => handleTopicChange(topic, e.target.checked)}
                                                        className="h-4 w-4 rounded border-gray-300 text-cod-gray focus:ring-cod-gray"
                                                    />
                                                    <span className="ml-2 text-sm text-cod-gray-light">{topic}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Difficulty Level Filter */}
                                    <div>
                                        <h3 className="text-sm font-medium text-cod-gray mb-2">Difficulty Level</h3>
                                        <div className="space-y-2">
                                            {difficulty_levels.map((level) => (
                                                <label key={level} className="flex items-center">
                                                    <input
                                                        type="radio"
                                                        name="difficulty"
                                                        value={level}
                                                        checked={selectedDifficulty === level}
                                                        onChange={(e) => handleDifficultyChange(e.target.value)}
                                                        className="h-4 w-4 border-gray-300 text-cod-gray focus:ring-cod-gray"
                                                    />
                                                    <span className="ml-2 text-sm text-cod-gray-light capitalize">{level}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition>
                    </div>

                    {/* Loading State */}
                    <Transition
                        show={isLoading}
                        enter="transition-opacity duration-150"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center"
                    >
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cod-gray"></div>
                    </Transition>

                    {/* Results */}
                    <div className={`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ${isLoading ? 'opacity-50' : ''}`}>
                        {legalnars.map((legalnar) => (
                            <Link
                                key={legalnar.id}
                                href={route('legalnars.show', legalnar.id)}
                                className="flex flex-col gap-4 rounded-xl border border-solid border-[#dfdfdf] bg-white p-5 transition-all duration-200 hover:border-cod-gray"
                            >
                                <div className="relative h-48 w-full overflow-hidden rounded-xl">
                                    <img
                                        src={legalnar.featured_image_url || placeholderImage}
                                        alt={legalnar.title}
                                        className="absolute inset-0 h-full w-full object-cover"
                                        onError={(e) => {
                                            e.target.src = placeholderImage;
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col items-start">
                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="rounded-lg bg-pippin px-3 py-1.5">
                                            <p className="text-sm font-semibold text-cod-gray">Live Session</p>
                                        </div>
                                        {legalnar.scheduled_start && (
                                            <p className="text-sm text-[#636262]">
                                                {new Date(legalnar.scheduled_start).toLocaleDateString()}
                                            </p>
                                        )}
                                    </div>
                                    <h3 className="mb-4 text-xl font-bold md:text-2xl">
                                        {legalnar.title}
                                    </h3>
                                    <p className="mb-4 text-[#636262] line-clamp-2">
                                        {legalnar.description}
                                    </p>
                                    <div className="flex items-center gap-x-4">
                                        <img
                                            src={legalnar.instructor?.avatar_url || placeholderAvatar}
                                            alt={legalnar.instructor?.name}
                                            className="h-10 w-10 rounded-full bg-[#f2f2f7]"
                                            onError={(e) => {
                                                e.target.src = placeholderAvatar;
                                            }}
                                        />
                                        <div>
                                            <p className="font-medium text-cod-gray">
                                                {legalnar.instructor?.name}
                                            </p>
                                            <p className="text-sm text-[#636262]">
                                                {legalnar.instructor?.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {legalnars.length === 0 && (
                        <div className="text-center py-12">
                            <h3 className="text-lg font-medium text-cod-gray">No sessions found</h3>
                            <p className="mt-2 text-cod-gray-light">Try adjusting your filters or search term</p>
                        </div>
                    )}
                </div>
            </div>
        </MarcomLayout>
    );
} 