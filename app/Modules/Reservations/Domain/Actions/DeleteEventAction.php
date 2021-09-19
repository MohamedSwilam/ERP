<?php

namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Event;

class DeleteEventAction
{
    public function __invoke(Event $event): ?bool
    {
        CustomerVisit::with([])
            ->where('bookable_type', 'App\\Modules\\Reservations\\Domain\\Models\\Event')
            ->where('bookable_id', $event->id)->delete();
        return $event->delete();
    }
}
