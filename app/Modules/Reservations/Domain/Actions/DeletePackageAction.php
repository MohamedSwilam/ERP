<?php

namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\Models\Package;

class DeletePackageAction
{
    public function __invoke(Package $package): ?bool
    {
        return $package->delete();
    }
}
