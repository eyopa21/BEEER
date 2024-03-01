<script setup>

</script>
<template>
    <div class="w-full ml-64">
        <ClientOnly>

            <div>


                <div class="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-gray-700">
                    <div class="overflow-x-auto rounded-2xl">
                        <div class="inline-block min-w-full align-middle">
                            <div class="overflow-hidden">
                                <table class="min-w-full divide-y divide-gray-200 table-fixed">
                                    <thead class="bg-white dark:bg-gray-900">
                                        <tr>
                                            <th scope="col" class="p-4 lg:p-5">
                                                <div class="flex items-center">
                                                    <input ref="selectAllCheckBox" id="checkbox-all"
                                                        aria-describedby="checkbox-1" type="checkbox"
                                                        class="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900" />
                                                    <label for="checkbox-all" class="sr-only">checkbox</label>
                                                </div>
                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                                                Skill Name

                                            </th>
                                            <th scope="col"
                                                class="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5">
                                                Percentage
                                            </th>


                                        </tr>
                                    </thead>
                                    <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr v-for="(skill, key) in 4" :key="key"
                                            class=" hover:bg-gray-100 dark:hover:bg-gray-800">
                                            <td class="p-4 w-4 lg:p-5">
                                                <div class="flex items-center">
                                                    <input ref="checkBox" id="checkbox-194556" type="checkbox"
                                                        class="w-5 h-5 rounded border-gray-300 focus:ring-0 checked:bg-dark-900">
                                                    <label for="checkbox-194556" class="sr-only">checkbox</label>

                                                </div>
                                            </td>
                                            <td class="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                                                <div class="text-base font-bold  text-gray-900 dark:text-gray-400">
                                                    skill.skill_name

                                                </div>

                                            </td>

                                            <td
                                                class="p-4 font-mono text-gray-900 dark:text-gray-400 whitespace-nowrap lg:p-5">

                                                skill.value

                                            </td>

                                            <td class=" p-4 space-x-2 whitespace-nowrap lg:p-5 flex justify-end">
                                                <VUEButton name="Edit Item" type="button" variation="edit" />

                                                <VUEButton name="Delete Item" type="button" variation="delete" />

                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <VuePagination />



        </ClientOnly>
    </div>
</template>

