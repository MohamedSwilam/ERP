<?php

namespace App\Modules\Customers\Domain\Models;

use App\Modules\Comments\Domain\Models\Comment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Customer extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'phone',
        'email',
        'national_id',
        'date_of_birth',
        'address',
        'customer_type_id',
    ];

    protected $with = ['customerType'];

    /**
     * @return BelongsTo
     */
    public function customerType(): BelongsTo
    {
        return $this->belongsTo(CustomerType::class);
    }

    public function comments(): MorphMany
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}
