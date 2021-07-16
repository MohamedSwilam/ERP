<?php

namespace App\Modules\Reservations\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RoomPolicy
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
        return $user->hasPermissionTo('create_package') || $user->hasPermissionTo('update_package');
    }
}
