<?php

namespace App\Http\Class;

use App\Enums\Status as EnumsStatus;

class Status
{
    /**
     * Return an array of all statuses.
     *
     * @return array<string> An array of statuses.
     */
    public static function statusList(): array
    {
        // Get all the statuses using the enum
        EnumsStatus::cases();

        // Return the value of each status
        return array_column(EnumsStatus::cases(), 'name');
    }

    /**
     * Return an array of all statuses codes.
     *
     * @return array<int> An array of statuses codes.
     */
    public static function statusCodes(): array
    {
        // Get all the statuses using the enum
        EnumsStatus::cases();

        // Return the value of each status
        return array_column(EnumsStatus::cases(), 'value');
    }

    /**
     * Return the status code for a given status name.
     *
     * @param string $name The name of the status.
     *
     * @return string The status code.
     */
    public static function getCode(string $name): string
    {
        // Get all the statuses using the enum
        $cases = EnumsStatus::cases();

        // Find the status with the given name
        $status = collect($cases)->firstWhere('name', $name);

        // Return the value of each status
        return $status->value;
    }


    /**
     * Return the status name for a given status code.
     *
     * @param string $code The code of the status.
     *
     * @return string The status name.
     */
    public static function getName(string $code): string
    {
        // Retrieve the status name using the given code from the EnumsStatus
        $name = EnumsStatus::from($code)->name;

        // Return the status name
        return $name;
    }


    /**
     * Return the default status.
     *
     * @return static
     */
    public static function default(): string
    {
        return EnumsStatus::default()->value;
    }

}
