<?php

namespace App\Modules\Stocks\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Stock extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'quantity',
        'price_per_piece',
        'sale_price',
        'payment_type',
        'total',
        'paid',
    ];


    /**
     * @return belongsToMany
     */
    public function buffetOrders(): belongsToMany
    {
        return $this->belongsToMany(BuffetOrder::class, 'buffet_order_items', 'stock_id', 'buffet_order_id');
    }
}
