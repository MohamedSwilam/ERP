<?php

namespace App\Modules\Statistics\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEmployerRequest extends FormRequest
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
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
            'national_id' => 'nullable|string|max:255',
            'joining_date' => 'nullable|string|max:255',
            'salary' => 'nullable|string|max:255',
            'military_status' => 'nullable|string|max:255',
            'criminal_record_status' => 'nullable|string|max:255',
            'medical_insurance_number' => 'nullable|string|max:255',
            'social_insurance_number' => 'nullable|string|max:255',
        ];
    }
}
