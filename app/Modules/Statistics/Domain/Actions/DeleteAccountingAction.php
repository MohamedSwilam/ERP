<?php

namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\Models\Accounting;

class DeleteAccountingAction
{
    public function __invoke(Accounting $accounting): ?bool
    {
        return $accounting->delete();
    }
}
