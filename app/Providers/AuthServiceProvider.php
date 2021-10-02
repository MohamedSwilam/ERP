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
use App\Modules\Reservations\Domain\Models\Event;
use App\Modules\Reservations\Domain\Models\Order;
use App\Modules\Reservations\Domain\Models\Package;
use App\Modules\Reservations\Domain\Models\Room;
use App\Modules\Reservations\Domain\Policies\EventPolicy;
use App\Modules\Reservations\Domain\Policies\OrderPolicy;
use App\Modules\Reservations\Domain\Policies\PackagePolicy;
use App\Modules\Reservations\Domain\Policies\RoomPolicy;
use App\Modules\Reservations\Domain\Policies\VisitPolicy;
use App\Modules\Statistics\Domain\Models\Accounting;
use App\Modules\Statistics\Domain\Models\Report;
use App\Modules\Statistics\Domain\Policies\AccountingPolicy;
use App\Modules\Statistics\Domain\Policies\ReportPolicy;
use App\Modules\Stocks\Domain\Models\BuffetOrder;
use App\Modules\Stocks\Domain\Models\Stock;
use App\Modules\Stocks\Domain\Policies\BuffetOrderPolicy;
use App\Modules\Stocks\Domain\Policies\StatisticsPolicy;
use App\Modules\Stocks\Domain\Policies\StockPolicy;
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
        Event::class => EventPolicy::class,
        CustomerVisit::class => VisitPolicy::class,
        Report::class => ReportPolicy::class,
        Accounting::class => AccountingPolicy::class,
        Stock::class => StockPolicy::class,
        BuffetOrder::class => BuffetOrderPolicy::class,
        'statistics' => StatisticsPolicy::class
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
