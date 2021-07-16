<?php


namespace App\Modules\Customers\App\QueryBuilders;


use App\Modules\Customers\Domain\Models\CustomerType;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerTypeQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = CustomerType::query();

        parent::__construct($query, $request);

        $this->allowedFilters([
            AllowedFilter::custom('search', new FuzzyFilter('type')),
        ])->allowedSorts(['type', 'created_at']);
    }
}
