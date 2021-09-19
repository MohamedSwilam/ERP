<?php

namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\Models\Stock;

class DeleteStockAction
{
    /**
     * @param Stock $stock
     * @return bool|null
     */
    public function __invoke(Stock $stock): ?bool
    {
        return $stock->delete();
    }
}
