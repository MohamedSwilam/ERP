<?php

namespace App\Modules\Reservations\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class VisitPolicy
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
        return $user->hasPermissionTo('browse_visit');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_visit');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_visit');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_visit');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_visit');
    }
}
