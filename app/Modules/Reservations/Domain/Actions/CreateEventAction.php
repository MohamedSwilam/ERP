<?php


namespace App\Modules\Reservations\Domain\Actions;


use App\Modules\Reservations\Domain\DataTransferObjects\CreateEventDto;
use App\Modules\Reservations\Domain\Models\Event;

class CreateEventAction
{
    /**
     * @param CreateEventDto $createEventDto
     * @return Event
     */
    public function __invoke(CreateEventDto $createEventDto): Event
    {
        return Event::create($createEventDto->toArray());
    }
}
