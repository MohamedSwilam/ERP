<?php


namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\DataTransferObjects\UpdateEventDto;
use App\Modules\Reservations\Domain\DataTransferObjects\UpdateVisitDto;
use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Event;
use App\Modules\Reservations\Domain\Models\Order;
use Carbon\Carbon;

class UpdateVisitAction
{
    /**
     * @param CustomerVisit $visit
     * @param UpdateVisitDto $updateVisitDto
     * @return CustomerVisit
     */
    public function __invoke(CustomerVisit $visit, UpdateVisitDto $updateVisitDto): CustomerVisit
    {
        $old_diff = Carbon::parse($visit->start_time)->diffInHours(Carbon::parse($visit->end_time));
        $new_diff = Carbon::parse($updateVisitDto->start_time)->diffInHours(Carbon::parse($updateVisitDto->end_time));

        $order = $visit->bookable();

        $order->update([
            'remaining_hours' => $order->first()->remaining_hours + $old_diff - $new_diff
        ]);

        $visit->update($updateVisitDto->toArray());

        return $visit;
    }
}
