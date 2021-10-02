<?php

namespace App\Modules\Stocks\App\Transformers;

use App\Modules\Stocks\Domain\Models\BuffetOrder;
use League\Fractal\TransformerAbstract;

class BuffetOrderTransformer extends TransformerAbstract
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
     * @param BuffetOrder $buffetOrder
     * @return array
     */
    public function transform(BuffetOrder $buffetOrder)
    {
        return $buffetOrder->toArray();
    }
}
