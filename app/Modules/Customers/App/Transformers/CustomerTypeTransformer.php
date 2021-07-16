<?php

namespace App\Modules\Customers\App\Transformers;

use App\Modules\Customers\Domain\Models\CustomerType;
use League\Fractal\TransformerAbstract;

class CustomerTypeTransformer extends TransformerAbstract
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
     * @param CustomerType $customerType
     * @return array
     */
    public function transform(CustomerType $customerType)
    {
        return $customerType->toArray();
    }
}
