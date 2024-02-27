<script setup >
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>
<template>
    <header
        class="border-b py-4 border-gray-200 dark:border-gray-800 -mb-px sticky top-0 z-50 lg:!border-transparent bg-white dark:bg-gray-950">
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between gap-3 h-[--header-height]">
            <div class="lg:flex-1 flex items-center gap-1.5">
                <NuxtLink to="/"
                    class="router-link-active router-link-exact-active flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white flex items-end gap-1.5">
                    Beeer.com
                    <span
                        class="inline-flex items-center font-medium rounded-md text-xs px-2 py-1 bg-primary-50 dark:bg-primary-400 dark:bg-opacity-10 text-primary-500 dark:text-primary-400 ring-1 ring-inset ring-primary-500 dark:ring-primary-400 ring-opacity-25 dark:ring-opacity-25 mb-0.5">
                        For the Art</span>
                </NuxtLink>
            </div>
            <ul class="items-center ring-1 ring-primary dark:ring-primary px-3 gap-x-0 rounded-full hidden lg:flex">
                <li class="relative">
                    <NuxtLink to="/feeds" active-class="border-b-[2px] border-primary text-primary font-semibold"
                        class="text-sm/6 flex items-center gap-1 py-2 px-4  transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        Feeds</NuxtLink>
                </li>
                <li class="relative">
                    <NuxtLink to="/writers" active-class="border-b-[2px] border-primary text-primary font-semibold"
                        class="text-sm/6 flex items-center gap-1 py-2 px-4  transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        Writers</NuxtLink>
                </li>
                <li class="relative">
                    <NuxtLink to="/#faqs" active-class="border-b-[2px] border-primary text-primary font-semibold"
                        class="text-sm/6 flex items-center gap-1 py-2 px-4 transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        FAQs</NuxtLink>
                </li>
                <li class="relative">
                    <NuxtLink
                        class="text-sm/6 flex items-center gap-1 py-2 px-4 font-medium transition-colors relative after:absolute after:-bottom-px after:inset-x-2 after:h-px after:rounded-full after:opacity-0 after:bg-gray-900 dark:after:bg-white after:transition-opacity text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                        Documentation</NuxtLink>
                </li>
            </ul>
            <div class="flex items-center justify-end lg:flex-1 gap-1.5">
                <ClientOnly>
                    <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" color="gray"
                        variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
                    <template #fallback>
                        <div class="w-8 h-8" />
                    </template>
                </ClientOnly>
                <NuxtLink to="/auth/user/signup" type="button"
                    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 text-gray-900 dark:text-white hover:bg-white dark:hover:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 items-center hidden lg:flex">
                    <span class="">Sign in</span><span
                        class="i-heroicons-arrow-right-20-solid flex-shrink-0 h-5 w-5"></span>
                </NuxtLink><button type="button"
                    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden">
                    <span class="i-heroicons-bars-3-20-solid flex-shrink-0 h-5 w-5"></span>
                </button>
            </div>
        </div>
    </header>
</template>
