<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Modules\Reservations\App\QueryBuilders\CustomFilters\FilterCustomer;
use App\Modules\Reservations\Domain\Models\Order;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class OrderQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Order::with('customers');

        parent::__construct($query, $request);

        if ($request->input('customer')) {
            $query->whereHas('customers', function($q) use($request) {
                $q->where('id', $request->input('customer'));
            })->get();
        }

        if ($request->input('lastVisit')) {
            $query->with('lastVisit')->get();
        }

        if ($request->input('lastComment')) {
            $query->with('lastComment')->get();
        }

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'total_hours',
                    'remaining_hours',
                    'starts_at',
                    'expires_at',
                    'discount',
                    'seller',
                    'created_by',
                )),
                AllowedFilter::scope('customer_filter'),
                AllowedFilter::scope('package_type'),
                AllowedFilter::scope('from'),
                AllowedFilter::scope('to'),
            ])
            ->allowedSorts(['total_hours', 'remaining_hours', 'starts_at', 'expires_at', 'discount', 'seller', 'created_by']);
    }
}
