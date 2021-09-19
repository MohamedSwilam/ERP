<?php


namespace App\Modules\Reservations\App\QueryBuilders\CustomFilters;


use Illuminate\Database\Eloquent\Builder;
use Spatie\QueryBuilder\Filters\Filter;

class FilterCustomer implements Filter
{
    public function __invoke(Builder $query, $value, string $property)
    {
        $query->whereHas('customers', function (Builder $query) use ($value) {
            $query->where('name', $value);
        });
    }
}
