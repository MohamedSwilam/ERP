<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

require __DIR__ . '/api/authentication.php';
require __DIR__ . '/api/authorization.php';
require __DIR__ . '/api/customers.php';
require __DIR__ . '/api/reservations.php';
require __DIR__ . '/api/statistics.php';
require __DIR__ . '/api/stocks.php';
require __DIR__ . '/api/comments.php';
