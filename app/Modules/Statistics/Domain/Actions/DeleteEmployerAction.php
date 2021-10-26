<?php

namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\Models\Employer;

class DeleteEmployerAction
{
    public function __invoke(Employer $employer): ?bool
    {
        return $employer->delete();
    }
}
