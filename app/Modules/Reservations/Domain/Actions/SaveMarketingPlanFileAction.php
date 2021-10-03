<?php

namespace App\Modules\Reservations\Domain\Actions;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class SaveMarketingPlanFileAction
{
    public function __invoke(UploadedFile $file): string
    {
        return Storage::putFile('plans', $file);
    }
}
