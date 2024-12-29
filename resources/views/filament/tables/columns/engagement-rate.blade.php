@php
    $record = $getRecord();
    $views = $record->views ?: 1;
    $engagements = ($record->comment_count + $record->like_count + $record->share_count);
    $rate = round(($engagements / $views) * 100, 2);
@endphp

<div class="px-4 py-3">
    <div class="text-sm font-medium text-gray-900">
        {{ $rate }}%
    </div>
    <div class="text-xs text-gray-500">
        {{ $engagements }} / {{ $views }}
    </div>
</div> 