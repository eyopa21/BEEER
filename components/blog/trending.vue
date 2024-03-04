<template>
    <div class="mb-7 p-5 border-gray-100 rounded-3xl border">
        <h3 class="text-2xl text-gray-700 dark:text-gray-200 relative capitalize pb-5 mb-5
                                  
                                 ">Trending Topics</h3>
        <ul>

            <li v-for="i in 6" :key="i"
                class="text-lg font-normal relative sm:text-base mt-5 pt-5 border-t border-gray-100">

                <a
                    class="block text-[#474f62] relative pl-2  before:text-base transition-all hover:text-primary hover:before:text-primary before:transition-all">
                    <Icon name="heroicons:chevron-right" class="w-6 h-6" />
                    Photography
                    <span class="absolute right-0">(06)</span>
                </a>
            </li>

        </ul>
    </div>
</template>