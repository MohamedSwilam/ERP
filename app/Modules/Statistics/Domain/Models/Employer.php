<?php

namespace App\Modules\Statistics\Domain\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employer extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'phone',
        'address',
        'national_id',
        'joining_date',
        'salary',
        'military_status',
        'criminal_record_status',
        'medical_insurance_number',
        'social_insurance_number',
    ];
}
