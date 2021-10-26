<?php

namespace App\Modules\Statistics\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Statistics\App\QueryBuilders\EmployerQueryBuilder;
use App\Modules\Statistics\App\Requests\CreateEmployerRequest;
use App\Modules\Statistics\App\Requests\UpdateEmployerRequest;
use App\Modules\Statistics\App\Transformers\EmployerTransformer;
use App\Modules\Statistics\Domain\Actions\CreateEmployerAction;
use App\Modules\Statistics\Domain\Actions\DeleteEmployerAction;
use App\Modules\Statistics\Domain\Actions\UpdateEmployerAction;
use App\Modules\Statistics\Domain\DataTransferObjects\CreateEmployerDto;
use App\Modules\Statistics\Domain\DataTransferObjects\UpdateEmployerDto;
use App\Modules\Statistics\Domain\Models\Employer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmployerController extends Controller
{
    /**
     * @param Request $request
     * @param EmployerQueryBuilder $employerQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, EmployerQueryBuilder $employerQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Employer::class);

        return ApiResponse::indexResponse(
            $employerQueryBuilder->paginate($request->input('paginate')?? 15),
            EmployerTransformer::class
        );
    }

    /**
     * @param Employer $employer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Employer $employer): JsonResponse {
        $this->authorize('view', Employer::class);

        return ApiResponse::showResponse($employer, EmployerTransformer::class);
    }

    /**
     * @param CreateEmployerAction $createEmployerAction
     * @param CreateEmployerRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateEmployerAction $createEmployerAction, CreateEmployerRequest $request): JsonResponse
    {
        $this->authorize('store', Employer::class);

        $employer = $createEmployerAction(CreateEmployerDto::fromRequest($request));

        return ApiResponse::createResponse($employer, EmployerTransformer::class);
    }

    /**
     * @param UpdateEmployerAction $updateEmployerAction
     * @param UpdateEmployerRequest $request
     * @param Employer $employer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateEmployerAction $updateEmployerAction, UpdateEmployerRequest $request, Employer $employer): JsonResponse
    {
        $this->authorize('update', Employer::class);

        $updateEmployerAction($employer, UpdateEmployerDto::fromRequest($request));

        return ApiResponse::updateResponse(Employer::find($employer->id), EmployerTransformer::class);
    }

    /**
     * @param DeleteEmployerAction $deleteEmployerAction
     * @param Employer $employer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteEmployerAction $deleteEmployerAction, Employer $employer): JsonResponse
    {
        $this->authorize('destroy', Employer::class);

        $deleteEmployerAction($employer);

        return ApiResponse::deleteResponse();
    }
}
