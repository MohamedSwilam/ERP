<?php

namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\Models\Report;

class DeleteReportAction
{
    public function __invoke(Report $report): ?bool
    {
        return $report->delete();
    }
}
