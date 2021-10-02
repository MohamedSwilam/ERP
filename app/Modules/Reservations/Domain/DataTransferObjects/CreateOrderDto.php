<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\CreateOrderRequest;
use App\Modules\Reservations\Domain\Models\Package;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class CreateOrderDto extends DataTransferObject
{
    public int $package_id;

    public int $total_hours;

    public int $remaining_hours;

    public string $starts_at;

    public string $expires_at;

    public float $discount;

    public string $seller;

    public int $created_by;

    public array $customers;

    public float $paid;

    public ?float $total;

    /**
     * @param CreateOrderRequest $request
     * @return CreateOrderDto
     */
    public static function fromRequest(CreateOrderRequest $request): CreateOrderDto
    {
        $data = $request->validated();

        $package = Package::find($data['package_id']);

        $data['package_id'] = (int) $data['package_id'];
        $data['discount'] = (float) $data['discount'];

        $data['paid'] = (float) $data['paid'];
        $data['total'] = $package['price'] - $package['price'] * $data['discount'] / 100;

        $data['total_hours'] = $package['hours'];
        $data['remaining_hours'] = $package['hours'];

        $data['starts_at'] = Carbon::make($data['starts_at'])->toDateTimeString();
        $data['expires_at'] = Carbon::make($data['starts_at'])->addHours($package['expiration_in_hours'])->toDateTimeString();

        $data['created_by'] = (int)$request->user()->id;

        return new self($data);
    }
}
