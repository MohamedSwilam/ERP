<?php


namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\DataTransferObjects\UpdateEmployerDto;
use App\Modules\Statistics\Domain\Models\Employer;

class UpdateEmployerAction
{
    /**
     * @param Employer $employer
     * @param UpdateEmployerDto $updateEmployerDto
     * @return Employer
     */
    public function __invoke(Employer $employer, UpdateEmployerDto $updateEmployerDto): Employer
    {
        $employer->update($updateEmployerDto->toArray());

        return $employer;
    }
}
