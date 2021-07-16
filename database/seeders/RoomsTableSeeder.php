<?php

namespace Database\Seeders;

use App\Modules\Reservations\Domain\Models\Room;
use Illuminate\Database\Seeder;

class RoomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->rooms() as $room){
            $record = Room::where('name', $room)->first();
            if (!$record) {
                Room::create($room);
            }
        }
    }

    /**
     * The default admin users.
     *
     * @return array
     */
    private function rooms(): array
    {
        return [
            [
                'name'          => 'Room A',
                'description'   => 'Description Text Here',
                'max_seats'     => 10,
            ],
            [
                'name'          => 'Room B',
                'description'   => 'Description Text Here',
                'max_seats'     => 20,
            ],
            [
                'name'          => 'Room C',
                'description'   => 'Description Text Here',
                'max_seats'     => 30,
            ],
            [
                'name'          => 'Room D',
                'description'   => 'Description Text Here',
                'max_seats'     => 40,
            ],
        ];
    }
}
