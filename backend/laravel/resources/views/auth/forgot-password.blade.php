<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forgot Password</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-50 flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md">
        <div class="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div class="p-8 space-y-6">
                <div class="text-center">
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
                    <p class="text-gray-500 text-sm">
                        Forgot your password? No problem. Just enter your email address and we'll send you a password reset link.
                    </p>
                </div>

                @if (session('status'))
                    <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                        {{ session('status') }}
                    </div>
                @endif

                <form method="POST" action="{{ route('password.email') }}" class="space-y-6">
                    @csrf

                    <!-- Email Input -->
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            autofocus
                            value="{{ old('email') }}"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 @error('email') border-red-500 @enderror"
                        >
                        @error('email')
                            <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                        @enderror
                    </div>

                    <!-- Submit Button -->
                    <button
                        type="submit"
                        class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Send Password Reset Link
                    </button>

                    <!-- Navigation Links -->
                    <div class="flex items-center justify-between text-sm">
                        <a href="{{ route('login') }}" class="text-blue-600 hover:text-blue-800 transition">
                            Back to Login
                        </a>

                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" class="text-blue-600 hover:text-blue-800 transition">
                                Create Account
                            </a>
                        @endif
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
