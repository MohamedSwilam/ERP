<?php

namespace App\Modules\Statistics\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ReportPolicy
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
        return $user->hasPermissionTo('browse_report');
    }

    public function view(User $user): bool
    {
        return $user->hasPermissionTo('view_report');
    }

    public function store(User $user): bool
    {
        return $user->hasPermissionTo('create_report');
    }

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_report');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_report');
    }
}
