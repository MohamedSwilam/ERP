<?php

namespace App\Modules\Reservations\App\Requests;

use App\Modules\Reservations\App\Rules\HoursAvailable;
use App\Modules\Reservations\App\Rules\OrderNotExpiredRule;
use App\Modules\Reservations\App\Rules\RoomAvailableRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateVisitRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'room_id' => [
                'required',
                'exists:rooms,id',
                new RoomAvailableRule()
            ],
            'date' => [
                'required',
                'date',
                new OrderNotExpiredRule()
            ],
            'start_time' => 'required|date_format:H:i:s',
            'end_time' => [
                'required',
                'date_format:H:i:s',
                new HoursAvailable()
            ],
            'visit_status_id' => 'required|exists:visit_statuses,id',
        ];
    }
}
