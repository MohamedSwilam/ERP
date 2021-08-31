<?php

namespace App\Modules\Reservations\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class VisitStatus extends Model
{
    use HasFactory;

    /**
     * @return HasMany
     */
    public function customerVisits(): HasMany
    {
        return $this->hasMany(CustomerVisit::class);
    }
}
