<?php

namespace Database\Seeders;

use App\Modules\Authentication\Domain\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->users() as $userData){
            $user = User::where('email', $userData['email'])->first();
            if (!$user){
                $user = User::create($userData);
            }
            $user->assignRole('super_admin');
            $user->syncPermissions(Permission::all());
        }
    }

    /**
     * The default admin users.
     *
     * @return array
     */
    private function users(): array
    {
        return [
            [
                'name'     => 'Mohamed Swilam',
                'email'    => 'mohamed_swilam@hotmail.com',
                'password' => bcrypt('password'),
                'email_verified_at' => now(),
            ],
        ];
    }
}
