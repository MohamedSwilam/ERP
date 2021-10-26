<?php


namespace App\Modules\Statistics\Domain\Actions;

use App\Modules\Statistics\Domain\DataTransferObjects\CreateEmployerDto;
use App\Modules\Statistics\Domain\Models\Employer;

class CreateEmployerAction
{
    /**
     * @param CreateEmployerDto $createEmployerDto
     * @return Employer
     */
    public function __invoke(CreateEmployerDto $createEmployerDto): Employer
    {
        return Employer::create($createEmployerDto->toArray());
    }
}
