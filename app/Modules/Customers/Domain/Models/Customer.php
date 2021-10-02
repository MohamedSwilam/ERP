<?php

namespace App\Modules\Customers\Domain\Models;

use App\Modules\Comments\Domain\Models\Comment;
use App\Modules\Reservations\Domain\Models\Order;
use App\Modules\Stocks\Domain\Models\BuffetOrder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'national_id',
        'date_of_birth',
        'address',
        'customer_type_id',
        'last_follow_up',
        'next_follow_up',
    ];

    protected $with = ['customerType'];

    /**
     * @return BelongsTo
     */
    public function customerType(): BelongsTo
    {
        return $this->belongsTo(CustomerType::class);
    }

    /**
     * @return MorphMany
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    /**
     * @return BelongsToMany
     */
    public function orders(): BelongsToMany
    {
        return $this->belongsToMany(Order::class, 'order_customers', 'customer_id', 'order_id');
    }

    /**
     * @return belongsToMany
     */
    public function buffetOrders(): belongsToMany
    {
        return $this->belongsToMany(BuffetOrder::class);
    }

    public function scopeCustomerType(Builder $query, string $value) {
        return $query->whereHas('customerType', function (Builder $q) use ($value) {
            $q->where('id', $value);
        });
    }

    public function scopeNextFollowUpFrom(Builder $query, string $value) {
        return $query->where('next_follow_up', '>=', $value);
    }

    public function scopeNextFollowUpTo(Builder $query, string $value) {
        return $query->where('next_follow_up', '<=', $value);
    }
}
