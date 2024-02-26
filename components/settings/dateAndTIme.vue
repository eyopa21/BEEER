<template>
    <div class="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4 mb-6">
        <h3 class="mb-4 text-xl font-bold">Language &amp; Time</h3>
        <div class="mb-4">
            <label for="settings-language" class="block mb-2 text-sm font-medium text-gray-900">Select
                language</label>
            <select id="settings-language" name="countries"
                class="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5">
                <option>English (US)</option>
                <option>Italiano</option>
                <option>Français (France)</option>
                <option>正體字</option>
                <option>Español (España)</option>
                <option>Deutsch</option>
                <option>Português (Brasil)</option>
            </select>
        </div>
        <div class="mb-6">
            <label for="settings-timezone" class="block mb-2 text-sm font-medium text-gray-900">Time
                Zone</label>
            <select id="settings-timezone" name="countries"
                class="border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:ring-fuchsia-50 focus:border-fuchsia-300 block w-full p-2.5">
                <option>GMT+0 Greenwich Mean Time (GMT)</option>
                <option>GMT+1 Central European Time (CET)</option>
                <option>GMT+2 Eastern European Time (EET)</option>
                <option>GMT+3 Moscow Time (MSK)</option>
                <option>GMT+5 Pakistan Standard Time (PKT)</option>
                <option>GMT+8 China Standard Time (CST)</option>
                <option>
                    GMT+10 Eastern Australia Standard Time (AEST)
                </option>
            </select>
        </div>
        <div>
            <button
                class="text-white bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center">
                Save all
            </button>
        </div>
    </div>
</template>