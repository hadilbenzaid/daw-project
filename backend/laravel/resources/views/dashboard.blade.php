<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body class="bg-gray-50 min-h-screen">
    <nav class="bg-white shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex">
                    <div class="flex-shrink-0 flex items-center">
                        <a href="{{ route('dashboard') }}" class="text-2xl font-bold text-blue-600">
                            YourApp
                        </a>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="ml-3 relative">
                        <div class="flex items-center space-x-4">
                            <span class="text-gray-600">{{ Auth::user()->name }}</span>
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button
                                    type="submit"
                                    class="text-sm text-red-500 hover:text-red-700 transition"
                                >
                                    Log Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
    </header>

    <main class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <div class="space-y-4">
                        <h2 class="text-2xl font-semibold text-gray-800">Welcome, {{ Auth::user()->name }}!</h2>
                        <div class="bg-blue-50 border-l-4 border-blue-500 p-4">
                            <p class="text-blue-700">You're successfully logged in to your dashboard.</p>
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-gray-100 p-5 rounded-lg">
                                <h3 class="text-lg font-medium text-gray-700">Recent Activity</h3>
                                <p class="text-gray-500">No recent activity</p>
                            </div>
                            <div class="bg-gray-100 p-5 rounded-lg">
                                <h3 class="text-lg font-medium text-gray-700">Account Status</h3>
                                <p class="text-green-600">Active</p>
                            </div>
                            <div class="bg-gray-100 p-5 rounded-lg">
                                <h3 class="text-lg font-medium text-gray-700">Next Steps</h3>
                                <p class="text-gray-500">Complete your profile</p>
                            </div>
                            <div class="bg-gray-100 p-5 rounded-lg">
                                <h3 class="text-lg font-medium text-gray-700">Edit your profile</h3>
                                <p class="text-gray-500">
                                    <a href="{{ route('profile.edit') }}" class="btn btn-primary">Edit Profile</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>

</body>
</html>
