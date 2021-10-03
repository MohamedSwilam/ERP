<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;

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
        'room_id',
        'marketing_plan',
    ];

    protected $with = ['room'];

    /**
     * @return MorphMany
     */
    public function customerVisits(): MorphMany
    {
        return $this->morphMany(CustomerVisit::class, 'bookable');
    }

    /**
     * @return BelongsTo
     */
    public function room(): BelongsTo
    {
        return $this->belongsTo(Room::class);
    }

    public function scopeRoom(Builder $query, string $value) {
        return $query->whereHas('room', function (Builder $q) use ($value) {
            $q->where('id', $value);
        });
    }

    public function scopeFrom(Builder $query, string $value) {
        return $query->where('created_at', '>=', $value);
    }

    public function scopeTo(Builder $query, string $value) {
        return $query->where('created_at', '<=', $value);
    }
}
