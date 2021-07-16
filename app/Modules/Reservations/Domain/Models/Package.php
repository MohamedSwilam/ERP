<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Package extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'membership',
        'price',
        'tax',
    ];

    protected $with = ['rooms'];

    /**
     * @return belongsToMany
     */
    public function rooms(): belongsToMany {
        return $this->belongsToMany(Room::class, 'package_rooms', 'package_id', 'room_id');
    }
}
