<?php


namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\DataTransferObjects\UpdateReportDto;
use App\Modules\Statistics\Domain\Models\Report;

class UpdateReportAction
{
    /**
     * @param Report $report
     * @param UpdateReportDto $updateReportDto
     * @return Report
     */
    public function __invoke(Report $report, UpdateReportDto $updateReportDto): Report
    {
        $report->update($updateReportDto->toArray());

        return $report;
    }
}
