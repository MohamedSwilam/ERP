<?php


namespace App\Modules\Customers\Domain\DataTransferObjects;


use App\Modules\Customers\App\Requests\CreateCustomerRequest;
use App\Modules\Customers\App\Requests\UpdateCustomerRequest;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateCustomerDto extends DataTransferObject
{
    public string $name;

    public string $phone;

    public ?string $email;

    public ?string $national_id;

    public string $date_of_birth;

    public string $address;

    public ?int $customer_type_id;

    public ?string $last_follow_up;

    public ?string $next_follow_up;

    /**
     * @param UpdateCustomerRequest $request
     * @return UpdateCustomerDto
     */
    public static function fromRequest(UpdateCustomerRequest $request): UpdateCustomerDto
    {
        $data = $request->validated();

        $data['customer_type_id'] = (int) $data['customer_type_id'];

        if ($data['last_follow_up'])
            $data['last_follow_up'] = Carbon::make($data['last_follow_up'])->toDateTimeString();

        if ($data['next_follow_up'])
            $data['next_follow_up'] = Carbon::make($data['next_follow_up'])->toDateTimeString();

        return new self($data);
    }
}
