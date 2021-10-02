<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Modules\Reservations\Domain\Models\Package;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PackageQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Package::query();

        parent::__construct($query, $request);

        $this
            ->allowedFilters([
                AllowedFilter::custom('search', new FuzzyFilter(
                    'name',
                    'description',
                    'membership',
                    'price',
                    'tax',
                )),
                AllowedFilter::scope('package_type'),
                AllowedFilter::scope('room'),
                AllowedFilter::scope('customer_type'),
            ])
            ->allowedSorts(['name', 'description', 'membership', 'price', 'package_type_id', 'hours', 'tax', 'created_at']);
    }
}
