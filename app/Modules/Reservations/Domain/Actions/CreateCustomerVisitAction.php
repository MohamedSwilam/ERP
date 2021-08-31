<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\DataTransferObjects\CreateVisitDto;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use Carbon\Carbon;

class CreateCustomerVisitAction
{
    /**
     * @param $model
     * @param CreateVisitDto $createVisitDto
     * @return CustomerVisit
     */
    public function __invoke($model, CreateVisitDto $createVisitDto): CustomerVisit
    {
        $customerVisit = new CustomerVisit();

        $customerVisit->room_id = $createVisitDto->room_id;
        $customerVisit->date = $createVisitDto->date;
        $customerVisit->start_time = $createVisitDto->start_time;
        $customerVisit->end_time = $createVisitDto->end_time;
        $customerVisit->visit_status_id = $createVisitDto->visit_status_id;

        // subtract remaining hours
        $diff = Carbon::parse($customerVisit->start_time)->diffInHours(Carbon::parse($customerVisit->end_time));
        $model->update([
           'remaining_hours' => $model->remaining_hours - $diff
        ]);

        return $model->customerVisits()->save($customerVisit);
    }
}
