<?php

use App\Modules\Stocks\App\Controllers\BuffetOrderController;
use App\Modules\Stocks\App\Controllers\StockController;
use Illuminate\Support\Facades\Route;

Route::resource('stocks', StockController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('buffet-orders/statistics', [BuffetOrderController::class, 'statistics'])
    ->middleware('auth:api');

Route::resource('buffet-orders', BuffetOrderController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');
