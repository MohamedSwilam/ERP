<?php

namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\DataTransferObjects\UpdateSupplierDto;
use App\Modules\Statistics\Domain\Models\Supplier;

class UpdateSupplierAction
{
    /**
     * @param Supplier $supplier
     * @param UpdateSupplierDto $updateSupplierDto
     * @return Supplier
     */
    public function __invoke(Supplier $supplier, UpdateSupplierDto $updateSupplierDto): Supplier
    {
        $supplier->update($updateSupplierDto->toArray());

        return $supplier;
    }
}
