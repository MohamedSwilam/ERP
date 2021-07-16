<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\QueryBuilders\PackageQueryBuilder;
use App\Modules\Reservations\App\Requests\CreatePackageRequest;
use App\Modules\Reservations\App\Requests\UpdatePackageRequest;
use App\Modules\Reservations\App\Transformers\PackageTransformer;
use App\Modules\Reservations\Domain\Actions\CreatePackageAction;
use App\Modules\Reservations\Domain\Actions\DeletePackageAction;
use App\Modules\Reservations\Domain\Actions\UpdatePackageAction;
use App\Modules\Reservations\Domain\DataTransferObjects\CreatePackageDto;
use App\Modules\Reservations\Domain\DataTransferObjects\UpdatePackageDto;
use App\Modules\Reservations\Domain\Models\Package;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * @param Request $request
     * @param PackageQueryBuilder $packageQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, PackageQueryBuilder $packageQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Package::class);

        return ApiResponse::indexResponse(
            $packageQueryBuilder->paginate($request->input('paginate')?? 15),
            PackageTransformer::class
        );
    }

    /**
     * @param Package $package
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Package $package): JsonResponse {
        $this->authorize('view', Package::class);

        return ApiResponse::showResponse($package, PackageTransformer::class);
    }

    /**
     * @param CreatePackageAction $createPackageAction
     * @param CreatePackageRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreatePackageAction $createPackageAction, CreatePackageRequest $request): JsonResponse
    {
        $this->authorize('store', Package::class);

        $package = $createPackageAction(CreatePackageDto::fromRequest($request));

        return ApiResponse::createResponse($package, PackageTransformer::class);
    }

    /**
     * @param UpdatePackageAction $updatePackageAction
     * @param UpdatePackageRequest $request
     * @param Package $package
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdatePackageAction $updatePackageAction, UpdatePackageRequest $request, Package $package): JsonResponse
    {
        $this->authorize('update', Package::class);

        $updatePackageAction($package, UpdatePackageDto::fromRequest($request));

        return ApiResponse::updateResponse(Package::find($package->id), PackageTransformer::class);
    }

    /**
     * @param DeletePackageAction $deletePackageAction
     * @param Package $package
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeletePackageAction $deletePackageAction, Package $package): JsonResponse
    {
        $this->authorize('destroy', Package::class);

        $deletePackageAction($package);

        return ApiResponse::deleteResponse();
    }
}
