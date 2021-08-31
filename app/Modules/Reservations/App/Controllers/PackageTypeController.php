<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\QueryBuilders\PackageTypeQueryBuilder;
use App\Modules\Reservations\App\Transformers\PackageTypeTransformer;
use App\Modules\Reservations\Domain\Models\PackageType;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PackageTypeController extends Controller
{
    /**
     * @param Request $request
     * @param PackageTypeQueryBuilder $packageTypeQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, PackageTypeQueryBuilder $packageTypeQueryBuilder): JsonResponse
    {
        $this->authorize('browse', PackageType::class);

        return ApiResponse::indexResponse(
            $packageTypeQueryBuilder->paginate($request->input('paginate')?? 50),
            PackageTypeTransformer::class
        );
    }
}
