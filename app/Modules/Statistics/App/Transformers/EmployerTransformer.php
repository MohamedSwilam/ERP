<?php

namespace App\Modules\Statistics\App\Transformers;

use App\Modules\Statistics\Domain\Models\Employer;
use League\Fractal\TransformerAbstract;

class EmployerTransformer extends TransformerAbstract
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
     * @param Employer $employer
     * @return array
     */
    public function transform(Employer $employer)
    {
        return $employer->toArray();
    }
}
