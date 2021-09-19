<?php

namespace App\Modules\Reservations\App\Requests;

use App\Modules\Reservations\App\Rules\RoomAvailableRule;
use Illuminate\Foundation\Http\FormRequest;

class CreateEventRequest extends FormRequest
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
                'nullable',
                'exists:rooms,id',
                new RoomAvailableRule()
            ],
            'date' => [
                'required',
                'date'
            ],
            'start_time' => 'required|date_format:H:i:s',
            'end_time' => [
                'required',
                'date_format:H:i:s'
            ],
            'title' => 'required|string|max:255',
            'host' => 'required|string|max:255',
            'event_type' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'num_of_attendance' => 'required|numeric',
            'budget' => 'required|numeric',
            'expenses' => 'required|numeric',
            'revenue' => 'required|numeric',
            'other_room' => 'nullable|string|max:255',
            'visit_status_id' => 'required|exists:visit_statuses,id',
        ];
    }
}
