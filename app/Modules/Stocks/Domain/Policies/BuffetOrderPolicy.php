<?php

namespace App\Modules\Stocks\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class BuffetOrderPolicy
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
        return $user->hasPermissionTo('browse_buffet_order');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_buffet_order');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_buffet_order');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_buffet_order');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_buffet_order');
    }
}
