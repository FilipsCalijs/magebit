@extends('layout.default')

@section('content')
<div class="container flex flex-col md:flex-row flex-wrap my-6 font-bold lg:mt-8 text-3xl">


    <h1 class="text-gray-900 page-title title-font">
        <span class="base" data-ui-id="page-title-wrapper">
            Customer Login
        </span>
    </h1>
</div>


    @if(session('success'))
        <div class="container flex flex-col md:flex-row flex-wrap my-6 font-bold lg:mt-8 text-3xl">
            {{ session('success') }}
        </div>
    @endif

    @if(session('error'))
        <div class="container flex flex-col md:flex-row flex-wrap my-6 font-bold lg:mt-8 text-3xl">
            {{ session('error') }}
        </div>
    @endif
    @if ($errors->any())
    <div class="container flex flex-col md:flex-row flex-wrap my-6 font-bold lg:mt-8 text-3xl">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif


    <div class="columns items-start">
        <div class="column main">
            <div id="customer-login-container" class="login-container">
                <div class="w-full md:w-1/2 mr-4">
                        <form 
                            class="form form-login"
                            action="{{ url('login') }}"
                            method="post"
                            id="customer-login-form"
                        >
                            @csrf
                                                
                            <fieldset class="fieldset login card">

                                    <h2 class="text-xl font-medium title-font text-primary mb-3">
                                        Login
                                    </h2>
    
                                <div class="text-secondary-darker mb-8">
                                    If you have an account, sign in with your email address.
                                </div>
                                <div class="field mt-3">
                                    <label class="label" for="email">
                                        <span>Email</span>
                                    </label>
                                    <div class="control">
                                        <input data-test="login-email" name="email" class="form-input" required="" value=""
                                               autocomplete="off" id="email" type="email" title="Email">
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="pass" class="label">
                                        <span>Password</span>
                                    </label>
                                    <div class="control flex items-center">
                                        <input data-test="login-password" name="password" class="form-input" required=""
                                               autocomplete="off" id="pass" title="Password" type="password">
                                        <div class="cursor-pointer px-4" aria-label="Show Password">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                 fill="currentColor" class="w-5 h-5" width="24" height="24">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                <path fill-rule="evenodd"
                                                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                      clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="actions-toolbar flex justify-between pt-6 pb-2 items-center">
                                    <button data-test="login-submit" type="submit" class="btn btn-primary disabled:opacity-75" name="send">
                                        <span>Sign In</span>
                                    </button>
                                    <a class="underline text-secondary" href="#">
                                        <span>Forgot Your Password?</span>
                                    </a>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                
                <div class="card w-full md:w-1/2 my-8 md:my-0">
                    <div>
                        <h2 class="text-xl font-medium title-font mb-3 text-primary" role="heading" aria-level="2">
                            Personal Information
                        </h2>
                    </div>
                    <form class="form form-register" action="{{ url('register') }}" method="post" id="customer-register-form">
                        @csrf
                        <fieldset class="fieldset register">

                            <div class="field mb-4">
                                <label class="label" for="firstname"><span>First Name</span></label>
                                <div class="control">
                                    <input data-test="register-firstName" name="firstname" id="firstname" type="text"
                                        class="form-input" required>
                                    <div class="text-red-500 text-sm mt-1 error" id="error-firstname"></div>
                                </div>
                            </div>
                            <div class="field mb-4">
                                <label class="label" for="lastname"><span>Last Name</span></label>
                                <div class="control">
                                    <input data-test="register-lastName" name="lastname" id="lastname" type="text"
                                        class="form-input" required>
                                    <div class="text-red-500 text-sm mt-1 error" id="error-lastname"></div>
                                </div>
                            </div>
                            <div class="field mb-4">
                                <label class="label" for="reg-email"><span>Email</span></label>
                                <div class="control">
                                    <input data-test="register-email" name="email" id="reg-email" type="email" class="form-input" required>
                                    <div class="text-red-500 text-sm mt-1 error" id="error-email"></div>
                                </div>
                            </div>

                            <h2 class="field mb-3">
                                <label class="label" for="reg-password"><div class="text-xl font-medium title-font text-primary">Sign-in Information</div></label>
                            </h2>

                            <div class="field mb-4">
                                <label class="label" for="reg-password"><span>Password</span></label>
                                <div class="control flex items-center">
                                    <input data-test="register-password" name="password" id="reg-password" type="password" class="form-input" required>
                                    <!-- Глазик для показа/скрытия пароля -->
                                    <div class="cursor-pointer px-4" aria-label="Show Password">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" class="w-5 h-5" width="24" height="24">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="text-red-500 text-sm mt-1 error" id="error-password"></div>
                            </div>

                            <div class="field mb-4">
                                <label class="label" for="reg-password-confirm"><span>Confirm Password</span></label>
                                <div class="control flex items-center">
                                    <input data-test="register-passwordConfirm" name="password_confirmation" id="reg-password-confirm" type="password" class="form-input" required>
                                    <!-- Глазик для показа/скрытия подтверждения пароля -->
                                    <div class="cursor-pointer px-4" aria-label="Show Password">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                            fill="currentColor" class="w-5 h-5" width="24" height="24">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                            <path fill-rule="evenodd"
                                                d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="text-red-500 text-sm mt-1 error" id="error-password-confirm"></div>
                            </div>


                            <div class="field mb-4 flex items-center">
                                <input data-test="register-newsletter" type="checkbox" name="subscribed" id="subscribed" class="mr-2">
                                <label for="subscribed" class="subscribed-label"><span>Subscribe to Newsletter</span></label>
                            </div>

                            <div class="actions-toolbar pt-6 pb-2 flex justify-end">
                                <button data-test="register-submit" type="submit" class="btn btn-primary disabled:opacity-75">
                                    <span>Register</span>
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>

            </div>
        </div>
    </div>
@stop
