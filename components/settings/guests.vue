<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200 dark:shadow-gray-700 rounded-2xl p-4 mb-6">
        <div class="">

            <h3 class="text-xl font-bold dark:text-gray-100">Invited Admins</h3>
            <ul class="mb-6 divide-y divide-gray-200">
                <li v-for="(i, key) in 4" :key="key" class="py-4">
                    <div class="flex justify-between xl:block 2xl:flex align-center 2xl:space-x-4">
                        <div class="flex space-x-4 xl:mb-4 2xl:mb-0">
                            <div>
                                <Icon class="w-6 h-6 rounded-full text-fuchsia-500" name="heroicons:user-20-solid" />

                            </div>
                            <div class="flex-1 min-w-0">
                                <p
                                    class="text-base font-semibold text-gray-900 dark:text-gray-400 leading-none truncate mb-0.5">
                                    Super
                                </p>
                                <p class="mb-1 text-sm font-normal text-fuchsia-600 truncate">
                                    wmail
                                </p>
                                <p class="text-xs font-medium text-gray-500">
                                    Invited on: 11/22/22
                                </p>
                            </div>
                        </div>
                        <div class="flex justify-end space-x-2  items-center w-auto xl:w-full 2xl:w-auto">

                            <VUEButton name="Delete" type="button" variation="delete" className="" />


                        </div>
                    </div>

                </li>

            </ul>
            <div class=" flex justify-end mt-2">
                <VUEButton className="w-full" name="Invite New" type="button" variation="normal" />
            </div>
        </div>
    </div>
</template>
<script setup>
</script>