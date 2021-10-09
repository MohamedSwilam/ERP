<?php

namespace App\Modules\Reservations\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateOrderRequest extends FormRequest
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
            'package_id' => 'required|exists:packages,id',
            'starts_at' => 'required|date',
            'discount' => 'required|numeric|between:0,100',
            'seller' => 'required|string|max:255',
            'payment_type' => 'required|string|max:255',
            'customers' => [
                'required',
                'array'
            ],
            'customers.*' => [
                'required',
                'exists:customers,id'
            ],
            'paid' => 'required|numeric',
        ];
    }
}
