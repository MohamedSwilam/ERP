<?php

namespace App\Modules\Authentication\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Authentication\App\QueryBuilders\UserQueryBuilder;
use App\Modules\Authentication\App\Requests\CreateUserRequest;
use App\Modules\Authentication\App\Requests\UpdateUserRequest;
use App\Modules\Authentication\App\Transformers\UserTransformer;
use App\Modules\Authentication\Domain\Actions\DeleteUserAction;
use App\Modules\Authentication\Domain\Actions\EditUserAction;
use App\Modules\Authentication\Domain\Actions\StoreUserAction;
use App\Modules\Authentication\Domain\DataTransferObjects\CreateUserDto;
use App\Modules\Authentication\Domain\DataTransferObjects\UpdateUserDto;
use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index(Request $request, UserQueryBuilder $userQueryBuilder): JsonResponse
    {
        $this->authorize('browse', User::class);

        return ApiResponse::indexResponse(
            $userQueryBuilder->paginate($request->input('paginate')?? 15),
            UserTransformer::class
        );
    }

    public function show(User $user): JsonResponse
    {
        $this->authorize('view', $user);

        return ApiResponse::showResponse($user->load(['roles', 'permissions']), UserTransformer::class);
    }

    public function store(StoreUserAction $storeUserAction, CreateUserRequest $request): JsonResponse
    {
        $this->authorize('store', User::class);

        $user = $storeUserAction(CreateUserDto::fromRequest($request));

        return ApiResponse::createResponse($user, UserTransformer::class);
    }

    public function update(EditUserAction $editUserAction, UpdateUserRequest $request, User $user): JsonResponse
    {
        $this->authorize('update', User::class);

        $user = $editUserAction($request->user(), $user, UpdateUserDto::fromRequest($request));

        return ApiResponse::updateResponse($user, UserTransformer::class);
    }

    public function destroy(DeleteUserAction $deleteUserAction, User $user): JsonResponse
    {
        $this->authorize('destroy', $user);

        $deleteUserAction($user);

        return ApiResponse::deleteResponse();
    }

    public function personalInformation(Request $request): JsonResponse
    {
        $user = $request->user();
        $user->allPermissions = $user->getAllPermissions();
        return ApiResponse::showResponse($user, UserTransformer::class);
    }
}
