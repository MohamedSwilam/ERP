<?php


namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\DataTransferObjects\CreateBuffetOrderDto;
use App\Modules\Stocks\Domain\Models\BuffetOrder;
use App\Modules\Stocks\Domain\Models\Stock;

class CreateBuffetOrderAction
{
    /**
     * @param CreateBuffetOrderDto $createBuffetOrderDto
     * @return BuffetOrder
     */
    public function __invoke(CreateBuffetOrderDto $createBuffetOrderDto): BuffetOrder
    {
        $buffetOrder = BuffetOrder::create($createBuffetOrderDto->toArray());

        $buffetOrder->stocks()->sync($createBuffetOrderDto->stocks);

        foreach ($createBuffetOrderDto->stocks as $stock) {
            $stockData = Stock::find($stock['stock_id']);
            $remaining = $stockData['quantity'] - $stock['quantity'];
            $stockData->update([
                'quantity' => $remaining
            ]);
        }

        return $buffetOrder;
    }
}
