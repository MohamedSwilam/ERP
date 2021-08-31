<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PackageType extends Model
{
    use HasFactory;

    public function packages(): HasMany
    {
        return $this->hasMany(Package::class);
    }
}
