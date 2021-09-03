<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\DataTransferObjects\UpdateEventDto;
use App\Modules\Reservations\Domain\Models\Event;

class UpdateEventAction
{
    /**
     * @param Event $event
     * @param UpdateEventDto $updateEventDto
     * @return Event
     */
    public function __invoke(Event $event, UpdateEventDto $updateEventDto): Event
    {
        $event->update($updateEventDto->toArray());

        return $event;
    }
}
