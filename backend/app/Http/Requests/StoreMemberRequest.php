<?php

namespace App\Http\Requests;

use App\Http\Class\Status as Status;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreMemberRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name'   => 'required|string|max:255',
            'title'  => 'required|string|max:255',
            'age'    => 'required|integer|min:1',
            'email'  => 'required|string|email|max:255|unique:members,email',
            'phone'  => 'required|string|max:255|unique:members,phone',
            'status' => ['nullable', 'string', Rule::in(Status::statusList())]
        ];
    }
}
