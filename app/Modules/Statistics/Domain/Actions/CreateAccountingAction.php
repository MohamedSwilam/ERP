<?php


namespace App\Modules\Statistics\Domain\Actions;


use App\Modules\Statistics\Domain\DataTransferObjects\CreateAccountingDto;
use App\Modules\Statistics\Domain\Models\Accounting;

class CreateAccountingAction
{
    /**
     * @param CreateAccountingDto $createAccountingDto
     * @return Accounting
     */
    public function __invoke(CreateAccountingDto $createAccountingDto): Accounting
    {
        return Accounting::create($createAccountingDto->toArray());
    }
}
