<?php


namespace App\Modules\Stocks\Domain\Actions;

use App\Modules\Stocks\Domain\DataTransferObjects\CreateBuffetOrderDto;
use App\Modules\Stocks\Domain\Models\BuffetOrder;

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

        return $buffetOrder;
    }
}
