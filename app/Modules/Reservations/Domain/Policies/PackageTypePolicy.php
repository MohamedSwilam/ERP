<?php

namespace App\Modules\Reservations\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackageTypePolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function browse(User $user): bool
    {
        return $user->hasPermissionTo('create_package')
            || $user->hasPermissionTo('update_package')
            || $user->hasPermissionTo('browse_order')
            || $user->hasPermissionTo('browse_package')
            || $user->hasPermissionTo('browse_operation');
    }
}
