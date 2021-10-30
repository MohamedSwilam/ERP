<?php

namespace App\Modules\Stocks\App\Requests;

use App\Modules\Stocks\Domain\Models\Stock;
use Illuminate\Foundation\Http\FormRequest;

class CreateBuffetOrderRequest extends FormRequest
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
            'customer_id' => 'required|exists:customers,id',
            'discount' => 'required|numeric|between:0,100',
            'stocks' => 'required',
            'stocks.*.stock_id' => [
                'required',
                'exists:stocks,id'
            ],
            'stocks.*.quantity' => [
                'required',
                'numeric',
                'min:1',
            ],
            'stocks.*' => [
                function($attribute, $value, $fail) {
                    $validQty = Stock::find($value['stock_id'])->quantity;
                    if ($value['quantity'] > $validQty) {
                        return $fail($attribute.' quantity is invalid');
                    }
                }
            ]
        ];
    }
}
