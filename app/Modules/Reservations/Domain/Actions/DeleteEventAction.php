<?php

namespace App\Modules\Reservations\Domain\Actions;

use App\Modules\Reservations\Domain\Models\Event;

class DeleteEventAction
{
    public function __invoke(Event $event): ?bool
    {
        return $event->delete();
    }
}
