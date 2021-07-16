<?php

namespace App\Modules\Reservations\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class PackagePolicy
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
        return $user->hasPermissionTo('browse_package');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_package');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_package');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_package');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_package');
    }
}
