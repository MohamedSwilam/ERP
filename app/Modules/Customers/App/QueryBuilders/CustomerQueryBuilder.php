<?php


namespace App\Modules\Customers\App\QueryBuilders;


use App\Modules\Customers\Domain\Models\Customer;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Customer::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'name',
                    'phone',
                    'email',
                    'national_id',
                    'date_of_birth',
                )),
            ])
            ->allowedSorts(['name', 'email', 'phone', 'date_of_birth', 'created_at']);
    }
}