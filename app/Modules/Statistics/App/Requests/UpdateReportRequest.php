<?php

namespace App\Modules\Statistics\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateReportRequest extends FormRequest
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
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'total_messages' => 'required|numeric',
            'customer_numbers' => 'required|string|max:255',
            'follow_up' => 'required|string|max:255',
            'results' => 'required|string|max:255',
        ];
    }
}
