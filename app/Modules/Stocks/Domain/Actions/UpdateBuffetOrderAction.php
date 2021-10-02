<?php


namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\DataTransferObjects\UpdateBuffetOrderDto;
use App\Modules\Stocks\Domain\Models\BuffetOrder;

class UpdateBuffetOrderAction
{
    /**
     * @param BuffetOrder $buffetOrder
     * @param UpdateBuffetOrderDto $updateBuffetOrderDto
     * @return BuffetOrder
     */
    public function __invoke(BuffetOrder $buffetOrder, UpdateBuffetOrderDto $updateBuffetOrderDto): BuffetOrder
    {
        $buffetOrder->update($updateBuffetOrderDto->toArray());

        $buffetOrder->stocks()->sync($updateBuffetOrderDto->stocks);

        return $buffetOrder;
    }
}
