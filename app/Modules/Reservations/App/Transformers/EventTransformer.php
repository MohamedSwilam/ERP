<?php

namespace App\Modules\Reservations\App\Transformers;

use App\Modules\Reservations\Domain\Models\Event;
use Illuminate\Support\Facades\Storage;
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
        $data = $event->toArray();
        $data['marketing_plan'] = $data['marketing_plan']? Storage::url($event->marketing_plan) : $data['marketing_plan'];
        return $data;
    }
}
