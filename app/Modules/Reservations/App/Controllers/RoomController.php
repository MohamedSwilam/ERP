<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\QueryBuilders\RoomQueryBuilder;
use App\Modules\Reservations\App\Transformers\RoomTransformer;
use App\Modules\Reservations\Domain\Models\Room;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    /**
     * @param Request $request
     * @param RoomQueryBuilder $roomQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, RoomQueryBuilder $roomQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Room::class);

        return ApiResponse::indexResponse(
            $roomQueryBuilder->paginate($request->input('paginate')?? 50),
            RoomTransformer::class
        );
    }
}
