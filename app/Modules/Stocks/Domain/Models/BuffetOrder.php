<?php

namespace App\Modules\Stocks\Domain\Models;

use App\Modules\Customers\Domain\Models\Customer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Builder;

class BuffetOrder extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'customer_id',
        'discount',
        'total',
    ];

    protected $with = ['customer', 'stocks'];


    /**
     * @return BelongsTo
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class, 'customer_id')->withTrashed();
    }


    /**
     * @return belongsToMany
     */
    public function stocks(): belongsToMany
    {
        return $this
            ->belongsToMany(Stock::class, 'buffet_order_items', 'buffet_order_id', 'stock_id')
            ->withPivot('quantity')
            ->withTimestamps();
    }

    public function scopeCustomerFilter(Builder $query, string $value) {
        return $query
            ->whereHas('customer', function (Builder $q) use ($value) {
                $q->where('customer_id', $value);
                $q->orWhere('name', 'LIKE', "%$value%");
                $q->orWhere('phone', 'LIKE', "%$value%");
            });
    }
}
