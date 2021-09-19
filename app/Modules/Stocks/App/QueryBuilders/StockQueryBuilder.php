<?php


namespace App\Modules\Stocks\App\QueryBuilders;

use App\Modules\Stocks\Domain\Models\Stock;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class StockQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Stock::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'name',
                    'quantity',
                    'price_per_piece',
                    'sale_price',
                    'payment_type',
                    'total',
                    'paid',
                )),
            ])
            ->allowedSorts([
                'name',
                'quantity',
                'price_per_piece',
                'sale_price',
                'payment_type',
                'total',
                'paid',
                'created_at'
            ]);
    }
}
