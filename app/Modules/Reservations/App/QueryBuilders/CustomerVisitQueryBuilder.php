<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerVisitQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = CustomerVisit::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'room_id',
                    'date',
                    'start_time',
                    'end_time',
                    'visit_status_id',
                )),
            ])
            ->allowedSorts([
                'room_id',
                'date',
                'start_time',
                'end_time',
                'visit_status_id',
            ]);
    }
}
