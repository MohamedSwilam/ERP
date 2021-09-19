<?php


namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\DataTransferObjects\CreateStockDto;
use App\Modules\Stocks\Domain\Models\Stock;

class CreateStockAction
{
    /**
     * @param CreateStockDto $createStockDto
     * @return Stock
     */
    public function __invoke(CreateStockDto $createStockDto): Stock
    {
        return Stock::create($createStockDto->toArray());
    }
}
