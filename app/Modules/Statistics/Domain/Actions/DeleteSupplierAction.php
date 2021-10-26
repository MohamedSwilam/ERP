<?php

namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\Models\Supplier;

class DeleteSupplierAction
{
    public function __invoke(Supplier $supplier): ?bool
    {
        return $supplier->delete();
    }
}
