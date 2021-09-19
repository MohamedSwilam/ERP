<?php


namespace App\Modules\Customers\Domain\Actions;

use App\Modules\Customers\Domain\DataTransferObjects\UpdateCustomerDto;
use App\Modules\Customers\Domain\Models\Customer;

class UpdateCustomerAction
{
    /**
     * @param Customer $customer
     * @param UpdateCustomerDto $updateCustomerDto
     * @return bool
     */
    public function __invoke(Customer $customer, UpdateCustomerDto $updateCustomerDto): bool
    {
        return $customer->update($updateCustomerDto->toArray());
    }
}
