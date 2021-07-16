<?php


namespace App\Modules\Customers\Domain\DataTransferObjects;


use App\Modules\Customers\App\Requests\CreateCustomerRequest;
use App\Modules\Customers\App\Requests\UpdateCustomerRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateCustomerDto extends DataTransferObject
{
    public string $name;

    public string $phone;

    public string $email;

    public string $national_id;

    public string $date_of_birth;

    public string $address;

    public ?int $customer_type_id;

    /**
     * @param UpdateCustomerRequest $request
     * @return UpdateCustomerDto
     */
    public static function fromRequest(UpdateCustomerRequest $request): UpdateCustomerDto
    {
        $data = $request->validated();

        $data['customer_type_id'] = (int) $data['customer_type_id'];

        return new self($data);
    }
}
