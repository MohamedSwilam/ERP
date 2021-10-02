<?php

namespace App\Modules\Statistics\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Customers\Domain\Models\Customer;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Order;
use App\Modules\Stocks\Domain\Models\BuffetOrder;
use Carbon\Carbon;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StatisticsController extends Controller
{
    /**
     * @param Request $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function __invoke(Request $request): JsonResponse
    {
        $this->authorize('browse', 'statistics');

        $today = Carbon::today();
        $data = [
            'monthly_registered_users' => Customer::query()
                ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                ->count(),
            'monthly_package_sales' => [
                'total' => Order::query()
                    ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                    ->sum('total'),
                'paid' => Order::query()
                    ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                    ->sum('paid'),
            ],
            'monthly_orders' => Order::query()
                ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                ->count(),
            'monthly_visits' => [
                'orders' => CustomerVisit::query()
                    ->where('bookable_type', 'App\\Modules\\Reservations\\Domain\\Models\\Order')
                    ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                    ->count(),
                'events' => CustomerVisit::query()
                    ->where('bookable_type', 'App\\Modules\\Reservations\\Domain\\Models\\Event')
                    ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                    ->count(),
            ],
            'monthly_buffet_orders' => [
                'count' => BuffetOrder::query()
                    ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                    ->count(),
                'amount' => BuffetOrder::query()
                    ->whereBetween('created_at', [$today->startOfMonth()->toDateTimeString(), $today->endOfMonth()->toDateTimeString()])
                    ->sum('total'),
            ]
        ];

        return ApiResponse::setData($data)->execute();
    }
}
