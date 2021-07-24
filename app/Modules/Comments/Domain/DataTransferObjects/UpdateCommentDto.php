<?php


namespace App\Modules\Comments\Domain\DataTransferObjects;


use App\Modules\Comments\App\Requests\UpdateCommentRequest;
use Spatie\DataTransferObject\DataTransferObject;

class UpdateCommentDto extends DataTransferObject
{
    public string $comment;

    /**
     * @param UpdateCommentRequest $request
     * @return UpdateCommentDto
     */
    public static function fromRequest(UpdateCommentRequest $request): UpdateCommentDto
    {
        $data = $request->validated();

        return new self($data);
    }
}
