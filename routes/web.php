<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LegalnarController;
use App\Http\Controllers\LegalnarRegistrationController;
use App\Http\Controllers\LegalnarPaymentController;

Route::get('/', function () {
    $blogPosts = \App\Models\BlogPost::where('status', 'published')
        ->orderBy('published_at', 'desc')
        ->take(3)
        ->get()
        ->map(function ($post) {
            return [
                'url' => "/blog/{$post->slug}",
                'image' => [
                    'src' => $post->featured_image,
                    'alt' => $post->title,
                ],
                'category' => $post->category?->name ?? 'Blog',
                'readTime' => ceil(str_word_count(strip_tags($post->content)) / 200) . ' min read',
                'title' => $post->title,
                'description' => $post->excerpt,
                'button' => [
                    'title' => 'Read More',
                    'variant' => 'link',
                ],
            ];
        });

    return Inertia::render('Home', [
        'blogData' => [
            'tagline' => 'Latest Insights',
            'heading' => 'Legal Knowledge Hub',
            'description' => 'Stay informed with our latest articles on intellectual property law, trademark protection, and business strategies.',
            'button' => [
                'title' => 'View All Articles',
                'variant' => 'secondary',
                'href' => '/blog'
            ],
            'blogPosts' => $blogPosts
        ]
    ]);
})->name('home');

// New Marketing Pages
Route::get('/about-me', fn() => Inertia::render('AboutMe'))->name('about-me');
Route::get('/webinars', fn() => Inertia::render('Webinars'))->name('webinars');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::get('/insights', function () {
    $category = request('category');
    $search = request('search');
    
    $query = \App\Models\BlogPost::with(['category', 'author', 'seoMetadata'])
        ->where('status', 'published')
        ->orderBy('published_at', 'desc');

    if ($category) {
        $query->whereHas('category', function ($q) use ($category) {
            $q->where('name', $category);
        });
    }

    if ($search) {
        $query->where(function($q) use ($search) {
            $q->where('title', 'ilike', "%{$search}%")
              ->orWhere('excerpt', 'ilike', "%{$search}%")
              ->orWhereHas('category', function($q) use ($search) {
                  $q->where('name', 'ilike', "%{$search}%");
              });
        });
    }

    $blogPosts = $query->paginate(6);
    
    // Transform the paginator to include the correct links
    $paginationData = $blogPosts->toArray();
    $paginationLinks = [
        'prev' => $blogPosts->previousPageUrl(),
        'next' => $blogPosts->nextPageUrl(),
    ];
    
    $paginationData['links'] = $paginationLinks;

    $categories = \App\Models\Category::whereHas('posts', function ($query) {
        $query->where('status', 'published');
    })->get();

    return Inertia::render('Resources/Insights', [
        'blogPosts' => $paginationData,
        'categories' => $categories,
        'currentCategory' => $category,
        'search' => $search,
    ]);
})->name('insights');
Route::get('/trademark-services', fn() => Inertia::render('TrademarkServices/Index'))->name('trademark-services');
Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

// Trademark Services Routes
Route::prefix('trademark-services')->name('trademark-services.')->group(function () {
    Route::get('/', fn() => Inertia::render('TrademarkServices/Overview'))->name('overview');
    Route::get('/clearance-search', fn() => Inertia::render('TrademarkServices/ClearanceSearch'))->name('clearance-search');
    Route::get('/registration', fn() => Inertia::render('TrademarkServices/Registration'))->name('registration');
    Route::get('/monitoring', fn() => Inertia::render('TrademarkServices/Monitoring'))->name('monitoring');
    Route::get('/enforcement', fn() => Inertia::render('TrademarkServices/Enforcement'))->name('enforcement');
    Route::get('/renewal', fn() => Inertia::render('TrademarkServices/Renewal'))->name('renewal');
    Route::get('/licensing', fn() => Inertia::render('TrademarkServices/Licensing'))->name('licensing');
    Route::get('/international', fn() => Inertia::render('TrademarkServices/International'))->name('international');
});

// Other Legal Services Routes
Route::prefix('legal-services')->name('legal-services.')->group(function () {
    Route::get('/', fn() => Inertia::render('OtherLegalServices/Overview'))->name('overview');
    Route::get('/business-law', fn() => Inertia::render('OtherLegalServices/BusinessLaw'))->name('business-law');
    Route::get('/estate-planning', fn() => Inertia::render('OtherLegalServices/EstatePlanning'))->name('estate-planning');
    Route::get('/general-counsel', fn() => Inertia::render('OtherLegalServices/GeneralCounsel'))->name('general-counsel');
    Route::get('/privacy-data-protection', fn() => Inertia::render('OtherLegalServices/PrivacyData'))->name('privacy-data');
});

// Stripe Webhook
Route::post(
    'stripe/webhook',
    [App\Http\Controllers\StripeWebhookController::class, 'handleWebhook']
)->name('cashier.webhook');

// Legalnar Routes
Route::prefix('legalnars')->name('legalnars.')->group(function () {
    // Public routes
    Route::get('/', [LegalnarController::class, 'index'])->name('index');
    Route::get('/upcoming', [LegalnarController::class, 'upcoming'])->name('upcoming');
    Route::get('/on-demand', [LegalnarController::class, 'onDemand'])->name('on-demand');
    
    // Authenticated routes
    Route::middleware(['auth'])->group(function () {
        // My Registrations (Dashboard)
        Route::get('/my-registrations', [LegalnarController::class, 'myRegistrations'])
            ->name('my-registrations');
        
        // Registration
        Route::get('/{legalnar}/register', [LegalnarRegistrationController::class, 'show'])
            ->name('register');
        Route::post('/{legalnar}/register', [LegalnarRegistrationController::class, 'create'])
            ->name('register.store');
        Route::delete('/registrations/{attendee}/cancel', [LegalnarRegistrationController::class, 'cancel'])
            ->name('registrations.cancel');
        
        // Payment
        Route::get('/payment/{attendee}/initialize', [LegalnarPaymentController::class, 'initialize'])
            ->name('payment.initialize');
        Route::post('/payment/{attendee}/process', [LegalnarPaymentController::class, 'processPayment'])
            ->name('payment.process');
        Route::get('/payment/{attendee}/success', [LegalnarPaymentController::class, 'success'])
            ->name('payment.success');
        Route::get('/payment/{attendee}/cancel', [LegalnarPaymentController::class, 'cancel'])
            ->name('payment.cancel');
    });

    // Show route must come last
    Route::get('/{legalnar}', [LegalnarController::class, 'show'])->name('show');
});

// Profile routes
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
