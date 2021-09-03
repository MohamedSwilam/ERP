<?php


namespace App\Modules\Statistics\Domain\DataTransferObjects;


use App\Modules\Statistics\App\Requests\CreateReportRequest;
use App\Modules\Statistics\App\Requests\UpdateAccountingRequest;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateAccountingDto extends DataTransferObject
{
    public float $utilities;

    public float $monthly_rent;

    public float $advertising_budget;

    public float $fixes;

    public float $employees_data;

    public float $suppliers_data;

    public float $revenue;

    /**
     * @param UpdateAccountingRequest $request
     * @return UpdateAccountingDto
     */
    public static function fromRequest(UpdateAccountingRequest $request): UpdateAccountingDto
    {
        $data = $request->validated();

        $data['utilities'] = (float) $data['utilities'];
        $data['monthly_rent'] = (float) $data['monthly_rent'];
        $data['advertising_budget'] = (float) $data['advertising_budget'];
        $data['fixes'] = (float) $data['fixes'];
        $data['employees_data'] = (float) $data['employees_data'];
        $data['suppliers_data'] = (float) $data['suppliers_data'];
        $data['revenue'] = (float) $data['revenue'];

        return new self($data);
    }
}
