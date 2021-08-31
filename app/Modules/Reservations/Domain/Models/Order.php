<?php

namespace App\Modules\Reservations\Domain\Models;

use App\Modules\Authentication\Domain\Models\User;
use App\Modules\Comments\Domain\Models\Comment;
use App\Modules\Customers\Domain\Models\Customer;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Order extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'package_id',
        'total_hours',
        'remaining_hours',
        'starts_at',
        'expires_at',
        'discount',
        'seller',
        'created_by',
    ];

    protected $with = ['package', 'customers', 'createdBy'];

    /**
     * @return BelongsTo
     */
    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    public function customerVisits(): MorphMany
    {
        return $this->morphMany(CustomerVisit::class, 'bookable');
    }

    /**
     * @return BelongsTo
     */
    public function createdBy(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    /**
     * @return BelongsToMany
     */
    public function customers(): BelongsToMany
    {
        return $this->belongsToMany(Customer::class, 'order_customers');
    }

    /**
     * @return MorphMany
     */
    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
