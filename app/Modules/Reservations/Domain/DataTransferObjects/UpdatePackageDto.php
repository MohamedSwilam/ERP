<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\UpdatePackageRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdatePackageDto extends DataTransferObject
{
    public int $package_type_id;

    public string $name;

    public ?string $description;

    public ?bool $membership;

    public float $price;

    public float $tax;

    public int $hours;

    public int $expiration_in_hours;

    public int $customers_to_reserve;

    public int $customer_type_id;

    public array $rooms;

    /**
     * @param UpdatePackageRequest $request
     * @return UpdatePackageDto
     */
    public static function fromRequest(UpdatePackageRequest $request): UpdatePackageDto
    {
        $data = $request->validated();

        $data['package_type_id'] = (int) $data['package_type_id'];
        $data['membership'] = (bool) $data['membership'];
        $data['price'] = (float) $data['price'];
        $data['tax'] = (float) $data['tax'];
        $data['hours'] = (int) $data['hours'];
        $data['expiration_in_hours'] = (int) $data['expiration_in_hours'];
        $data['customers_to_reserve'] = (int) $data['customers_to_reserve'];
        $data['customer_type_id'] = (int) $data['customer_type_id'];

        return new self($data);
    }
}
