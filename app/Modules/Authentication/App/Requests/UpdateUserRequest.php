<?php

namespace App\Modules\Authentication\App\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => [
                'required',
                'email',
                'unique:users,email,' . $this->user->id,
            ],
            'password' => [
                'nullable',
                'confirmed'
            ],
            'roles' => [
                'required',
                'array'
            ],
            'roles.*' => [
                'required',
                'exists:roles,name'
            ],
            'permissions' => [
                'nullable',
                'array'
            ],
            'permissions.*' => [
                'required',
                'exists:permissions,name'
            ],
        ];
    }
}
