<?php

namespace App\Modules\Reservations\Domain\Models;

use App\Modules\Customers\Domain\Models\CustomerType;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Package extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'package_type_id',
        'name',
        'description',
        'membership',
        'price',
        'tax',
        'hours',
        'expiration_in_hours',
        'customers_to_reserve',
        'customer_type_id',
    ];

    protected $with = ['rooms', 'packageType', 'customerType'];

    /**
     * @return BelongsTo
     */
    public function packageType(): BelongsTo
    {
        return $this->belongsTo(PackageType::class);
    }

    /**
     * @return BelongsTo
     */
    public function customerType(): BelongsTo
    {
        return $this->belongsTo(CustomerType::class);
    }

    /**
     * @return HasMany
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    /**
     * @return belongsToMany
     */
    public function rooms(): belongsToMany {
        return $this->belongsToMany(Room::class, 'package_rooms', 'package_id', 'room_id');
    }
}
