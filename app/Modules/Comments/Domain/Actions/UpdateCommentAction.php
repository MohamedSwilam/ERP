<?php


namespace App\Modules\Comments\Domain\Actions;


use App\Modules\Comments\Domain\DataTransferObjects\UpdateCommentDto;
use App\Modules\Comments\Domain\Models\Comment;

class UpdateCommentAction
{
    /**
     * @param Comment $comment
     * @param UpdateCommentDto $updateCommentDto
     * @return Comment
     */
    public function __invoke(Comment $comment, UpdateCommentDto $updateCommentDto): Comment
    {
        $comment->update($updateCommentDto->toArray());

        return $comment;
    }
}
