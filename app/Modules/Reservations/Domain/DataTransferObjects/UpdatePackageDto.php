<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\UpdatePackageRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdatePackageDto extends DataTransferObject
{
    public string $title;

    public ?string $description;

    public ?bool $membership;

    public float $price;

    public float $tax;

    public array $rooms;

    /**
     * @param UpdatePackageRequest $request
     * @return UpdatePackageDto
     */
    public static function fromRequest(UpdatePackageRequest $request): UpdatePackageDto
    {
        $data = $request->validated();

        $data['membership'] = (bool) $data['membership'];
        $data['price'] = (float) $data['price'];
        $data['tax'] = (float) $data['tax'];

        return new self($data);
    }
}
