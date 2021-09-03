<?php

namespace App\Modules\Reservations\App\Requests;

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
            'title' => 'required|string|max:255',
            'event_date' => 'required|date',
            'host' => 'required|string|max:255',
            'duration' => 'required|string|max:255',
            'event_type' => 'required|string|max:255',
            'instructor' => 'required|string|max:255',
            'num_of_attendance' => 'required|numeric',
            'budget' => 'required|numeric',
            'expenses' => 'required|numeric',
            'revenue' => 'required|numeric',
        ];
    }
}
