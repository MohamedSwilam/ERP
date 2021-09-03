<?php


namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\DataTransferObjects\UpdateAccountingDto;
use App\Modules\Statistics\Domain\Models\Accounting;

class UpdateAccountingAction
{
    /**
     * @param Accounting $accounting
     * @param UpdateAccountingDto $updateAccountingDto
     * @return Accounting
     */
    public function __invoke(Accounting $accounting, UpdateAccountingDto $updateAccountingDto): Accounting
    {
        $accounting->update($updateAccountingDto->toArray());

        return $accounting;
    }
}
