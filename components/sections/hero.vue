
<template>
    <div class="overlay">
        <div class="gradient" />
        <div class=" py-24 sm:py-32 md:py-40 relative">

            <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl gap-16 sm:gap-y-24 flex flex-col">
                <div class="text-center">
                    <div class="mb-10">
                        <span
                            class="inline-flex items-center text-sm px-2.5 py-1.5 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 relative rounded-full font-semibold"><a
                                class="focus:outline-none">
                                <span class="absolute inset-0"></span></a>
                            For the love of ART
                            <span
                                class="i-heroicons-arrow-top-right-on-square-20-solid ml-1 w-4 h-4 pointer-events-none"></span></span>
                    </div>
                    <h1 class="text-5xl font-bold tracking-tight text-black dark:text-gray-100  sm:text-7xl">
                        Welcome to beeer.com
                    </h1>
                    <p class="mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300">
                        Let us colaborate and build the first open source platform
                    </p>
                    <div class="mt-10 flex flex-wrap gap-x-6 gap-y-3 justify-center">
                        <a
                            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm text-white dark:text-gray-900 bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 dark:bg-white dark:hover:bg-gray-100 dark:disabled:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"><span
                                class="">Get started</span>
                            <Icon name="i-heroicons-arrow-long-right-16-solid" class=" flex-shrink-0 h-6 w-6" />

                        </a>
                        <a
                            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-base gap-x-2.5 px-3.5 py-2.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
                            <Icon name="i-heroicons-at-symbol-16-solid" class=" flex-shrink-0 h-6 w-6" />
                            <span>About us</span>
                        </a>
                    </div>
                </div>

                <div class="text-center mt-16">
                    <h2 class="text-lg font-semibold leading-8 text-gray-900 dark:text-white">
                        Trusted by the world's best
                    </h2>
                    <div class="mx-auto mt-10 flex flex-wrap items-center justify-between gap-8">
                        <Icon v-for="i in 5" :key="i" name="mdi:google"
                            class="i-simple-icons-amazonaws w-12 h-12 lg:w-16 lg:h-16 flex-shrink-0 text-gray-900 dark:text-white" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.gradient {
    position: absolute;
    inset: 0;
    @apply z-0;
    pointer-events: none;
    background: radial-gradient(50% 50% at 50% 50%, rgb(var(--color-primary-500) / 0.25) 0, #FFF 100%);
}

.dark {
    .gradient {
        background: radial-gradient(50% 50% at 50% 50%, rgb(var(--color-primary-400) / 0.1) 0, rgb(var(--color-gray-950)) 100%);
    }
}

.overlay {
    background-size: 100px 100px;
    background-image:
        linear-gradient(to right, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px),
        linear-gradient(to bottom, rgb(var(--color-gray-200)) 0.5px, transparent 0.5px);
}

.dark {
    .overlay {
        background-image:
            linear-gradient(to right, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px),
            linear-gradient(to bottom, rgb(var(--color-gray-900)) 0.5px, transparent 0.5px);
    }
}
</style>