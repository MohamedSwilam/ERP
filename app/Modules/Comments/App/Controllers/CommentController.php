<?php

namespace App\Modules\Comments\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Comments\App\Requests\UpdateCommentRequest;
use App\Modules\Comments\App\Transformers\CommentTransformer;
use App\Modules\Comments\Domain\Actions\DeleteCommentAction;
use App\Modules\Comments\Domain\Actions\UpdateCommentAction;
use App\Modules\Comments\Domain\DataTransferObjects\UpdateCommentDto;
use App\Modules\Comments\Domain\Models\Comment;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;

class CommentController extends Controller
{

    /**
     * @param UpdateCommentAction $updateCommentAction
     * @param UpdateCommentRequest $request
     * @param Comment $comment
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateCommentAction $updateCommentAction, UpdateCommentRequest $request, Comment $comment): JsonResponse
    {
        $this->authorize('update', Comment::class);

        $updateCommentAction($comment, UpdateCommentDto::fromRequest($request));

        return ApiResponse::updateResponse(Comment::find($comment->id), CommentTransformer::class);
    }

    /**
     * @param DeleteCommentAction $deleteCommentAction
     * @param Comment $comment
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteCommentAction $deleteCommentAction, Comment $comment): JsonResponse
    {
        $this->authorize('destroy', Comment::class);

        $deleteCommentAction($comment);

        return ApiResponse::deleteResponse();
    }
}
