<?php


namespace App\Modules\Reservations\Domain\Actions;


use App\Modules\Reservations\Domain\DataTransferObjects\CreateOrderDto;
use App\Modules\Reservations\Domain\Models\Order;

class CreateOrderAction
{
    /**
     * @param CreateOrderDto $createOrderDto
     * @return Order
     */
    public function __invoke(CreateOrderDto $createOrderDto): Order
    {
        $order = Order::create($createOrderDto->toArray());

        $order->customers()->sync($createOrderDto->customers);

        return $order;
    }
}
