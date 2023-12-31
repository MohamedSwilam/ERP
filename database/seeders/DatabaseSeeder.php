<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        (new RolesAndPermissionsSeeder())->run();
        (new UsersTableSeeder())->run();
        (new CustomerTypesTableSeeder())->run();
        (new PackageTypesTableSeeder())->run();
        (new RoomsTableSeeder())->run();
        (new VisitStatusesTableSeeder())->run();
    }
}
