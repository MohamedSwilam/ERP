<?php


namespace App\Modules\Stocks\Domain\DataTransferObjects;


use App\Modules\Statistics\App\Requests\CreateReportRequest;
use App\Modules\Stocks\App\Requests\CreateStockRequest;
use App\Modules\Stocks\App\Requests\UpdateStockRequest;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateStockDto extends DataTransferObject
{
    public string $name;

    public int $quantity;

    public float $price_per_piece;

    public float $sale_price;

    public string $payment_type;

    public float $total;

    public float $paid;

    /**
     * @param UpdateStockRequest $request
     * @return UpdateStockDto
     */
    public static function fromRequest(UpdateStockRequest $request): UpdateStockDto
    {
        $data = $request->validated();

        $data['quantity'] = (int) $data['quantity'];
        $data['price_per_piece'] = (float) $data['price_per_piece'];
        $data['sale_price'] = (float) $data['sale_price'];
        $data['total'] = (float) $data['total'];
        $data['paid'] = (float) $data['paid'];

        return new self($data);
    }
}
