<?php


namespace App\Modules\Comments\Domain\DataTransferObjects;


use App\Modules\Comments\App\Requests\CreateCommentRequest;
use Spatie\DataTransferObject\DataTransferObject;

class CreateCommentDto extends DataTransferObject
{
    public string $comment;

    public int $created_by;

    /**
     * @param CreateCommentRequest $request
     * @return CreateCommentDto
     */
    public static function fromRequest(CreateCommentRequest $request): CreateCommentDto
    {
        $data = $request->validated();

        $data['created_by'] = (int)$request->user()->id;

        return new self($data);
    }
}
