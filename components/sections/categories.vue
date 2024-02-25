<template>
    <div class="py-24 sm:py-32">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
            <div class="text-center flex flex-col items-center">
                <div class="mb-2 text-base/7 font-semibold text-primary">Features</div>
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
                    Why choose our service?
                </h2>
                <p class="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 scroll-mt-[calc(var(--header-height)+140px+128px+96px)]"
                id="features">
                <div v-for="i in 6" :key="i"
                    class="relative group isolate rounded-xl background-gradient ring-1 ring-gray-200 dark:ring-gray-800 before:hidden before:lg:block before:absolute before:-inset-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:z-[-1] before:rounded-[13px] flex-1 flex flex-col shadow">
                    <div
                        class="flex-1 flex flex-col overflow-hidden rounded-xl divide-y divide-gray-200 dark:divide-gray-800 bg-white dark:bg-gray-900 hover:bg-opacity-90 dark:hover:bg-opacity-90 transition-[background-opacity]">
                        <div class="gap-x-8 gap-y-4 rounded-xl flex-1 flex flex-col px-4 py-5 sm:p-6">
                            <div class="">
                                <div class="mb-2 pointer-events-none">
                                    <span
                                        class="i-heroicons-cog w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"></span>
                                </div>
                                <p class="text-gray-900 dark:text-white text-base font-bold truncate">
                                    Easy to use
                                </p>
                                <p class="text-[15px] text-gray-500 dark:text-gray-400 mt-1">
                                    Id laborum laboris duis nostrud excepteur ut velit nulla magna
                                    Lorem proident non.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
