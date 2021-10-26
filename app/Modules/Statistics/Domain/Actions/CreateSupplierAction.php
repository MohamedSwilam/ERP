<?php


namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\DataTransferObjects\CreateSupplierDto;
use App\Modules\Statistics\Domain\Models\Supplier;

class CreateSupplierAction
{
    /**
     * @param CreateSupplierDto $createSupplierDto
     * @return Supplier
     */
    public function __invoke(CreateSupplierDto $createSupplierDto): Supplier
    {
        return Supplier::create($createSupplierDto->toArray());
    }
}
