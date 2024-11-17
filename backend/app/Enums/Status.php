<?php
namespace App\Enums;
enum Status: string
{

    // new cases
    case Unclaimed = 'unclaimed';
    // operations team contacts the member
    case FirstContact = 'first_contact';
    // searching for a therapist
    case PreparingWorkOffer = 'work_offer';
    // matched with a therapist
    case SendToTherapist = 'send_therapist';


    /**
     * Return the default status.
     *
     * @return static
     */
    public static function default(): self
    {
        return self::Unclaimed;
    }

}

