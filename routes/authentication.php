<?php

use App\Modules\Authentication\App\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::resource('users', UsersController::class)
    ->except(['edit', 'create'])
    ->middleware('auth:api');

Route::get('personal-data', [UsersController::class, 'personalInformation'])
    ->middleware('auth:api');
