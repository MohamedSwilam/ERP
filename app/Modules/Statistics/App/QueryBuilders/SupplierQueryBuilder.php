<?php


namespace App\Modules\Statistics\App\QueryBuilders;

use App\Modules\Statistics\Domain\Models\Supplier;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class SupplierQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Supplier::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'name',
                    'phone',
                    'email',
                    'product',
                    'code',
                    'payment_type',
                )),
            ])
            ->allowedSorts([
                'name',
                'phone',
                'email',
                'product',
                'code',
                'payment_type',
            ]);
    }
}
