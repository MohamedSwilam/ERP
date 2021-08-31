<?php

namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\Models\CustomerVisit;

class DeleteVisitAction
{
    public function __invoke(CustomerVisit $customerVisit): ?bool
    {
        return $customerVisit->delete();
    }
}
