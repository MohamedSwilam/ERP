<?php

namespace App\Modules\Reservations\App\Transformers;

use App\Modules\Reservations\Domain\Models\PackageType;
use League\Fractal\TransformerAbstract;

class PackageTypeTransformer extends TransformerAbstract
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
     * @param PackageType $packageType
     * @return array
     */
    public function transform(PackageType $packageType)
    {
        return $packageType->toArray();
    }
}
