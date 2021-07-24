<?php


namespace App\Modules\Comments\App\QueryBuilders;


use App\Modules\Customers\Domain\Models\Customer;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class CustomerCommentQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request, Customer $customer)
    {
        $query = Customer::with('comments')->get();

        parent::__construct($query->comments, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'comment',
                )),
            ])
            ->allowedSorts(['comment', 'created_at']);
    }
}
