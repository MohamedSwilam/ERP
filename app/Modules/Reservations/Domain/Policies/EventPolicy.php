<?php

namespace App\Modules\Reservations\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EventPolicy
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
        return $user->hasPermissionTo('browse_event');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_event');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_event');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_event');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_event');
    }
}
