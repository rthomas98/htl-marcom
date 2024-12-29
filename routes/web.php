<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\UserLegalnarDashboardController;
use App\Http\Controllers\LegalnarRegistrationController;
use App\Http\Controllers\LegalnarPaymentController;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

// New Marketing Pages
Route::get('/about-me', fn() => Inertia::render('AboutMe'))->name('about-me');
Route::get('/webinars', fn() => Inertia::render('Webinars'))->name('webinars');
Route::get('/contact', fn() => Inertia::render('Contact'))->name('contact');
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

// Existing authenticated routes remain unchanged
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Stripe Webhook
Route::post(
    'stripe/webhook',
    [App\Http\Controllers\StripeWebhookController::class, 'handleWebhook']
)->name('cashier.webhook');

// Legalnar Payment Routes
Route::middleware(['auth'])->group(function () {
    Route::post('/legalnar/{attendee}/payment/initialize', [App\Http\Controllers\LegalnarPaymentController::class, 'initializePayment'])
        ->name('legalnar.payment.initialize');
    Route::get('/legalnar/payment/complete', [App\Http\Controllers\LegalnarPaymentController::class, 'handlePaymentComplete'])
        ->name('legalnar.payment.complete');
    Route::get('/legalnar/{attendee}/payment/status', [App\Http\Controllers\LegalnarPaymentController::class, 'checkPaymentStatus'])
        ->name('legalnar.payment.status');
});

// Legalnar Registration Routes
Route::middleware(['auth'])->group(function () {
    Route::get('/legalnar/{legalnar}/register', [App\Http\Controllers\LegalnarRegistrationController::class, 'show'])
        ->name('legalnar.register.show');
    Route::post('/legalnar/{legalnar}/register', [App\Http\Controllers\LegalnarRegistrationController::class, 'register'])
        ->name('legalnar.register');
});

// Legalnar Dashboard Routes
Route::middleware(['auth'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::get('/legalnars', [UserLegalnarDashboardController::class, 'index'])->name('legalnars.index');
    Route::get('/legalnars/{registration}', [UserLegalnarDashboardController::class, 'show'])->name('legalnars.show');
});

// Legalnar Registration Routes
Route::middleware(['auth'])->group(function () {
    Route::post('/legalnars/{legalnar}/register', [LegalnarRegistrationController::class, 'create'])->name('legalnars.register');
    Route::get('/legalnars/{attendee}/payment', [LegalnarPaymentController::class, 'initializePayment'])->name('legalnars.payment.initialize');
    Route::post('/legalnars/payment/complete', [LegalnarPaymentController::class, 'handlePaymentComplete'])->name('legalnars.payment.complete');
    Route::get('/legalnars/{attendee}/payment/status', [LegalnarPaymentController::class, 'checkPaymentStatus'])->name('legalnars.payment.status');
});

// Legalnar Routes
Route::prefix('legalnars')->name('legalnars.')->group(function () {
    // Public routes
    Route::get('/', [App\Http\Controllers\LegalnarController::class, 'index'])->name('index');
    Route::get('/upcoming', [App\Http\Controllers\LegalnarController::class, 'upcoming'])->name('upcoming');
    Route::get('/on-demand', [App\Http\Controllers\LegalnarController::class, 'onDemand'])->name('on-demand');
    
    // Authenticated routes
    Route::middleware(['auth'])->group(function () {
        // My Registrations (must come before the show route)
        Route::get('/my-registrations', [App\Http\Controllers\LegalnarController::class, 'myRegistrations'])->name('my-registrations');
        
        // Registration
        Route::get('/{legalnar}/register', [App\Http\Controllers\LegalnarRegistrationController::class, 'show'])->name('register');
        Route::post('/{legalnar}/register', [App\Http\Controllers\LegalnarRegistrationController::class, 'create'])->name('register.store');
        
        // Payment
        Route::get('/{attendee}/payment', [App\Http\Controllers\LegalnarPaymentController::class, 'initializePayment'])->name('payment.initialize');
        Route::post('/payment/complete', [App\Http\Controllers\LegalnarPaymentController::class, 'handlePaymentComplete'])->name('payment.complete');
        Route::get('/{attendee}/payment/status', [App\Http\Controllers\LegalnarPaymentController::class, 'checkPaymentStatus'])->name('payment.status');
        
        // Registration cancellation
        Route::delete('/legalnars/registrations/{attendee}/cancel', [LegalnarRegistrationController::class, 'cancel'])
            ->name('legalnars.registrations.cancel');
    });

    // Show route must come last
    Route::get('/{legalnar}', [App\Http\Controllers\LegalnarController::class, 'show'])->name('show');
});

// Legalnar Payment Routes
Route::middleware(['auth'])->group(function () {
    Route::post('/legalnars/payment/{attendee}/initialize', [LegalnarPaymentController::class, 'initialize'])
        ->name('legalnars.payment.initialize');
    Route::get('/legalnars/payment/{attendee}/success', [LegalnarPaymentController::class, 'success'])
        ->name('legalnars.payment.success');
    Route::get('/legalnars/payment/{attendee}/cancel', [LegalnarPaymentController::class, 'cancel'])
        ->name('legalnars.payment.cancel');
});

require __DIR__.'/auth.php';
