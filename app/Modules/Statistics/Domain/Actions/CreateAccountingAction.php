<?php


namespace App\Modules\Statistics\Domain\Actions;


use App\Modules\Statistics\Domain\DataTransferObjects\CreateAccountingDto;
use App\Modules\Statistics\Domain\Models\Accounting;
use App\Modules\Statistics\Domain\Models\Report;

class CreateAccountingAction
{
    /**
     * @param CreateAccountingDto $createAccountingDto
     * @return Report
     */
    public function __invoke(CreateAccountingDto $createAccountingDto): Accounting
    {
        return Accounting::create($createAccountingDto->toArray());
    }
}
