<?php

namespace App\Modules\Statistics\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Statistics\App\QueryBuilders\AccountingQueryBuilder;
use App\Modules\Statistics\App\Requests\CreateAccountingRequest;
use App\Modules\Statistics\App\Requests\UpdateAccountingRequest;
use App\Modules\Statistics\App\Transformers\AccountingTransformer;
use App\Modules\Statistics\Domain\Actions\CreateAccountingAction;
use App\Modules\Statistics\Domain\Actions\DeleteAccountingAction;
use App\Modules\Statistics\Domain\Actions\UpdateAccountingAction;
use App\Modules\Statistics\Domain\DataTransferObjects\CreateAccountingDto;
use App\Modules\Statistics\Domain\DataTransferObjects\UpdateAccountingDto;
use App\Modules\Statistics\Domain\Models\Accounting;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AccountingController extends Controller
{
    /**
     * @param Request $request
     * @param AccountingQueryBuilder $accountingQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, AccountingQueryBuilder $accountingQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Accounting::class);

        return ApiResponse::indexResponse(
            $accountingQueryBuilder->paginate($request->input('paginate')?? 15),
            AccountingTransformer::class
        );
    }

    /**
     * @param Accounting $accounting
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Accounting $accounting): JsonResponse {
        $this->authorize('view', Accounting::class);

        return ApiResponse::showResponse($accounting, AccountingTransformer::class);
    }

    /**
     * @param CreateAccountingAction $createAccountingAction
     * @param CreateAccountingRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateAccountingAction $createAccountingAction, CreateAccountingRequest $request): JsonResponse
    {
        $this->authorize('store', Accounting::class);

        $accounting = $createAccountingAction(CreateAccountingDto::fromRequest($request));

        return ApiResponse::createResponse($accounting, AccountingTransformer::class);
    }

    /**
     * @param UpdateAccountingAction $updateAccountingAction
     * @param UpdateAccountingRequest $request
     * @param Accounting $accounting
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateAccountingAction $updateAccountingAction, UpdateAccountingRequest $request, Accounting $accounting): JsonResponse
    {
        $this->authorize('update', Accounting::class);

        $updateAccountingAction($accounting, UpdateAccountingDto::fromRequest($request));

        return ApiResponse::updateResponse(Accounting::find($accounting->id), AccountingTransformer::class);
    }

    /**
     * @param DeleteAccountingAction $deleteAccountingAction
     * @param Accounting $accounting
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteAccountingAction $deleteAccountingAction, Accounting $accounting): JsonResponse
    {
        $this->authorize('destroy', Accounting::class);

        $deleteAccountingAction($accounting);

        return ApiResponse::deleteResponse();
    }
}
