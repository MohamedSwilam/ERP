<?php


namespace App\Modules\Reservations\Domain\Actions;


use App\Modules\Reservations\App\Requests\CreateEventRequest;
use App\Modules\Reservations\Domain\DataTransferObjects\CreateEventDto;
use App\Modules\Reservations\Domain\Models\Event;

class CreateEventAction
{
    private SaveEventAction $saveEventAction;

    private CreateEventVisitAction $createEventVisitAction;

    private SaveMarketingPlanFileAction $saveMarketingPlanFileAction;

    public function __construct(
        SaveEventAction $saveEventAction,
        CreateEventVisitAction $createEventVisitAction,
        SaveMarketingPlanFileAction $saveMarketingPlanFileAction
    ){
        $this->saveEventAction = $saveEventAction;
        $this->createEventVisitAction = $createEventVisitAction;
        $this->saveMarketingPlanFileAction = $saveMarketingPlanFileAction;
    }

    /**
     * @param CreateEventRequest $createEventRequest
     * @return Event
     */
    public function __invoke(CreateEventRequest $createEventRequest): Event
    {
        $data = CreateEventDto::fromRequest($createEventRequest);

        if ($createEventRequest->hasFile('marketing_plan')) {
            $data->marketing_plan = ($this->saveMarketingPlanFileAction)($createEventRequest->file('marketing_plan'));
        }

        $event = ($this->saveEventAction)($data);

        ($this->createEventVisitAction)($event, (CreateEventDto::fromRequest($createEventRequest)));

        return $event;
    }
}
