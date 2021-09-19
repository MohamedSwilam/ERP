<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\CreateEventRequest;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class CreateEventDto extends DataTransferObject
{
    public string $title;

    public ?int $room_id;

    public string $date;

    public string $start_time;

    public string $end_time;

    public int $visit_status_id;

    public string $host;

    public string $event_type;

    public string $instructor;

    public int $num_of_attendance;

    public float $budget;

    public float $expenses;

    public float $revenue;

    public ?string $other_room;

    /**
     * @param CreateEventRequest $request
     * @return CreateEventDto
     */
    public static function fromRequest(CreateEventRequest $request): CreateEventDto
    {
        $data = $request->validated();

        $data['num_of_attendance'] = (int) $data['num_of_attendance'];
        $data['budget'] = (float) $data['budget'];
        $data['expenses'] = (float) $data['expenses'];
        $data['revenue'] = (float) $data['revenue'];
        $data['visit_status_id'] = (int) $data['visit_status_id'];
        if (isset($data['room_id']))
            $data['room_id'] = (int) $data['room_id'];

        return new self($data);
    }
}
