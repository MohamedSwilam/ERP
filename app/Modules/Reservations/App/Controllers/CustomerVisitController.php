<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\QueryBuilders\CustomerVisitQueryBuilder;
use App\Modules\Reservations\App\Requests\UpdateVisitRequest;
use App\Modules\Reservations\App\Transformers\VisitTransformer;
use App\Modules\Reservations\Domain\Actions\DeleteVisitAction;
use App\Modules\Reservations\Domain\Actions\UpdateVisitAction;
use App\Modules\Reservations\Domain\DataTransferObjects\UpdateVisitDto;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerVisitController extends Controller
{
    /**
     * @param Request $request
     * @param CustomerVisitQueryBuilder $customerVisitQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, CustomerVisitQueryBuilder $customerVisitQueryBuilder): JsonResponse
    {
        $this->authorize('browse', CustomerVisit::class);

        return ApiResponse::indexResponse(
            $customerVisitQueryBuilder->paginate($request->input('paginate')?? 15),
            VisitTransformer::class
        );
    }

    /**
     * @param CustomerVisit $visit
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(CustomerVisit $visit): JsonResponse {
        $this->authorize('view', CustomerVisit::class);

        return ApiResponse::showResponse($visit, VisitTransformer::class);
    }

    /**
     * @param UpdateVisitAction $updateVisitAction
     * @param UpdateVisitRequest $request
     * @param CustomerVisit $customerVisit
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateVisitAction $updateVisitAction, UpdateVisitRequest $request, CustomerVisit $visit): JsonResponse
    {
        $this->authorize('update', CustomerVisit::class);

        $updateVisitAction($visit, UpdateVisitDto::fromRequest($request));

        return ApiResponse::updateResponse(CustomerVisit::find($visit->id), VisitTransformer::class);
    }

    /**
     * @param DeleteVisitAction $deleteVisitAction
     * @param CustomerVisit $visit
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteVisitAction $deleteVisitAction, CustomerVisit $visit): JsonResponse
    {
        $this->authorize('destroy', CustomerVisit::class);

        $deleteVisitAction($visit);

        return ApiResponse::deleteResponse();
    }
}
