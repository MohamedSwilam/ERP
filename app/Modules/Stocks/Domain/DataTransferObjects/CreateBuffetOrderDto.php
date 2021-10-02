<?php


namespace App\Modules\Stocks\Domain\DataTransferObjects;

use App\Modules\Stocks\App\Requests\CreateBuffetOrderRequest;
use App\Modules\Stocks\Domain\Models\Stock;
use Spatie\DataTransferObject\DataTransferObject;

class CreateBuffetOrderDto extends DataTransferObject
{
    public int $customer_id;

    public int $discount;

    public array $stocks;

    public ?float $total;

    /**
     * @param CreateBuffetOrderRequest $request
     * @return CreateBuffetOrderDto
     */
    public static function fromRequest(CreateBuffetOrderRequest $request): CreateBuffetOrderDto
    {
        $data = $request->validated();

        $data['customer_id'] = (int) $data['customer_id'];
        $data['discount'] = (int) $data['discount'];

        $total = 0;
        for ($i = 0; $i < count($data['stocks']); $i++) {
            $stock = Stock::query()->find($data['stocks'][$i]['stock_id']);
            $data['stocks'][$i]['price'] = $stock['sale_price'];
            $total += $stock['sale_price'] * $data['stocks'][$i]['quantity'];
        }

        $data['total'] = $total - $total * $data['discount'] / 100;

        return new self($data);
    }
}
