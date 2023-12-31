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

        if ($request->input('order')) {
            $query
                ->where('bookable_type', 'App\\Modules\\Reservations\\Domain\\Models\\Order')
                ->where('bookable_id', $request->input('order'))
                ->get();
        }

        if ($request->input('event')) {
            $query
                ->where('bookable_type', 'App\\Modules\\Reservations\\Domain\\Models\\Event')
                ->where('bookable_id', $request->input('event'))
                ->get();
        }

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'room_id',
                    'date',
                    'start_time',
                    'end_time',
                    'visit_status_id',
                )),
                AllowedFilter::scope('status'),
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
