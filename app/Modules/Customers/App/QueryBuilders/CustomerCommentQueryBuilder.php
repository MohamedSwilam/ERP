<?php


namespace App\Modules\Customers\App\QueryBuilders;


use App\Modules\Customers\Domain\Models\Customer;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerCommentQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = $request->customer->comments();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'comment',
                )),
            ])
            ->allowedSorts(['comment', 'created_at']);
    }
}
