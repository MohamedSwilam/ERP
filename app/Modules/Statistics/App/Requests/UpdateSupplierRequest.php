<?php

namespace App\Modules\Statistics\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateSupplierRequest extends FormRequest
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
            'email' => 'nullable|string|max:255',
            'product' => 'nullable|string|max:255',
            'code' => 'nullable|string|max:255',
            'payment_type' => 'nullable|string|max:255',
        ];
    }
}
