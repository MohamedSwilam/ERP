<?php


namespace App\Modules\Customers\Domain\Actions;


use App\Modules\Customers\Domain\Models\Customer;

class DeleteCustomerAction
{
    public function __invoke(Customer $customer): ?bool
    {
        return $customer->delete();
    }
}
