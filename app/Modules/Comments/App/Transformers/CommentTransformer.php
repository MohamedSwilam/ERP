<?php

namespace App\Modules\Comments\App\Transformers;

use App\Modules\Comments\Domain\Models\Comment;
use League\Fractal\TransformerAbstract;

class CommentTransformer extends TransformerAbstract
{
    /**
     * List of resources to automatically include
     *
     * @var array
     */
    protected $defaultIncludes = [
        //
    ];

    /**
     * List of resources possible to include
     *
     * @var array
     */
    protected $availableIncludes = [
        //
    ];

    /**
     * A Fractal transformer.
     *
     * @param Comment $comment
     * @return array
     */
    public function transform(Comment $comment)
    {
        return $comment->toArray();
    }
}
