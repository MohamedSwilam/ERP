<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Modules\Reservations\Domain\Models\Event;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class EventQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Event::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'title',
                    'host',
                )),
                AllowedFilter::scope('room'),
                AllowedFilter::scope('from'),
                AllowedFilter::scope('to'),
            ])
            ->allowedSorts([
                'title',
                'event_date',
                'start_time',
                'end_time',
                'host',
                'event_type',
                'instructor',
                'num_of_attendance',
                'budget',
                'expenses',
                'revenue',
            ]);
    }
}
