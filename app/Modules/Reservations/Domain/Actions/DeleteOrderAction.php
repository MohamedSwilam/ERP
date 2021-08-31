<?php

namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\Models\Order;

class DeleteOrderAction
{
    public function __invoke(Order $order): ?bool
    {
        return $order->delete();
    }
}
