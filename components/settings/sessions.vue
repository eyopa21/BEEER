<template>
    <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-4 xl:mb-0">
        <div class="flow-root">
            <h3 class="text-xl font-bold">Sessions</h3>
            <ul class="divide-y divide-gray-200">
                <li class="py-4">
                    <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-base font-semibold text-gray-900 truncate">
                                California 123.123.123.123
                            </p>
                            <p class="text-sm font-normal text-gray-500 truncate">
                                Chrome on macOS
                            </p>
                        </div>
                        <div class="inline-flex items-center">
                            <a href="#"
                                class="py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-fuchsia-200">Revoke</a>
                        </div>
                    </div>
                </li>
                <li class="pt-4 pb-6">
                    <div class="flex items-center space-x-4">
                        <div class="flex-shrink-0">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z">
                                </path>
                            </svg>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-base font-semibold text-gray-900 truncate">
                                Rome 24.456.355.98
                            </p>
                            <p class="text-sm font-normal text-gray-500 truncate">
                                Safari on iPhone
                            </p>
                        </div>
                        <div class="inline-flex items-center">
                            <a href="#"
                                class="py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-fuchsia-200">Revoke</a>
                        </div>
                    </div>
                </li>
            </ul>
            <div>
                <button
                    class="text-white bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center">
                    See more
                </button>
            </div>
        </div>
    </div>
</template>