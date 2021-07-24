<?php

namespace App\Modules\Customers\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CustomerPolicy
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
        return $user->hasPermissionTo('browse_customer');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_customer');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_customer');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_customer');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_customer');
    }

    public function browseComments(User $user): bool
    {
        return $user->hasPermissionTo('browse_customer_comment');
    }

    public function storeComment(User $user): bool
    {
        return $user->hasPermissionTo('create_customer_comment');
    }
}
