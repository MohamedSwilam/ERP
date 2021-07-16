<?php


namespace App\Modules\Reservations\App\QueryBuilders;


use App\Modules\Reservations\Domain\Models\Room;
use App\Support\Filters\FuzzyFilter;
use Illuminate\Http\Request;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class RoomQueryBuilder extends QueryBuilder
{
    public function __construct(Request $request)
    {
        $query = Room::query();

        parent::__construct($query, $request);

        $this->allowedFilters([
            AllowedFilter::custom('search', new FuzzyFilter('name', 'description')),
        ])->allowedSorts(['name', 'description', 'created_at']);
    }
}
