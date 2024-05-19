<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Register
    public function register(Request $request) {
        $fields = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:6|max:100',
        ]);

        $user = User::create([
            'name' => $fields['name'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password'])
        ]);
        $token = $user->createToken('api-access-token')->plainTextToken;

        return $this->successResponse('Register successful', ['user' => $user, 'token' => $token]);
    }

    // Login
    public function login(Request $request) {
        $fields = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if(Auth::attempt($fields)) {
            $user = Auth::user();
            $token = $user->createToken('api-access-token')->plainTextToken;
            return $this->successResponse('Login successful', ['user' => $user, 'token' => $token]);
        } else {
            return $this->failResponse('Your credentials went wrong.Try again!');
        }
    }


}
