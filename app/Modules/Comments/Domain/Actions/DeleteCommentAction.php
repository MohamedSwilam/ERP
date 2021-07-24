<?php


namespace App\Modules\Comments\Domain\Actions;


use App\Modules\Comments\Domain\Models\Comment;

class DeleteCommentAction
{
    public function __invoke(Comment $comment): ?bool
    {
        return $comment->delete();
    }
}
