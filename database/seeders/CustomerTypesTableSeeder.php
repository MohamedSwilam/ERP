<?php

namespace Database\Seeders;

use App\Modules\Customers\Domain\Models\CustomerType;
use Illuminate\Database\Seeder;

class CustomerTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->customerTypes() as $customerType){
            $type = CustomerType::where('type', $customerType['type'])->first();
            if (!$type) {
                CustomerType::create($customerType);
            }
        }
    }

    /**
     * The default admin users.
     *
     * @return array
     */
    private function customerTypes(): array
    {
        return [
            [
                'type'     => 'Student',
            ],
            [
                'type'     => 'Student Activity',
            ],
            [
                'type'     => 'Beginner Coach',
            ],
            [
                'type'     => 'Professional Coach',
            ],
        ];
    }
}
