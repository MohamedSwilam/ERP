<?php

namespace App\Modules\Stocks\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class StockPolicy
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
        return $user->hasPermissionTo('browse_stock');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_stock');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_stock');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_stock');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_stock');
    }
}
