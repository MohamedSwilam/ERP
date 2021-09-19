<?php

namespace App\Modules\Stocks\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
