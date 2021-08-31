<?php

namespace App\Modules\Reservations\App\Rules;

use Carbon\Carbon;
use Illuminate\Contracts\Validation\Rule;

class HoursAvailable implements Rule
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
        $diff = Carbon::parse(request()->input('start_time'))
            ->diffInHours(Carbon::parse(request()->input('end_time')));

        return request()->order['remaining_hours'] >= $diff;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Hours are not available';
    }
}
