<?php


namespace App\Modules\Statistics\Domain\DataTransferObjects;


use App\Modules\Statistics\App\Requests\CreateReportRequest;
use App\Modules\Statistics\App\Requests\UpdateReportRequest;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateReportDto extends DataTransferObject
{
    public string $start_date;

    public string $end_date;

    public int $total_messages;

    public string $customer_numbers;

    public string $follow_up;

    public string $results;

    public string $title;

    public string $audience_description;

    /**
     * @param UpdateReportRequest $request
     * @return UpdateReportDto
     */
    public static function fromRequest(UpdateReportRequest $request): UpdateReportDto
    {
        $data = $request->validated();

        $data['start_date'] = Carbon::make($data['start_date'])->toDateTimeString();
        $data['end_date'] = Carbon::make($data['end_date'])->toDateTimeString();
        $data['total_messages'] = (int) $data['total_messages'];

        return new self($data);
    }
}
