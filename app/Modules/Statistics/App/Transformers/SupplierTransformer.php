<?php

namespace App\Modules\Statistics\App\Transformers;

use App\Modules\Statistics\Domain\Models\Supplier;
use League\Fractal\TransformerAbstract;

class SupplierTransformer extends TransformerAbstract
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
     * @param Supplier $supplier
     * @return array
     */
    public function transform(Supplier $supplier)
    {
        return $supplier->toArray();
    }
}
