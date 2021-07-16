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
                    'title',
                    'description',
                    'membership',
                    'price',
                    'tax',
                )),
            ])
            ->allowedSorts(['title', 'description', 'membership', 'price', 'tax', 'created_at']);
    }
}
