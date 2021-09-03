<?php


namespace App\Modules\Statistics\App\QueryBuilders;

use App\Modules\Statistics\Domain\Models\Accounting;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class AccountingQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Accounting::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'utilities',
                    'monthly_rent',
                    'advertising_budget',
                    'fixes',
                    'employees_data',
                    'suppliers_data',
                    'revenue',
                )),
            ])
            ->allowedSorts([
                'utilities',
                'monthly_rent',
                'advertising_budget',
                'fixes',
                'employees_data',
                'suppliers_data',
                'revenue',
                'created_at'
            ]);
    }
}
