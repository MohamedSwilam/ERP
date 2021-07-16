<?php


namespace App\Modules\Customers\Domain\Actions;


use App\Modules\Customers\Domain\DataTransferObjects\CreateCustomerDto;
use App\Modules\Customers\Domain\Models\Customer;

class CreateCustomerAction
{
    /**
     * @param CreateCustomerDto $customerDto
     * @return Customer
     */
    public function __invoke(CreateCustomerDto $customerDto): Customer
    {
        return Customer::create($customerDto->toArray());
    }
}
