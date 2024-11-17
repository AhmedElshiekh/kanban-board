<?php

namespace App\Http\Requests;

use App\Http\Class\Status as Status;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateMemberRequest extends FormRequest
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
            'name'     => 'nullable|string|max:255',
            'title'    => 'nullable|string|max:255',
            'age'      => 'nullable|integer|min:1',
            'email'    => 'nullable|string|email|max:255|unique:members,email,' . $this->member->id,
            'phone'    => 'nullable|string|max:255|unique:members,phone,' . $this->member->id,
            'status'   => ['nullable', 'string', Rule::in(Status::statusList())],
        ];
    }
}
