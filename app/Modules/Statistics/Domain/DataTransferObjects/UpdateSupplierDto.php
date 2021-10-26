<?php

namespace App\Modules\Statistics\Domain\DataTransferObjects;

use App\Modules\Statistics\App\Requests\UpdateSupplierRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateSupplierDto extends DataTransferObject
{
    public string $name;

    public ?string $phone;

    public ?string $email;

    public ?string $product;

    public ?string $code;

    public ?string $payment_type;

    /**
     * @param UpdateSupplierRequest $request
     * @return UpdateSupplierDto
     */
    public static function fromRequest(UpdateSupplierRequest $request): UpdateSupplierDto
    {
        $data = $request->validated();

        return new self($data);
    }
}
