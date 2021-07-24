<?php


namespace App\Modules\Comments\Domain\Actions;


use App\Modules\Comments\Domain\DataTransferObjects\CreateCommentDto;
use App\Modules\Comments\Domain\Models\Comment;

class CreateCommentAction
{
    /**
     * @param $model
     * @param CreateCommentDto $commentDto
     * @return Comment
     */
    public function __invoke($model, CreateCommentDto $commentDto): Comment
    {
        $comment = new Comment();

        $comment->comment = $commentDto->comment;

        $comment->created_by = $commentDto->created_by;

        return $model->comments()->save($comment);
    }
}
