<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ResponseController extends Controller
{
    public function sendResponse( $data, $message ){
        $response = [
            "success"=> true,
            "data"=> $data,
            "message"=> $message
        ];

        return response()->json( $response, 200 );
    }

    public function sendError( $error, $errorMessages=[], $code ){
        $response = [
            "success"=> false,
            "error"=> $error,
            "code"=> $code
        ];

        if(!empty( $errorMessages )) {
            $response[ "message" ] = $errorMessages;
        }

        return response()->json( $response, $code );
    }
}
