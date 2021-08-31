<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Comments\App\Requests\CreateCommentRequest;
use App\Modules\Comments\App\Transformers\CommentTransformer;
use App\Modules\Comments\Domain\Actions\CreateCommentAction;
use App\Modules\Comments\Domain\DataTransferObjects\CreateCommentDto;
use App\Modules\Comments\Domain\Models\Comment;
use App\Modules\Reservations\App\QueryBuilders\OrderCommentQueryBuilder;
use App\Modules\Reservations\Domain\Models\Order;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderCommentController extends Controller
{
    /**
     * @param Request $request
     * @param Order $order
     * @param OrderCommentQueryBuilder $orderCommentQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, Order $order, OrderCommentQueryBuilder $orderCommentQueryBuilder): JsonResponse
    {
        $this->authorize('browseComments', Order::class);
        return ApiResponse::indexResponse(
            $orderCommentQueryBuilder->paginate($request->input('paginate')?? 15),
            CommentTransformer::class
        );
    }

    /**
     * @param CreateCommentAction $createCommentAction
     * @param CreateCommentRequest $request
     * @param Order $order
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateCommentAction $createCommentAction, CreateCommentRequest $request, Order $order): JsonResponse
    {
        $this->authorize('storeComment', Order::class);

        $comment = $createCommentAction($order, CreateCommentDto::fromRequest($request));

        return ApiResponse::createResponse(Comment::find($comment->id), CommentTransformer::class);
    }
}
