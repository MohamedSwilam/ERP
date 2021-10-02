<?php

namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\Models\BuffetOrder;

class DeleteBuffetOrderAction
{
    /**
     * @param BuffetOrder $buffetOrder
     * @return bool|null
     */
    public function __invoke(BuffetOrder $buffetOrder): ?bool
    {
        return $buffetOrder->delete();
    }
}
