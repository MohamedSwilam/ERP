<?php

namespace App\Modules\Reservations\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Reservations\App\QueryBuilders\EventQueryBuilder;
use App\Modules\Reservations\App\Requests\CreateEventRequest;
use App\Modules\Reservations\App\Requests\UpdateEventRequest;
use App\Modules\Reservations\App\Transformers\EventTransformer;
use App\Modules\Reservations\Domain\Actions\CreateEventAction;
use App\Modules\Reservations\Domain\Actions\DeleteEventAction;
use App\Modules\Reservations\Domain\Actions\UpdateEventAction;
use App\Modules\Reservations\Domain\DataTransferObjects\CreateEventDto;
use App\Modules\Reservations\Domain\DataTransferObjects\UpdateEventDto;
use App\Modules\Reservations\Domain\Models\Event;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * @param Request $request
     * @param EventQueryBuilder $eventQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, EventQueryBuilder $eventQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Event::class);

        return ApiResponse::indexResponse(
            $eventQueryBuilder->paginate($request->input('paginate')?? 15),
            EventTransformer::class
        );
    }

    /**
     * @param Event $event
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Event $event): JsonResponse {
        $this->authorize('view', Event::class);

        return ApiResponse::showResponse($event, EventTransformer::class);
    }

    /**
     * @param CreateEventAction $createEventAction
     * @param CreateEventRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateEventAction $createEventAction, CreateEventRequest $request): JsonResponse
    {
        $this->authorize('store', Event::class);

        $event = $createEventAction(CreateEventDto::fromRequest($request));

        return ApiResponse::createResponse($event, EventTransformer::class);
    }

    /**
     * @param UpdateEventAction $updateEventAction
     * @param UpdateEventRequest $request
     * @param Event $event
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateEventAction $updateEventAction, UpdateEventRequest $request, Event $event): JsonResponse
    {
        $this->authorize('update', Event::class);

        $updateEventAction($event, UpdateEventDto::fromRequest($request));

        return ApiResponse::updateResponse(Event::find($event->id), EventTransformer::class);
    }

    /**
     * @param DeleteEventAction $deleteEventAction
     * @param Event $event
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteEventAction $deleteEventAction, Event $event): JsonResponse
    {
        $this->authorize('destroy', Event::class);

        $deleteEventAction($event);

        return ApiResponse::deleteResponse();
    }
}
