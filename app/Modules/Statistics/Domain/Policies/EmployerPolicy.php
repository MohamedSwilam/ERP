<?php

namespace App\Modules\Statistics\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EmployerPolicy
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
        return $user->hasPermissionTo('browse_employer');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_employer');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_employer');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_employer');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_employer');
    }
}
