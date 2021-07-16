<?php

use App\Modules\Reservations\App\Controllers\PackageController;
use App\Modules\Reservations\App\Controllers\RoomController;
use Illuminate\Support\Facades\Route;

Route::resource('packages', PackageController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('rooms', [RoomController::class, 'index'])
    ->middleware('auth:api');
