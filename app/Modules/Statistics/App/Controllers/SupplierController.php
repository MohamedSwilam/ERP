<?php

namespace App\Modules\Statistics\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Statistics\App\QueryBuilders\SupplierQueryBuilder;
use App\Modules\Statistics\App\Requests\CreateSupplierRequest;
use App\Modules\Statistics\App\Requests\UpdateSupplierRequest;
use App\Modules\Statistics\App\Transformers\SupplierTransformer;
use App\Modules\Statistics\Domain\Actions\CreateSupplierAction;
use App\Modules\Statistics\Domain\Actions\DeleteSupplierAction;
use App\Modules\Statistics\Domain\Actions\UpdateSupplierAction;
use App\Modules\Statistics\Domain\DataTransferObjects\CreateSupplierDto;
use App\Modules\Statistics\Domain\DataTransferObjects\UpdateSupplierDto;
use App\Modules\Statistics\Domain\Models\Supplier;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SupplierController extends Controller
{
    /**
     * @param Request $request
     * @param SupplierQueryBuilder $supplierQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, SupplierQueryBuilder $supplierQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Supplier::class);

        return ApiResponse::indexResponse(
            $supplierQueryBuilder->paginate($request->input('paginate')?? 15),
            SupplierTransformer::class
        );
    }

    /**
     * @param Supplier $supplier
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Supplier $supplier): JsonResponse {
        $this->authorize('view', Supplier::class);

        return ApiResponse::showResponse($supplier, SupplierTransformer::class);
    }

    /**
     * @param CreateSupplierAction $createSupplierAction
     * @param CreateSupplierRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateSupplierAction $createSupplierAction, CreateSupplierRequest $request): JsonResponse
    {
        $this->authorize('store', Supplier::class);

        $supplier = $createSupplierAction(CreateSupplierDto::fromRequest($request));

        return ApiResponse::createResponse($supplier, SupplierTransformer::class);
    }

    /**
     * @param UpdateSupplierAction $updateSupplierAction
     * @param UpdateSupplierRequest $request
     * @param Supplier $supplier
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateSupplierAction $updateSupplierAction, UpdateSupplierRequest $request, Supplier $supplier): JsonResponse
    {
        $this->authorize('update', Supplier::class);

        $updateSupplierAction($supplier, UpdateSupplierDto::fromRequest($request));

        return ApiResponse::updateResponse(Supplier::find($supplier->id), SupplierTransformer::class);
    }

    /**
     * @param DeleteSupplierAction $deleteSupplierAction
     * @param Supplier $supplier
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteSupplierAction $deleteSupplierAction, Supplier $supplier): JsonResponse
    {
        $this->authorize('destroy', Supplier::class);

        $deleteSupplierAction($supplier);

        return ApiResponse::deleteResponse();
    }
}
