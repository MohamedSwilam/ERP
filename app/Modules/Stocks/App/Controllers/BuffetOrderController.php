<?php

namespace App\Modules\Stocks\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Stocks\App\QueryBuilders\BuffetOrderQueryBuilder;
use App\Modules\Stocks\App\Requests\CreateBuffetOrderRequest;
use App\Modules\Stocks\App\Requests\UpdateBuffetOrderRequest;
use App\Modules\Stocks\App\Transformers\BuffetOrderTransformer;
use App\Modules\Stocks\Domain\Actions\CreateBuffetOrderAction;
use App\Modules\Stocks\Domain\Actions\DeleteBuffetOrderAction;
use App\Modules\Stocks\Domain\Actions\UpdateBuffetOrderAction;
use App\Modules\Stocks\Domain\DataTransferObjects\CreateBuffetOrderDto;
use App\Modules\Stocks\Domain\DataTransferObjects\UpdateBuffetOrderDto;
use App\Modules\Stocks\Domain\Models\BuffetOrder;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class BuffetOrderController extends Controller
{
    /**
     * @param Request $request
     * @param BuffetOrderQueryBuilder $buffetOrderQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, BuffetOrderQueryBuilder $buffetOrderQueryBuilder): JsonResponse
    {
        $this->authorize('browse', BuffetOrder::class);

        return ApiResponse::indexResponse(
            $buffetOrderQueryBuilder->paginate($request->input('paginate')?? 15),
            BuffetOrderTransformer::class
        );
    }

    /**
     * @param BuffetOrder $buffetOrder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(BuffetOrder $buffetOrder): JsonResponse {
        $this->authorize('view', BuffetOrder::class);

        return ApiResponse::showResponse($buffetOrder, BuffetOrderTransformer::class);
    }

    /**
     * @param CreateBuffetOrderAction $createBuffetOrderAction
     * @param CreateBuffetOrderRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateBuffetOrderAction $createBuffetOrderAction, CreateBuffetOrderRequest $request): JsonResponse
    {
        $this->authorize('store', BuffetOrder::class);

        $buffetOrder = $createBuffetOrderAction(CreateBuffetOrderDto::fromRequest($request));

        return ApiResponse::createResponse($buffetOrder, BuffetOrderTransformer::class);
    }

    /**
     * @param UpdateBuffetOrderAction $updateBuffetOrderAction
     * @param UpdateBuffetOrderRequest $request
     * @param BuffetOrder $buffetOrder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateBuffetOrderAction $updateBuffetOrderAction, UpdateBuffetOrderRequest $request, BuffetOrder $buffetOrder): JsonResponse
    {
        $this->authorize('update', BuffetOrder::class);

        $updateBuffetOrderAction($buffetOrder, UpdateBuffetOrderDto::fromRequest($request));

        return ApiResponse::updateResponse(BuffetOrder::find($buffetOrder->id), BuffetOrderTransformer::class);
    }

    /**
     * @param DeleteBuffetOrderAction $deleteBuffetOrderAction
     * @param BuffetOrder $buffetOrder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteBuffetOrderAction $deleteBuffetOrderAction, BuffetOrder $buffetOrder): JsonResponse
    {
        $this->authorize('destroy', BuffetOrder::class);

        $deleteBuffetOrderAction($buffetOrder);

        return ApiResponse::deleteResponse();
    }

    /**
     * @param Request $request
     * @param BuffetOrderQueryBuilder $buffetOrderQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function statistics(Request $request, BuffetOrderQueryBuilder $buffetOrderQueryBuilder): JsonResponse
    {
        $this->authorize('browse', BuffetOrder::class);

        return ApiResponse::setData([
            'count' => $buffetOrderQueryBuilder->count(),
            'totalAmount' => $buffetOrderQueryBuilder->sum('total'),
        ])->execute();
    }
}
