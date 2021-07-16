<?php

namespace App\Modules\Customers\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateCustomerRequest extends FormRequest
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
            'name' => 'required',
            'phone' => 'required',
            'email' => [
                'required',
                'email',
                'unique:customers,email',
            ],
            'national_id' => 'required',
            'date_of_birth' => 'required',
            'address' => 'required',
            'customer_type_id' => [
                'required',
                'exists:customer_types,id'
            ],
        ];
    }
}
