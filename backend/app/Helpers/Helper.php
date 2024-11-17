<?php

// use App\Http\Traits\StatusTrait;

if(!function_exists('getPagination')){
    /**
     * Returns an array containing the pagination information of a given model.
     *
     * @param  Illuminate\Database\Eloquent\Model  $model
     * @return array
     */
    function getPagination($model)
    {
        $total = $model->total();
        $per_page = $model->perPage();
        $current_page = $model->currentPage();
        $last_page = $model->lastPage();
        $from = $model->firstItem();
        $to = $model->lastItem();

        // Return an array with the pagination information
        return [
            'total' => $total,
            'per_page' => $per_page,
            'current_page' => $current_page,
            'last_page' => $last_page,
            'from' => $from,
            'to' => $to,
        ];
    }

}


// if(!function_exists('statusList')):
//     function statusList(): array
//     {
//         return  App\Http\Traits\StatusTrait::statusList();
//     }
// endif;


// if(!function_exists('statusCodes')):
//     function statusCodes(): array
//     {
//         return App\Http\Traits\StatusTrait::statusCodes();
//     }
// endif;


