<?php

namespace App\Modules\Reservations\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePackageRequest extends FormRequest
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
            'package_type_id' => 'required|exists:package_types,id',
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'membership' => 'bool',
            'is_flexible' => 'bool',
            'price' => [
                'required',
                'numeric'
            ],
            'tax' => [
                'required',
                'numeric'
            ],
            'hours' => [
                'required',
                'numeric'
            ],
            'expiration_in_hours' => [
                'required',
                'numeric'
            ],
            'customers_to_reserve' => [
                'required',
                'numeric'
            ],
            'customer_type_id' => 'nullable|exists:customer_types,id',
            'rooms' => 'required',
            'rooms.*' => [
                'required',
                'exists:rooms,id'
            ]
        ];
    }
}
