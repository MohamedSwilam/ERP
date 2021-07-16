<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\CreatePackageRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreatePackageDto extends DataTransferObject
{
    public string $title;

    public ?string $description;

    public ?bool $membership;

    public float $price;

    public float $tax;

    public array $rooms;

    /**
     * @param CreatePackageRequest $request
     * @return CreatePackageDto
     */
    public static function fromRequest(CreatePackageRequest $request): CreatePackageDto
    {
        $data = $request->validated();

        $data['membership'] = (bool) $data['membership'];
        $data['price'] = (float) $data['price'];
        $data['tax'] = (float) $data['tax'];

        return new self($data);
    }
}
