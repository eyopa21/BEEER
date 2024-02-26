<template>
    <div>

        <div class=" bg-gray-100 dark:bg-black">

            <div class="px-6 py-8">
                <div class="container flex justify-between mx-auto">
                    <div class="w-full lg:w-8/12">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 dark:text-gray-300 md:text-2xl">Posts</h1>
                            <div>
                                <VUEFilter />
                            </div>
                        </div>
                        <div v-for="i in 5" :key="i" class="mt-6">
                            <div
                                class="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-black rounded-3xl shadow-sm dark:shadow-none dark:border dark:border-gray-900 border-primary shadow-primary">
                                <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                        2020</span><a href="#"
                                        class="px-2 py-1 font-bold text-gray-100 bg-primary dark:bg-primary-800 rounded-lg">Laravel</a>
                                </div>
                                <div class="mt-2"><a href="#"
                                        class="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:underline">Build
                                        Your New Idea with Laravel Freamwork.</a>
                                    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
                                        enim
                                        reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
                                    </p>
                                </div>
                                <div class="flex items-center justify-between mt-4">
                                    <NuxtLink to="/read/blog-1" class="text-blue-500 hover:underline">Read more</NuxtLink>
                                    <div><a href="#" class="flex items-center"><img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                alt="avatar"
                                                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block">
                                            <NuxtLink to="/account/profile-2"
                                                class="font-bold text-gray-700 hover:underline">Eyob Nigussie</NuxtLink>
                                        </a></div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <div class="flex">
                                <a href="#"
                                    class="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed">
                                    previous
                                </a>

                                <a href="#"
                                    class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    1
                                </a>

                                <a href="#"
                                    class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    2
                                </a>

                                <a href="#"
                                    class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    3
                                </a>

                                <a href="#"
                                    class="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="hidden bg-transparent dark:bg-black w-4/12 -mx-8 lg:block sticky top-32 h-full">
                        <div>

                            <NuxtImg
                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                alt="config.public.name" class="rounded-full border border-gray-300" width="100"
                                height="100" />

                            <div class="flex justify-between font-semibold text-black dark:text-white text-xl mt-2">
                                <span>

                                    Eyob Nigussie
                                </span>
                                <UButton to="/account/settings-3" size="sm" color="amber" square variant="solid">Crown
                                </UButton>
                            </div>
                            <a class="italic text-sm text-primary underline" href="#">Personal portfolio</a>
                            <div class="text-gray-500 text-sm mt-2">
                                lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                                ullamcorper
                                mattis, pulvinar dapibus leo.
                            </div>
                            <div class="mt-4">
                                <div class="flex mb-3 space-x-4">
                                    <NuxtLink v-for="i in 5" :key="i" aria-label="Open Youtube profile"
                                        class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank"
                                        rel="me" to="/hello"><span class="sr-only">Youtube</span>
                                        <Icon name="ic:baseline-facebook"
                                            class="transition-transform hover:scale-110 w-6 h-6" />
                                    </NuxtLink>

                                </div>
                            </div>
                        </div>
                        <UDivider label="Eyoba" class="my-4" />
                        <div>

                            <ProfileDetail />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>