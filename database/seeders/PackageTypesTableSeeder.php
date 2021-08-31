<?php

namespace Database\Seeders;

use App\Modules\Customers\Domain\Models\CustomerType;
use App\Modules\Reservations\Domain\Models\PackageType;
use Illuminate\Database\Seeder;

class PackageTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->packageTypes() as $packageType){
            $type = PackageType::where('name', $packageType['name'])->first();
            if (!$type) {
                PackageType::create($packageType);
            }
        }
    }

    /**
     * The default package types.
     *
     * @return array
     */
    private function packageTypes(): array
    {
        return [
            [
                'name'     => 'Rooms',
            ],
            [
                'name'     => 'Sharing Area',
            ],
            [
                'name'     => 'Credit Hours',
            ],
            [
                'name'     => 'Monthly',
            ],
            [
                'name'     => 'Friends Card',
            ],
        ];
    }
}
