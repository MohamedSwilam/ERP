<?php

namespace App\Modules\Statistics\App\Transformers;

use App\Modules\Statistics\Domain\Models\Report;
use League\Fractal\TransformerAbstract;

class ReportTransformer extends TransformerAbstract
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
     * @param Report $report
     * @return array
     */
    public function transform(Report $report)
    {
        return $report->toArray();
    }
}
