<?php

namespace App\Modules\Reservations\App\Rules;

use App\Modules\Reservations\Domain\Models\CustomerVisit;
use App\Modules\Reservations\Domain\Models\Room;
use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;
use Illuminate\Support\Facades\Date;

class RoomAvailableRule implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if (!$value) return true;
        $room = Room::find($value);
        if ($room->multiple_to_reserve === 1) return true;
        if (request()->method() == 'PUT') {
            $visit = CustomerVisit::where([
                ['room_id', '=', $value],
                ['date', '=', request()->input('date')],
                ['start_time', '<=', request()->input('start_time')],
                ['end_time', '>=', request()->input('end_time')],
                ['id', '!=', request()->visit->id]
            ])->first();
        } else {
            $visit = CustomerVisit::where([
                ['room_id', '=', $value],
                ['date', '=', request()->input('date')],
                ['start_time', '<=', request()->input('start_time')],
                ['end_time', '>=', request()->input('end_time')],
            ])->first();
        }
        return !$visit;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Room is not available.';
    }
}
