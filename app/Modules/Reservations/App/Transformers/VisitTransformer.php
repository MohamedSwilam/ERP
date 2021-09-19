<?php

namespace App\Modules\Reservations\App\Transformers;

use App\Modules\Reservations\Domain\Models\CustomerVisit;
use League\Fractal\TransformerAbstract;

class VisitTransformer extends TransformerAbstract
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
     * @param CustomerVisit $customerVisit
     * @return array
     */
    public function transform(CustomerVisit $customerVisit)
    {
        $data = $customerVisit->toArray();
        $data['isEvent'] = $data['bookable_type'] === 'App\\Modules\\Reservations\\Domain\\Models\\Event';
        return $data;
    }
}
