<?php


namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\DataTransferObjects\UpdateStockDto;
use App\Modules\Stocks\Domain\Models\Stock;

class UpdateStockAction
{
    /**
     * @param Stock $stock
     * @param UpdateStockDto $updateStockDto
     * @return Stock
     */
    public function __invoke(Stock $stock, UpdateStockDto $updateStockDto): Stock
    {
        $stock->update($updateStockDto->toArray());

        return $stock;
    }
}
