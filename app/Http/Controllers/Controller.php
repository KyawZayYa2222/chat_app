<?php

namespace App\Http\Controllers;

abstract class Controller
{
    public function successResponse(string $message='', array $data=[], int $status=200) {
        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $data
        ], $status);
    }

    public function failResponse(string $message='', array $data=[], int $status=403) {
        return response()->json([
            'success' => false,
            'message' => $message,
            'data' => $data
        ], $status);
    }
}
