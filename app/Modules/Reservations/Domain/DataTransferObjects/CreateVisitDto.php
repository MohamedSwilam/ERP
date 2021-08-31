<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;

use App\Modules\Reservations\App\Requests\CreateVisitRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreateVisitDto extends DataTransferObject
{
    public int $room_id;

    public string $date;

    public string $start_time;

    public string $end_time;

    public int $visit_status_id;

    /**
     * @param CreateVisitRequest $request
     * @return CreateVisitDto
     */
    public static function fromRequest(CreateVisitRequest $request): CreateVisitDto
    {
        $data = $request->validated();

        $data['room_id'] = (int) $data['room_id'];
        $data['visit_status_id'] = (int) $data['visit_status_id'];

        return new self($data);
    }
}
