<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class OrderCommentQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = $request->order->comments();

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
