<?php

namespace App\Modules\Authentication\Domain\DataTransferObjects;

use App\Modules\Authentication\App\Requests\UpdateUserRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateUserDto extends DataTransferObject
{
    public string $name;

    public string $email;

    public ?array $roles;

    public ?array $permissions;

    public static function fromRequest(UpdateUserRequest $request): UpdateUserDto
    {
        $data = $request->validated();

        return new self($data);
    }
}
