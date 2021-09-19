<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\DataTransferObjects\CreateEventDto;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Event;

class CreateEventVisitAction
{
    /**
     * @param Event $event
     * @param CreateEventDto $createEventDto
     * @return bool
     */
    public function __invoke(Event $event, CreateEventDto $createEventDto): CustomerVisit
    {
        $customerVisit = new CustomerVisit();

        $customerVisit->room_id = $createEventDto->room_id;
        $customerVisit->date = $createEventDto->date;
        $customerVisit->start_time = $createEventDto->start_time;
        $customerVisit->end_time = $createEventDto->end_time;
        $customerVisit->visit_status_id = $createEventDto->visit_status_id;

        return $event->customerVisits()->save($customerVisit);
    }
}
