<?php

namespace App\Modules\Stocks\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Stocks\App\QueryBuilders\StockQueryBuilder;
use App\Modules\Stocks\App\Requests\CreateStockRequest;
use App\Modules\Stocks\App\Requests\UpdateStockRequest;
use App\Modules\Stocks\App\Transformers\StockTransformer;
use App\Modules\Stocks\Domain\Actions\CreateStockAction;
use App\Modules\Stocks\Domain\Actions\DeleteStockAction;
use App\Modules\Stocks\Domain\Actions\UpdateStockAction;
use App\Modules\Stocks\Domain\DataTransferObjects\CreateStockDto;
use App\Modules\Stocks\Domain\DataTransferObjects\UpdateStockDto;
use App\Modules\Stocks\Domain\Models\Stock;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StockController extends Controller
{
    /**
     * @param Request $request
     * @param StockQueryBuilder $stockQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, StockQueryBuilder $stockQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Stock::class);

        return ApiResponse::indexResponse(
            $stockQueryBuilder->paginate($request->input('paginate')?? 15),
            StockTransformer::class
        );
    }

    /**
     * @param Stock $stock
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Stock $stock): JsonResponse {
        $this->authorize('view', Stock::class);

        return ApiResponse::showResponse($stock, StockTransformer::class);
    }

    /**
     * @param CreateStockAction $createStockAction
     * @param CreateStockRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateStockAction $createStockAction, CreateStockRequest $request): JsonResponse
    {
        $this->authorize('store', Stock::class);

        $stock = $createStockAction(CreateStockDto::fromRequest($request));

        return ApiResponse::createResponse($stock, StockTransformer::class);
    }

    /**
     * @param UpdateStockAction $updateStockAction
     * @param UpdateStockRequest $request
     * @param Stock $stock
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateStockAction $updateStockAction, UpdateStockRequest $request, Stock $stock): JsonResponse
    {
        $this->authorize('update', Stock::class);

        $updateStockAction($stock, UpdateStockDto::fromRequest($request));

        return ApiResponse::updateResponse(Stock::find($stock->id), StockTransformer::class);
    }

    /**
     * @param DeleteStockAction $deleteStockAction
     * @param Stock $stock
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteStockAction $deleteStockAction, Stock $stock): JsonResponse
    {
        $this->authorize('destroy', Stock::class);

        $deleteStockAction($stock);

        return ApiResponse::deleteResponse();
    }
}
