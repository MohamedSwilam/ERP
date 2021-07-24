<?php

use App\Modules\Comments\App\Controllers\CommentController;
use Illuminate\Support\Facades\Route;

Route::resource('comments', CommentController::class)
    ->except(['create', 'store', 'edit', 'index', 'show'])
    ->middleware('auth:api');

