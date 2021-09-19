<?php

namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\Models\Report;

class DeleteReportAction
{
    /**
     * @param Report $report
     * @return bool|null
     */
    public function __invoke(Report $report): ?bool
    {
        return $report->delete();
    }
}
