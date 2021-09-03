<?php

use App\Modules\Statistics\App\Controllers\AccountingController;
use App\Modules\Statistics\App\Controllers\ReportController;
use Illuminate\Support\Facades\Route;

Route::resource('reports', ReportController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::resource('accounting',AccountingController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');
