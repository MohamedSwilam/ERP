<?php

namespace App\Modules\Stocks\App\Transformers;

use App\Modules\Stocks\Domain\Models\Stock;
use League\Fractal\TransformerAbstract;

class StockTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Stock $stock
     * @return array
     */
    public function transform(Stock $stock)
    {
        return $stock->toArray();
    }
}
