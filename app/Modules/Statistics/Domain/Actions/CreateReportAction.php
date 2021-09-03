<?php


namespace App\Modules\Statistics\Domain\Actions;


use App\Modules\Reservations\Domain\Models\Event;
use App\Modules\Statistics\Domain\DataTransferObjects\CreateReportDto;
use App\Modules\Statistics\Domain\Models\Report;

class CreateReportAction
{
    /**
     * @param CreateReportDto $createReportDto
     * @return Report
     */
    public function __invoke(CreateReportDto $createReportDto): Report
    {
        return Report::create($createReportDto->toArray());
    }
}
