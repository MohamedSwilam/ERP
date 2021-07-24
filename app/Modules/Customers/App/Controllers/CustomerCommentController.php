<?php

namespace App\Modules\Customers\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Comments\App\Requests\CreateCommentRequest;
use App\Modules\Comments\App\Transformers\CommentTransformer;
use App\Modules\Comments\Domain\Actions\CreateCommentAction;
use App\Modules\Comments\Domain\DataTransferObjects\CreateCommentDto;
use App\Modules\Comments\Domain\Models\Comment;
use App\Modules\Customers\Domain\Models\Customer;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomerCommentController extends Controller
{
    /**
     * @param Request $request
     * @param Customer $customer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, Customer $customer): JsonResponse
    {
        $this->authorize('browseComments', Customer::class);

        return ApiResponse::indexResponse(
            $customer->comments()->paginate($request->input('paginate')?? 15),
            CommentTransformer::class
        );
    }

    /**
     * @param CreateCommentAction $createCommentAction
     * @param CreateCommentRequest $request
     * @param Customer $customer
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateCommentAction $createCommentAction, CreateCommentRequest $request, Customer $customer): JsonResponse
    {
        $this->authorize('storeComment', Customer::class);

        $comment = $createCommentAction($customer, CreateCommentDto::fromRequest($request));

        return ApiResponse::createResponse(Comment::find($comment->id), CommentTransformer::class);
    }
}
