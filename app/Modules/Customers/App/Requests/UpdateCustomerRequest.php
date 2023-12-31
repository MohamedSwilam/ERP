<?php

namespace App\Modules\Customers\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCustomerRequest extends FormRequest
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
                'nullable',
                'email',
                'unique:customers,email,' . $this->customer->id,
            ],
            'national_id' => 'nullable',
            'date_of_birth' => 'required',
            'address' => 'required',
            'customer_type_id' => [
                'required',
                'exists:customer_types,id'
            ],
            'last_follow_up' => '',
            'next_follow_up' => '',
        ];
    }
}
