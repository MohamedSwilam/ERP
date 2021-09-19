<?php

namespace App\Modules\Stocks\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateStockRequest extends FormRequest
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
            'quantity' => 'required|numeric',
            'price_per_piece' => 'required|numeric',
            'sale_price' => 'required|numeric',
            'payment_type' => 'required|string|max:255',
            'total' => 'required|numeric',
            'paid' => 'required|numeric',
        ];
    }
}
