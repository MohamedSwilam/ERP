<?php

namespace App\Modules\Reservations\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class OrderPolicy
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
        return $user->hasPermissionTo('browse_order');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_order');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_order');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_order');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_order');
    }

    public function browseComments(User $user): bool
    {
        return $user->hasPermissionTo('browse_order_comment');
    }

    public function storeComment(User $user): bool
    {
        return $user->hasPermissionTo('create_order_comment');
    }
}
