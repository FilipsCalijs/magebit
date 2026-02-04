<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AccountController extends Controller
{
    public function index(): Response
    {
        return response()->view('page.account');
    }

    public function login(Request $request): RedirectResponse
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('success');
        }

        return redirect()->route('index')->with('error', 'Invalid email or password.');
    }

    public function logout(Request $request): RedirectResponse
    {
        if (Auth::check()) {
            Auth::logout();
            $request->session()->invalidate();
            $request->session()->regenerateToken();
        }

        return redirect()->route('index');
    }

    public function register(Request $request): RedirectResponse
    {
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => ['required', 'confirmed', Password::min(8)->letters()->numbers()],
            'subscribed' => 'sometimes|boolean',
        ]);

        User::create([
            'firstname' => $request->firstname,
            'lastname' => $request->lastname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'subscribed' => $request->has('subscribed'),
        ]);

        return redirect()->route('index')->with('success', 'User registered successfully!');
    }

    public function success(): View|RedirectResponse
    {
        if (Auth::check()) {
            $user = Auth::user();

            return view('page.success')->with([
                'firstname' => $user->firstname,
                'lastname' => $user->lastname,
            ]);
        }

        return redirect()->route('index');
    }
}
