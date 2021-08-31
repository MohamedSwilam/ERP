<?php

namespace App\Providers;

use App\Modules\Authentication\Domain\Models\User;
use App\Modules\Authentication\Domain\Policies\UserPolicy;
use App\Modules\Authorization\Domain\Policies\PermissionPolicy;
use App\Modules\Authorization\Domain\Policies\RolePolicy;
use App\Modules\Comments\Domain\Models\Comment;
use App\Modules\Comments\Domain\Policies\CommentPolicy;
use App\Modules\Customers\Domain\Models\Customer;
use App\Modules\Customers\Domain\Models\CustomerType;
use App\Modules\Customers\Domain\Policies\CustomerPolicy;
use App\Modules\Customers\Domain\Policies\CustomerTypePolicy;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Order;
use App\Modules\Reservations\Domain\Models\Package;
use App\Modules\Reservations\Domain\Models\Room;
use App\Modules\Reservations\Domain\Policies\OrderPolicy;
use App\Modules\Reservations\Domain\Policies\PackagePolicy;
use App\Modules\Reservations\Domain\Policies\RoomPolicy;
use App\Modules\Reservations\Domain\Policies\VisitPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Role::class => RolePolicy::class,
        Permission::class => PermissionPolicy::class,
        User::class => UserPolicy::class,
        Customer::class => CustomerPolicy::class,
        CustomerType::class => CustomerTypePolicy::class,
        Package::class => PackagePolicy::class,
        Room::class => RoomPolicy::class,
        Comment::class => CommentPolicy::class,
        Order::class => OrderPolicy::class,
        CustomerVisit::class => VisitPolicy::class
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
