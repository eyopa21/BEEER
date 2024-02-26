<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200  dark:shadow-gray-700 rounded-2xl p-4 mb-6">
        <div class="flow-root">
            <h3 class="dark:text-gray-100 text-xl font-bold">Social accounts</h3>
            <ul class="divide-y divide-gray-200">
                <ClientOnly>
                    <li v-for="link in 4" :key="link" class="py-4">
                        <div class="flex items-center space-x-4">


                            <div class="flex-shrink-0">

                                <Icon name="link.icon" class=" w-5 h-5 text-white" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 dark:text-gray-400 truncate">
                                    Link name
                                </span>
                                <a href="#" class="block text-sm font-normal text-fuchsia-500 truncate hover:underline">
                                    google.com
                                </a>
                            </div>
                            <div class="inline-flex items-center space-x-2">

                                <VUEButton name="Edit" variation="edit" type="button"
                                    className=" bg-white rounded-lg border border-gray-300 hover:bg-gray-50 hover:scale-[1.02] transition-transform" />
                                <VUEButton name="Delete" type="button" variation="delete" />
                                <!--VUEAlert v-if="layout.showDeleteAlert" @delete="deleteLinks(link.id)" :loading="loading" /-->
                            </div>
                        </div>
                    </li>
                </ClientOnly>

            </ul>

            <div class="mt-2 flex justify-end">
                <VUEButton name="Add New" type="button" variation="normal" />

            </div>
        </div>
    </div>
</template>
<script setup>

</script>

