<?php

namespace App\Modules\Reservations\App\Transformers;

use App\Modules\Reservations\Domain\Models\Room;
use League\Fractal\TransformerAbstract;

class RoomTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Room $room
     * @return array
     */
    public function transform(Room $room)
    {
        return $room->toArray();
    }
}
