<?php

namespace App\Modules\Statistics\App\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Responses\Facades\ApiResponse;
use App\Modules\Statistics\App\QueryBuilders\ReportQueryBuilder;
use App\Modules\Statistics\App\Requests\CreateReportRequest;
use App\Modules\Statistics\App\Requests\UpdateReportRequest;
use App\Modules\Statistics\App\Transformers\ReportTransformer;
use App\Modules\Statistics\Domain\Actions\CreateReportAction;
use App\Modules\Statistics\Domain\Actions\DeleteReportAction;
use App\Modules\Statistics\Domain\Actions\UpdateReportAction;
use App\Modules\Statistics\Domain\DataTransferObjects\CreateReportDto;
use App\Modules\Statistics\Domain\DataTransferObjects\UpdateReportDto;
use App\Modules\Statistics\Domain\Models\Report;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * @param Request $request
     * @param ReportQueryBuilder $reportQueryBuilder
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function index(Request $request, ReportQueryBuilder $reportQueryBuilder): JsonResponse
    {
        $this->authorize('browse', Report::class);

        return ApiResponse::indexResponse(
            $reportQueryBuilder->paginate($request->input('paginate')?? 15),
            ReportTransformer::class
        );
    }

    /**
     * @param Report $report
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function show(Report $report): JsonResponse {
        $this->authorize('view', Report::class);

        return ApiResponse::showResponse($report, ReportTransformer::class);
    }

    /**
     * @param CreateReportAction $createReportAction
     * @param CreateReportRequest $request
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function store(CreateReportAction $createReportAction, CreateReportRequest $request): JsonResponse
    {
        $this->authorize('store', Report::class);

        $report = $createReportAction(CreateReportDto::fromRequest($request));

        return ApiResponse::createResponse($report, ReportTransformer::class);
    }

    /**
     * @param UpdateReportAction $updateReportAction
     * @param UpdateReportRequest $request
     * @param Report $report
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function update(UpdateReportAction $updateReportAction, UpdateReportRequest $request, Report $report): JsonResponse
    {
        $this->authorize('update', Report::class);

        $updateReportAction($report, UpdateReportDto::fromRequest($request));

        return ApiResponse::updateResponse(Report::find($report->id), ReportTransformer::class);
    }

    /**
     * @param DeleteReportAction $deleteReportAction
     * @param Report $report
     * @return JsonResponse
     * @throws AuthorizationException
     */
    public function destroy(DeleteReportAction $deleteReportAction, Report $report): JsonResponse
    {
        $this->authorize('destroy', Report::class);

        $deleteReportAction($report);

        return ApiResponse::deleteResponse();
    }
}
