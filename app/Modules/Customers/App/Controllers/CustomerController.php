<?php

namespace App\Modules\Customers\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Customers\App\QueryBuilders\CustomerQueryBuilder;
use App\Modules\Customers\App\Requests\CreateCustomerRequest;
use App\Modules\Customers\App\Requests\UpdateCustomerRequest;
use App\Modules\Customers\App\Transformers\CustomerTransformer;
use App\Modules\Customers\Domain\Actions\CreateCustomerAction;
use App\Modules\Customers\Domain\Actions\DeleteCustomerAction;
use App\Modules\Customers\Domain\Actions\UpdateCustomerAction;
use App\Modules\Customers\Domain\DataTransferObjects\CreateCustomerDto;
use App\Modules\Customers\Domain\DataTransferObjects\UpdateCustomerDto;
use App\Modules\Customers\Domain\Models\Customer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * @param Request $request
     * @param CustomerQueryBuilder $customerQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, CustomerQueryBuilder $customerQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Customer::class);

        return ApiResponse::indexResponse(
            $customerQueryBuilder->paginate($request->input('paginate')?? 15),
            CustomerTransformer::class
        );
    }

    /**
     * @param Customer $customer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Customer $customer): JsonResponse {
        $this->authorize('view', Customer::class);

        return ApiResponse::showResponse($customer, CustomerTransformer::class);
    }

    /**
     * @param CreateCustomerAction $createCustomerAction
     * @param CreateCustomerRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateCustomerAction $createCustomerAction, CreateCustomerRequest $request): JsonResponse
    {
        $this->authorize('store', Customer::class);

        $customer = $createCustomerAction(CreateCustomerDto::fromRequest($request));

        return ApiResponse::createResponse($customer, CustomerTransformer::class);
    }

    /**
     * @param UpdateCustomerAction $updateCustomerAction
     * @param UpdateCustomerRequest $request
     * @param Customer $customer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateCustomerAction $updateCustomerAction, UpdateCustomerRequest $request, Customer $customer): JsonResponse
    {
        $this->authorize('update', Customer::class);

        $updateCustomerAction($customer, UpdateCustomerDto::fromRequest($request));

        return ApiResponse::updateResponse($customer, CustomerTransformer::class);
    }

    /**
     * @param DeleteCustomerAction $deleteCustomerAction
     * @param Customer $customer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteCustomerAction $deleteCustomerAction, Customer $customer): JsonResponse
    {
        $this->authorize('destroy', Customer::class);

        $deleteCustomerAction($customer);

        return ApiResponse::deleteResponse();
    }
}
