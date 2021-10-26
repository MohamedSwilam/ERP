<?php


namespace App\Modules\Statistics\Domain\DataTransferObjects;

use App\Modules\Statistics\App\Requests\CreateEmployerRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreateEmployerDto extends DataTransferObject
{
    public string $name;

    public ?string $phone;

    public ?string $address;

    public ?string $national_id;

    public ?string $joining_date;

    public ?string $salary;

    public ?string $military_status;

    public ?string $criminal_record_status;

    public ?string $medical_insurance_number;

    public ?string $social_insurance_number;

    /**
     * @param CreateEmployerRequest $request
     * @return CreateEmployerDto
     */
    public static function fromRequest(CreateEmployerRequest $request): CreateEmployerDto
    {
        $data = $request->validated();

        return new self($data);
    }
}
