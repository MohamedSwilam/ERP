<?php

namespace App\Modules\Customers\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Customer extends Model
{
    use HasFactory;

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
    ];

    protected $with = ['customerType'];

    /**
     * @return BelongsTo
     */
    public function customerType(): BelongsTo
    {
        return $this->belongsTo(CustomerType::class);
    }
}
