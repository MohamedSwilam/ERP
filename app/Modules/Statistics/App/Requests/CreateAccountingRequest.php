<?php

namespace App\Modules\Statistics\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateAccountingRequest extends FormRequest
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
            'utilities' => 'required|numeric',
            'monthly_rent' => 'required|numeric',
            'advertising_budget' => 'required|numeric',
            'fixes' => 'required|numeric',
            'employees_data' => 'required|numeric',
            'suppliers_data' => 'required|numeric',
            'revenue' => 'required|numeric',
        ];
    }
}
