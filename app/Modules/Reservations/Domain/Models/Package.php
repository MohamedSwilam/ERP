<?php

namespace App\Modules\Reservations\Domain\Models;

use App\Modules\Customers\Domain\Models\CustomerType;
use Illuminate\Database\Eloquent\Builder;
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
        'is_flexible',
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

    public function scopePackageType(Builder $query, string $value) {
        return $query
            ->whereHas('packageType', function (Builder $q) use ($value) {
                $q->where('id', $value);
            });
    }

    public function scopeRoom(Builder $query, string $value) {
        return $query->whereHas('rooms', function (Builder $q) use ($value) {
            $q->where('room_id', $value);
        });
    }

    public function scopeCustomerType(Builder $query, string $value) {
        return $query->whereHas('customerType', function (Builder $q) use ($value) {
            $q->where('id', $value);
        });
    }
}
