<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\DataTransferObjects\UpdatePackageDto;
use App\Modules\Reservations\Domain\Models\Package;

class UpdatePackageAction
{
    /**
     * @param Package $package
     * @param UpdatePackageDto $updatePackageDto
     * @return Package
     */
    public function __invoke(Package $package, UpdatePackageDto $updatePackageDto): Package
    {
        $package->update($updatePackageDto->toArray());

        $package->rooms()->sync($updatePackageDto->rooms);

        return $package;
    }
}
