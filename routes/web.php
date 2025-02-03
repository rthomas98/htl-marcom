<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\LegalnarController;
use App\Http\Controllers\LegalnarRegistrationController;
use App\Http\Controllers\LegalnarPaymentController;
use App\Models\BlogPost;
use App\Models\Category;

Route::get('/', function () {
    $blogPosts = BlogPost::where('status', 'published')
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
Route::get('/about-me', function() {
    $posts = BlogPost::with('author')
        ->where('status', 'published')
        ->orderBy('published_at', 'desc')
        ->take(3)
        ->get();

    return Inertia::render('AboutMe', [
        'posts' => $posts
    ]);
})->name('about-me');
Route::get('/webinars', fn() => Inertia::render('Webinars'))->name('webinars');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
Route::get('/insights', function (Request $request) {
    $search = $request->get('search');
    $category = $request->get('category');
    
    $query = BlogPost::query()
        ->with(['category', 'author'])
        ->where('status', 'published')
        ->when($search, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('title', 'ilike', "%{$search}%")
                    ->orWhere('excerpt', 'ilike', "%{$search}%")
                    ->orWhereHas('category', function ($query) use ($search) {
                        $query->where('name', 'ilike', "%{$search}%");
                    });
            });
        })
        ->when($category, function ($query, $category) {
            $query->whereHas('category', function ($query) use ($category) {
                $query->where('slug', $category);
            });
        })
        ->orderBy('published_at', 'desc')
        ->paginate(6);

    return Inertia::render('Resources/Insights', [
        'blogPosts' => $query,
        'categories' => Category::all(),
        'currentCategory' => $category,
        'search' => $search,
    ]);
})->name('insights');

Route::get('/insights/{slug}', function (string $slug) {
    $post = BlogPost::with(['category', 'author'])
        ->where('status', 'published')
        ->where('slug', $slug)
        ->firstOrFail();

    $relatedPosts = BlogPost::with(['category', 'author'])
        ->where('status', 'published')
        ->where('id', '!=', $post->id)
        ->where(function($query) use ($post) {
            $query->where('category_id', $post->category_id)
                  ->orWhereJsonContains('meta_data->tags', $post->meta_data['tags'] ?? []);
        })
        ->latest('published_at')
        ->take(3)
        ->get()
        ->map(function($post) {
            return [
                'url' => route('insight.detail', $post->slug),
                'image' => [
                    'src' => $post->featured_image,
                    'alt' => $post->title
                ],
                'category' => $post->category->name,
                'readTime' => ceil(str_word_count(strip_tags($post->content)) / 200) . ' min read',
                'title' => $post->title,
                'description' => $post->excerpt,
                'avatar' => [
                    'src' => $post->author_profile_image,
                    'alt' => $post->author?->name ?? 'Author'
                ],
                'fullName' => $post->author?->name ?? 'Hebert-Thomas Law',
                'date' => \Carbon\Carbon::parse($post->published_at)->format('d M Y')
            ];
        });

    return Inertia::render('Resources/InsightDetail', [
        'post' => $post,
        'relatedPosts' => $relatedPosts
    ]);
})->name('insight.detail');

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
