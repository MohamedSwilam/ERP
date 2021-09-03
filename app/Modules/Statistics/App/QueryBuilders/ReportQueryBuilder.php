<?php


namespace App\Modules\Statistics\App\QueryBuilders;


use App\Modules\Statistics\Domain\Models\Report;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class ReportQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Report::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'start_date',
                    'end_date',
                    'total_messages',
                    'customer_numbers',
                    'follow_up',
                    'results',
                )),
            ])
            ->allowedSorts([
                'start_date',
                'end_date',
                'total_messages',
                'customer_numbers',
                'follow_up',
                'results',
                'created_at'
            ]);
    }
}
