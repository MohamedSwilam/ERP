<?php

use App\Modules\Stocks\App\Controllers\StockController;
use Illuminate\Support\Facades\Route;

Route::resource('stocks', StockController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');
