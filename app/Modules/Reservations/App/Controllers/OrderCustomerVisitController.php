<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\Requests\CreateVisitRequest;
use App\Modules\Reservations\App\Transformers\VisitTransformer;
use App\Modules\Reservations\Domain\Actions\CreateCustomerVisitAction;
use App\Modules\Reservations\Domain\DataTransferObjects\CreateVisitDto;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Order;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;

class OrderCustomerVisitController extends Controller
{
    /**
     * @param CreateCustomerVisitAction $createCustomerVisitAction
     * @param CreateVisitRequest $request
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateCustomerVisitAction $createCustomerVisitAction, CreateVisitRequest $request, Order $order): JsonResponse
    {
        $this->authorize('store', CustomerVisit::class);

        $visit = $createCustomerVisitAction($order, CreateVisitDto::fromRequest($request));

        return ApiResponse::createResponse(CustomerVisit::find($visit->id), VisitTransformer::class);
    }
}
