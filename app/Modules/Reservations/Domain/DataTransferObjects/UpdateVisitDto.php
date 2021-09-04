<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;

use App\Modules\Reservations\App\Requests\UpdateVisitRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateVisitDto extends DataTransferObject
{
    public int $room_id;

    public string $date;

    public string $start_time;

    public string $end_time;

    public int $visit_status_id;

    /**
     * @param UpdateVisitRequest $request
     * @return UpdateVisitDto
     */
    public static function fromRequest(UpdateVisitRequest $request): UpdateVisitDto
    {
        $data = $request->validated();

        $data['room_id'] = (int) $data['room_id'];
        $data['visit_status_id'] = (int) $data['visit_status_id'];

        return new self($data);
    }
}
