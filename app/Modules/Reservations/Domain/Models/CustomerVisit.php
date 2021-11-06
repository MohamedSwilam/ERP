<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class CustomerVisit extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'room_id',
        'date',
        'start_time',
        'end_time',
        'visit_status_id',
    ];

    protected $with = ['room', 'visitStatus', 'bookable'];

    public function bookable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * @return BelongsTo
     */
    public function room(): BelongsTo {
        return $this->belongsTo(Room::class);
    }

    /**
     * @return BelongsTo
     */
    public function visitStatus(): BelongsTo {
        return $this->belongsTo(VisitStatus::class);
    }

    public function scopeStatus(Builder $query, string $value) {
        return $query->whereIn('visit_status_id', explode('-', $value));
    }
}
