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
            'title' => 'required|string|max:255',
            'description' => 'string',
            'membership' => 'bool',
            'price' => [
                'required',
                'numeric'
            ],
            'tax' => [
                'required',
                'numeric'
            ],
            'rooms' => 'required',
            'rooms.*' => [
                'required',
                'exists:rooms,id'
            ]
        ];
    }
}
