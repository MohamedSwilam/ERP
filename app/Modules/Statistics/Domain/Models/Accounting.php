<?php

namespace App\Modules\Statistics\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Accounting extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'utilities',
        'monthly_rent',
        'advertising_budget',
        'fixes',
        'employees_data',
        'suppliers_data',
        'revenue',
    ];
}
