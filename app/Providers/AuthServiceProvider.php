<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        \Spatie\Permission\Models\Role::class => \App\Modules\Authorization\Domain\Policies\RolePolicy::class,
        \Spatie\Permission\Models\Permission::class => \App\Modules\Authorization\Domain\Policies\PermissionPolicy::class,
        \App\Modules\Authentication\Domain\Models\User::class => \App\Modules\Authentication\Domain\Policies\UserPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        if (! $this->app->routesAreCached()) {
            Passport::routes();
        }
    }
}
