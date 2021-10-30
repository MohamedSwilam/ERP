<?php


namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\DataTransferObjects\UpdateBuffetOrderDto;
use App\Modules\Stocks\Domain\Models\BuffetOrder;
use App\Modules\Stocks\Domain\Models\Stock;

class UpdateBuffetOrderAction
{
    /**
     * @param BuffetOrder $buffetOrder
     * @param UpdateBuffetOrderDto $updateBuffetOrderDto
     * @return BuffetOrder
     */
    public function __invoke(BuffetOrder $buffetOrder, UpdateBuffetOrderDto $updateBuffetOrderDto): BuffetOrder
    {
        foreach ($buffetOrder->stocks as $stock) {
            $stockData = Stock::find($stock->pivot->stock_id);
            $remaining = $stockData['quantity'] + $stock->pivot->quantity;
            $stockData->update([
                'quantity' => $remaining
            ]);
        }

        $buffetOrder->update($updateBuffetOrderDto->toArray());

        $buffetOrder->stocks()->sync($updateBuffetOrderDto->stocks);

        foreach ($updateBuffetOrderDto->stocks as $stock) {
            $stockData = Stock::find($stock['stock_id']);
            $remaining = $stockData['quantity'] - $stock['quantity'];
            $stockData->update([
                'quantity' => $remaining
            ]);
        }

        return $buffetOrder;
    }
}
