<?php

namespace App\Modules\Customers\Domain\Models;

use App\Modules\Reservations\Domain\Models\Package;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CustomerType extends Model
{
    use HasFactory;

    public function customers(): HasMany
    {
        return $this->hasMany(Customer::class);
    }

    public function packages(): HasMany
    {
        return $this->hasMany(Package::class);
    }
}
