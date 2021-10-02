<?php

use App\Modules\Statistics\App\Controllers\AccountingController;
use App\Modules\Statistics\App\Controllers\ReportController;
use App\Modules\Statistics\App\Controllers\StatisticsController;
use Illuminate\Support\Facades\Route;

Route::resource('reports', ReportController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::resource('accounting',AccountingController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('statistics', StatisticsController::class)
    ->middleware('auth:api');
