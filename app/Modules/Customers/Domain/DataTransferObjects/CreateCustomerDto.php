<?php


namespace App\Modules\Customers\Domain\DataTransferObjects;


use App\Modules\Customers\App\Requests\CreateCustomerRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreateCustomerDto extends DataTransferObject
{
    public string $name;

    public string $phone;

    public string $email;

    public string $national_id;

    public string $date_of_birth;

    public string $address;

    public ?int $customer_type_id;

    /**
     * @param CreateCustomerRequest $request
     * @return CreateCustomerDto
     */
    public static function fromRequest(CreateCustomerRequest $request): CreateCustomerDto
    {
        $data = $request->validated();

        $data['customer_type_id'] = (int) $data['customer_type_id'];

        return new self($data);
    }
}
