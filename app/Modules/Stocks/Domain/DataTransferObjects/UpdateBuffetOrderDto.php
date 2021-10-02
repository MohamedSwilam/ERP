<?php


namespace App\Modules\Stocks\Domain\DataTransferObjects;

use App\Modules\Stocks\App\Requests\CreateBuffetOrderRequest;
use App\Modules\Stocks\App\Requests\UpdateBuffetOrderRequest;
use App\Modules\Stocks\Domain\Models\Stock;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateBuffetOrderDto extends DataTransferObject
{
    public int $customer_id;

    public int $discount;

    public array $stocks;

    public ?float $total;

    /**
     * @param UpdateBuffetOrderRequest $request
     * @return UpdateBuffetOrderDto
     */
    public static function fromRequest(UpdateBuffetOrderRequest $request): UpdateBuffetOrderDto
    {
        $data = $request->validated();

        $data['customer_id'] = (int) $data['customer_id'];
        $data['discount'] = (int) $data['discount'];

        $total = 0;
        for ($i = 0; $i < count($data['stocks']); $i++) {
            $stock = Stock::query()->find($data['stocks'][$i]['stock_id']);
            $data['stocks'][$i]['price'] = $stock['sale_price'];
            $total += $stock['sale_price'];
        }
        $data['total'] = $total - $total * $data['discount'] / 100;

        return new self($data);
    }
}
