<?php


namespace App\Modules\Reservations\Domain\Actions;


use App\Modules\Reservations\Domain\DataTransferObjects\CreatePackageDto;
use App\Modules\Reservations\Domain\Models\Package;

class CreatePackageAction
{
    /**
     * @param CreatePackageDto $createPackageDto
     * @return Package
     */
    public function __invoke(CreatePackageDto $createPackageDto): Package
    {
        $package = Package::create($createPackageDto->toArray());

        $package->rooms()->sync($createPackageDto->rooms);

        return $package;
    }
}
