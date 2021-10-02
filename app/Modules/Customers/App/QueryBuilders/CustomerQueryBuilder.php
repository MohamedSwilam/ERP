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
                    'id',
                    'name',
                    'phone',
                    'email',
                    'national_id',
                )),
                AllowedFilter::scope('customer_type'),
                AllowedFilter::scope('next_follow_up_from'),
                AllowedFilter::scope('next_follow_up_to'),
            ])
            ->allowedSorts(['name', 'email', 'phone', 'date_of_birth', 'created_at']);
    }
}
