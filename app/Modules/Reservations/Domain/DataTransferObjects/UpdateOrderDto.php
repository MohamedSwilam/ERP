<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\UpdateOrderRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateOrderDto extends DataTransferObject
{
    public string $seller;

    public ?string $payment_type;

    public float $paid;

    /**
     * @param UpdateOrderRequest $request
     * @return UpdateOrderDto
     */
    public static function fromRequest(UpdateOrderRequest $request): UpdateOrderDto
    {
        $data = $request->validated();

        $data['paid'] = (float) $data['paid'];

        return new self($data);
    }
}
