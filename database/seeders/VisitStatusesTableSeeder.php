<?php

namespace Database\Seeders;

use App\Modules\Customers\Domain\Models\CustomerType;
use App\Modules\Reservations\Domain\Models\VisitStatus;
use Illuminate\Database\Seeder;

class VisitStatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->visitStatuses() as $visitStatus){
            $status = VisitStatus::where('name', $visitStatus['name'])->first();
            if (!$status) {
                VisitStatus::create($visitStatus);
            }
        }
    }

    /**
     * The default admin users.
     *
     * @return array
     */
    private function visitStatuses(): array
    {
        return [
            [
                'name'     => 'Booking',
                'color'     => 'primary',
            ],
            [
                'name'     => 'Completed',
                'color'     => 'success',
            ],
            [
                'name'     => 'Canceled',
                'color'     => 'danger',
            ],
        ];
    }
}
