<?php

namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\Models\BuffetOrder;
use App\Modules\Stocks\Domain\Models\Stock;

class DeleteBuffetOrderAction
{
    /**
     * @param BuffetOrder $buffetOrder
     * @return bool|null
     */
    public function __invoke(BuffetOrder $buffetOrder): ?bool
    {
        foreach ($buffetOrder->stocks as $stock) {
            $stockData = Stock::find($stock->pivot->stock_id);
            $remaining = $stockData['quantity'] + $stock->pivot->quantity;
            $stockData->update([
                'quantity' => $remaining
            ]);
        }
        return $buffetOrder->delete();
    }
}
