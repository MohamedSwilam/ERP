<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\App\Requests\UpdateEventRequest;
use App\Modules\Reservations\Domain\DataTransferObjects\UpdateEventDto;
use App\Modules\Reservations\Domain\Models\Event;
use Illuminate\Support\Facades\Storage;

class UpdateEventAction
{
    private SaveMarketingPlanFileAction $saveMarketingPlanFileAction;

    public function __construct(
        SaveMarketingPlanFileAction $saveMarketingPlanFileAction
    ) {
        $this->saveMarketingPlanFileAction = $saveMarketingPlanFileAction;
    }

    /**
     * @param Event $event
     * @param UpdateEventDto $updateEventDto
     * @param UpdateEventRequest $updateEventRequest
     * @return Event
     */
    public function __invoke(Event $event, UpdateEventDto $updateEventDto, UpdateEventRequest $updateEventRequest): Event
    {
        if ($updateEventRequest->hasFile('marketing_plan')) {
            Storage::delete($event->marketing_plan);
            $updateEventDto->marketing_plan = ($this->saveMarketingPlanFileAction)($updateEventRequest->file('marketing_plan'));
        }
        else {
            $updateEventDto->marketing_plan = $event->marketing_plan;
        }

        $event->update($updateEventDto->toArray());

        return $event;
    }
}
