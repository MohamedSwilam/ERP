<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\DataTransferObjects\UpdateOrderDto;
use App\Modules\Reservations\Domain\Models\Order;

class UpdateOrderAction
{
    /**
     * @param Order $order
     * @param UpdateOrderDto $updateOrderDto
     * @return Order
     */
    public function __invoke(Order $order, UpdateOrderDto $updateOrderDto): Order
    {
        $order->update($updateOrderDto->toArray());

        return $order;
    }
}
