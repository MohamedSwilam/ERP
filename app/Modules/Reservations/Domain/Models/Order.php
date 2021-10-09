<?php

namespace App\Modules\Reservations\Domain\Models;

use App\Modules\Authentication\Domain\Models\User;
use App\Modules\Comments\Domain\Models\Comment;
use App\Modules\Customers\Domain\Models\Customer;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'package_id',
        'total_hours',
        'remaining_hours',
        'starts_at',
        'expires_at',
        'discount',
        'seller',
        'paid',
        'total',
        'payment_type',
        'created_by',
    ];

    protected $with = ['package', 'customers', 'createdBy'];

    /**
     * @return BelongsTo
     */
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    public function customerVisits(): MorphMany
    {
        return $this->morphMany(CustomerVisit::class, 'bookable');
    }

    /**
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * @return BelongsToMany
     */
    public function customers(): BelongsToMany
    {
        return $this->belongsToMany(Customer::class, 'order_customers', 'order_id', 'customer_id');
    }

    /**
     * @return MorphMany
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function lastVisit() {
        return $this
            ->morphMany(CustomerVisit::class, 'bookable')
            ->orderBy('created_at', 'desc')
            ->limit(1);
    }

    public function lastComment() {
        return $this
            ->morphMany(Comment::class, 'commentable')
            ->orderBy('created_at', 'desc')
            ->limit(1);
    }

    public function scopeCustomerFilter(Builder $query, string $value) {
        return $query
            ->whereHas('customers', function (Builder $q) use ($value) {
                $q->where('customer_id', $value);
                $q->orWhere('name', 'LIKE', "%$value%");
            });
    }

    public function scopePackageType(Builder $query, string $value) {
        return $query
            ->with('package', 'package.packageType')
            ->whereHas('package.packageType', function (Builder $q) use ($value) {
                $q->where('id', $value);
            });
    }

    public function scopeFrom(Builder $query, string $value) {
        return $query->where('created_at', '>=', $value);
    }

    public function scopeTo(Builder $query, string $value) {
        return $query->where('created_at', '<=', $value);
    }
}
