<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'event_date',
        'host',
        'duration',
        'event_type',
        'instructor',
        'num_of_attendance',
        'budget',
        'expenses',
        'revenue',
    ];
}
