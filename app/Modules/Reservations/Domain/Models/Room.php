<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Room extends Model
{
    use HasFactory;

    /**
     * @return belongsToMany
     */
    public function packages(): belongsToMany {
        return $this->belongsToMany(Package::class, 'package_rooms', 'room_id', 'package_id');
    }
}
