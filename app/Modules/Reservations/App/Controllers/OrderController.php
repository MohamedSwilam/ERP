<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\QueryBuilders\OrderQueryBuilder;
use App\Modules\Reservations\App\Requests\CreateOrderRequest;
use App\Modules\Reservations\App\Transformers\OrderTransformer;
use App\Modules\Reservations\Domain\Actions\CreateOrderAction;
use App\Modules\Reservations\Domain\Actions\DeleteOrderAction;
use App\Modules\Reservations\Domain\DataTransferObjects\CreateOrderDto;
use App\Modules\Reservations\Domain\Models\Order;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * @param Request $request
     * @param OrderQueryBuilder $orderQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, OrderQueryBuilder $orderQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Order::class);

        return ApiResponse::indexResponse(
            $orderQueryBuilder->paginate($request->input('paginate')?? 15),
            OrderTransformer::class
        );
    }

    /**
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Order $order): JsonResponse {
        $this->authorize('view', Order::class);

        return ApiResponse::showResponse($order, OrderTransformer::class);
    }

    /**
     * @param CreateOrderAction $createOrderAction
     * @param CreateOrderRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateOrderAction $createOrderAction, CreateOrderRequest $request): JsonResponse
    {
        $this->authorize('store', Order::class);

        $order = $createOrderAction(CreateOrderDto::fromRequest($request));

        return ApiResponse::createResponse($order, OrderTransformer::class);
    }

    /**
     * @param DeleteOrderAction $deleteOrderAction
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteOrderAction $deleteOrderAction, Order $order): JsonResponse
    {
        $this->authorize('destroy', Order::class);

        $deleteOrderAction($order);

        return ApiResponse::deleteResponse();
    }
}
