<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Room extends Model
{
    use HasFactory;

    /**
     * @return belongsToMany
     */
    public function packages(): belongsToMany {
        return $this->belongsToMany(Package::class, 'package_rooms', 'room_id', 'package_id');
    }

    /**
     * @return HasMany
     */
    public function customerVisits(): HasMany
    {
        return $this->hasMany(CustomerVisit::class);
    }

    /**
     * @return HasMany
     */
    public function events(): HasMany
    {
        return $this->hasMany(Event::class);
    }
}
