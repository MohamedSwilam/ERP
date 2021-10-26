<?php


namespace App\Modules\Statistics\Domain\DataTransferObjects;

use App\Modules\Statistics\App\Requests\CreateSupplierRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreateSupplierDto extends DataTransferObject
{
    public string $name;

    public ?string $phone;

    public ?string $email;

    public ?string $product;

    public ?string $code;

    public ?string $payment_type;

    /**
     * @param CreateSupplierRequest $request
     * @return CreateSupplierDto
     */
    public static function fromRequest(CreateSupplierRequest $request): CreateSupplierDto
    {
        $data = $request->validated();

        return new self($data);
    }
}
