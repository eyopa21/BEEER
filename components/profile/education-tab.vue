<script setup>

const props = defineProps(['educations'])


</script>



<template>
    <div>

        <div v-if="props.educations?.length" class="flex flex-col">

            <div v-for="(i, key) in props.educations" :key="key"
                class="w-full h-full p-4 pb-2 bg-white dark:bg-gray-950 shadow-primary shadow-sm hover:shodow-lg rounded-2xl">
                <div class="flex">
                    <div class=" pr-2  ">
                        <img :src="i.image || '/placeholder.jpg'" :alt="i.title"
                            class="   object-scale-down lg:object-cover  h-24 w-24 rounded-2xl">
                    </div>
                    <div class="flex-auto  justify-evenly ">
                        <div class="flex flex-col ">

                            <div class="flex items-center  justify-between min-w-0">
                                <h2 class="  text-base text-black dark:text-white font-medium truncate max-w-48">
                                    {{ i.school }}
                                </h2>
                                <div class="flex items-center text-sm font-medium text-black dark:text-white ">

                                    <Icon name="ic:baseline-calendar-month" class="h-4 w-4" />
                                    12
                                    <span class="text-gray-500 text-sm font-normal">Years</span>
                                </div>
                            </div>
                            <p class="flex items-center text-sm text-gray-400">{{ i.title }}<span
                                    class="relative inline-flex rounded-md shadow-sm ml-2">
                                    <span class="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                        <span
                                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                    </span>
                                </span>

                            </p>
                            <p class="text-xs text-primary pt-2">{{ i.location }}</p>
                        </div>
                        <div class="flex my-3 border-t border-gray-800 "></div>
                        <div class="flex space-x-3 text-sm font-medium">
                            <div class="flex-auto items-center flex space-x-3 text-xs text-gray-500">
                                <span>2 likes</span>

                            </div>
                            <button
                                class="mb-2 md:mb-0 flex-no-shrink bg-green-400 hover:bg-green-500 px-5  text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                                type="button" aria-label="like">Like</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div v-else class="text-red-500 font-semibold ">
            No Educations yet
        </div>
    </div>
</template>