<template>
    <div>

        <template>
            <div>
                <div
                    class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200 dark:shadow-gray-700 dark:shadow-md rounded-2xl p-4 mb-6">

                    <div class="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                        <NuxtImg quality="100" loading="lazy"
                            class="mb-4  hover:opacity-70 w-28 h-28 rounded-lg sm:mb-0 xl:mb-4 2xl:mb-0 shadow-lg shadow-gray-300 dark:shadow-gray-600"
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            placeholder alt="profile-pic" />

                        <div>
                            <h3 class="mb-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
                                <ClientOnly>
                                    mainData.user.first_name
                                </ClientOnly>
                            </h3>
                            <div class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                <ClientOnly>
                                    mainData.user.profession
                                </ClientOnly>
                            </div>
                            <VUEButton class="" className="cursor-pointer" name="Change picture" type="button"
                                variation="normal" icon="profile-pic" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
