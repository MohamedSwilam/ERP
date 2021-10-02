<?php


namespace App\Modules\Stocks\App\QueryBuilders;

use App\Modules\Stocks\Domain\Models\BuffetOrder;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class BuffetOrderQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = BuffetOrder::query();

        parent::__construct($query, $request);

        if ($request->input('customer')) {
            $query->where('customer_id', $request->input('customer'))->get();
        }

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'customer_id',
                    'discount',
                )),
            ])
            ->allowedSorts([
                'customer_id',
                'discount',
                'created_at'
            ]);
    }
}
