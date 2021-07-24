<?php

use App\Modules\Customers\App\Controllers\CustomerCommentController;
use App\Modules\Customers\App\Controllers\CustomerController;
use App\Modules\Customers\App\Controllers\CustomerTypeController;
use Illuminate\Support\Facades\Route;

Route::resource('customers', CustomerController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('customer-types', [CustomerTypeController::class, 'index'])
    ->middleware('auth:api');

Route::get('customers/{customer}/comments', [CustomerCommentController::class, 'index'])
    ->middleware('auth:api');

Route::post('customers/{customer}/comments', [CustomerCommentController::class, 'store'])
    ->middleware('auth:api');
