<?php

namespace App\Modules\Statistics\App\Transformers;

use App\Modules\Statistics\Domain\Models\Accounting;
use League\Fractal\TransformerAbstract;

class AccountingTransformer extends TransformerAbstract
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
     * @param Accounting $accounting
     * @return array
     */
    public function transform(Accounting $accounting)
    {
        return $accounting->toArray();
    }
}
