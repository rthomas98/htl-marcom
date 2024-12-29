<div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
    <div class="bg-white rounded-lg shadow p-4">
        <div class="text-sm font-medium text-gray-500">Total Registrations</div>
        <div class="mt-1 text-2xl font-semibold text-primary-600">{{ $totalRegistrations }}</div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
        <div class="text-sm font-medium text-gray-500">Total Attendees</div>
        <div class="mt-1 text-2xl font-semibold text-success-600">{{ $totalAttendees }}</div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
        <div class="text-sm font-medium text-gray-500">Attendance Rate</div>
        <div class="mt-1 text-2xl font-semibold {{ $attendanceRate >= 70 ? 'text-success-600' : ($attendanceRate >= 50 ? 'text-warning-600' : 'text-danger-600') }}">
            {{ number_format($attendanceRate, 1) }}%
        </div>
    </div>

    <div class="bg-white rounded-lg shadow p-4">
        <div class="text-sm font-medium text-gray-500">Total Revenue</div>
        <div class="mt-1 text-2xl font-semibold text-success-600">${{ number_format($totalRevenue, 2) }}</div>
    </div>
</div> 