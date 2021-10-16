<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\CreatePackageRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreatePackageDto extends DataTransferObject
{
    public int $package_type_id;

    public string $name;

    public ?string $description;

    public ?bool $membership;

    public ?bool $is_flexible;

    public float $price;

    public float $tax;

    public int $hours;

    public int $expiration_in_hours;

    public int $customers_to_reserve;

    public ?int $customer_type_id;

    public array $rooms;

    /**
     * @param CreatePackageRequest $request
     * @return CreatePackageDto
     */
    public static function fromRequest(CreatePackageRequest $request): CreatePackageDto
    {
        $data = $request->validated();

        $data['package_type_id'] = (int) $data['package_type_id'];
        $data['membership'] = (bool) $data['membership'];
        $data['is_flexible'] = (bool) $data['is_flexible'];
        $data['price'] = (float) $data['price'];
        $data['tax'] = (float) $data['tax'];
        $data['hours'] = (int) $data['hours'];
        $data['expiration_in_hours'] = (int) $data['expiration_in_hours'];
        $data['customers_to_reserve'] = (int) $data['customers_to_reserve'];
        $data['customer_type_id'] = $data['customer_type_id']
                                    ? (int) $data['customer_type_id'] : null;

        return new self($data);
    }
}
