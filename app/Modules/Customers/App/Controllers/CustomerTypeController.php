<?php

namespace App\Modules\Customers\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Customers\App\QueryBuilders\CustomerTypeQueryBuilder;
use App\Modules\Customers\App\Transformers\CustomerTypeTransformer;
use App\Modules\Customers\Domain\Models\CustomerType;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerTypeController extends Controller
{
    /**
     * @param Request $request
     * @param CustomerTypeQueryBuilder $customerTypeQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, CustomerTypeQueryBuilder $customerTypeQueryBuilder): JsonResponse
    {
        $this->authorize('browse', CustomerType::class);

        return ApiResponse::indexResponse(
            $customerTypeQueryBuilder->paginate($request->input('paginate')?? 50),
            CustomerTypeTransformer::class
        );
    }
}
