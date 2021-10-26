<?php


namespace App\Modules\Statistics\App\QueryBuilders;

use App\Modules\Statistics\Domain\Models\Employer;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class EmployerQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Employer::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
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
                )),
            ])
            ->allowedSorts([
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
            ]);
    }
}
