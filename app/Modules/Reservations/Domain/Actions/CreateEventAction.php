<?php


namespace App\Modules\Reservations\Domain\Actions;


use App\Modules\Reservations\App\Requests\CreateEventRequest;
use App\Modules\Reservations\Domain\DataTransferObjects\CreateEventDto;
use App\Modules\Reservations\Domain\Models\Event;

class CreateEventAction
{
    private SaveEventAction $saveEventAction;

    private CreateEventVisitAction $createEventVisitAction;

    public function __construct(
        SaveEventAction $saveEventAction,
        CreateEventVisitAction $createEventVisitAction
    ){
        $this->saveEventAction = $saveEventAction;
        $this->createEventVisitAction = $createEventVisitAction;
    }

    /**
     * @param CreateEventRequest $createEventRequest
     * @return Event
     */
    public function __invoke(CreateEventRequest $createEventRequest): Event
    {
        $event = ($this->saveEventAction)(CreateEventDto::fromRequest($createEventRequest));

        ($this->createEventVisitAction)($event, (CreateEventDto::fromRequest($createEventRequest)));

        return $event;
    }
}
