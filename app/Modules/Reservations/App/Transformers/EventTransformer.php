<?php

namespace App\Modules\Reservations\App\Transformers;

use App\Modules\Reservations\Domain\Models\Event;
use League\Fractal\TransformerAbstract;

class EventTransformer extends TransformerAbstract
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
     * @param Event $event
     * @return array
     */
    public function transform(Event $event)
    {
        return $event->toArray();
    }
}
