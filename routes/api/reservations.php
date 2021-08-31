<?php

use App\Modules\Reservations\App\Controllers\CustomerVisitController;
use App\Modules\Reservations\App\Controllers\OrderCommentController;
use App\Modules\Reservations\App\Controllers\OrderController;
use App\Modules\Reservations\App\Controllers\OrderCustomerVisitController;
use App\Modules\Reservations\App\Controllers\PackageController;
use App\Modules\Reservations\App\Controllers\PackageTypeController;
use App\Modules\Reservations\App\Controllers\RoomController;
use Illuminate\Support\Facades\Route;

Route::resource('packages', PackageController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('package-types', [PackageTypeController::class, 'index'])
    ->middleware('auth:api');

Route::get('rooms', [RoomController::class, 'index'])
    ->middleware('auth:api');

Route::resource('orders', OrderController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('orders/{order}/comments', [OrderCommentController::class, 'index'])
    ->middleware('auth:api');

Route::post('orders/{order}/comments', [OrderCommentController::class, 'store'])
    ->middleware('auth:api');

Route::resource('visits', CustomerVisitController::class)
    ->except(['edit', 'create', 'store'])
    ->middleware('auth:api');

Route::resource('orders/{order}/visits', OrderCustomerVisitController::class)
    ->except(['create', 'index', 'show', 'edit', 'update', 'delete'])
    ->middleware('auth:api');
