<?php

namespace App\Modules\Comments\Domain\Policies;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class CommentPolicy
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

    public function update(User $user): bool
    {
        return $user->hasPermissionTo('update_comment');
    }

    public function destroy(User $user): bool
    {
        return $user->hasPermissionTo('delete_comment');
    }
}
