<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Modules\Reservations\Domain\Models\PackageType;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class PackageTypeQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = PackageType::query();

        parent::__construct($query, $request);

        $this->allowedFilters([
            AllowedFilter::custom('search', new FuzzyFilter('name')),
        ])->allowedSorts(['name', 'created_at']);
    }
}
