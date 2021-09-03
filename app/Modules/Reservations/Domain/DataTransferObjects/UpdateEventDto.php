<?php


namespace App\Modules\Reservations\Domain\DataTransferObjects;


use App\Modules\Reservations\App\Requests\CreateEventRequest;
use App\Modules\Reservations\App\Requests\UpdateEventRequest;
use Carbon\Carbon;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateEventDto extends DataTransferObject
{
    public string $title;

    public string $event_date;

    public string $host;

    public string $duration;

    public string $event_type;

    public string $instructor;

    public int $num_of_attendance;

    public float $budget;

    public float $expenses;

    public float $revenue;

    /**
     * @param UpdateEventDto $request
     * @return UpdateEventDto
     */
    public static function fromRequest(UpdateEventRequest $request): UpdateEventDto
    {
        $data = $request->validated();

        $data['event_date'] = Carbon::make($data['event_date'])->toDateTimeString();
        $data['num_of_attendance'] = (int) $data['num_of_attendance'];
        $data['budget'] = (float) $data['budget'];
        $data['expenses'] = (float) $data['expenses'];
        $data['revenue'] = (float) $data['revenue'];

        return new self($data);
    }
}
