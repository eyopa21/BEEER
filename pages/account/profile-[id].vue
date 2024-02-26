<template>
    <div>

        <div class=" bg-gray-100">

            <div class="px-6 py-8">
                <div class="container flex justify-between mx-auto">
                    <div class="w-full lg:w-8/12">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
                            <div>
                                <select
                                    class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option>Latest</option>
                                    <option>Last Week</option>
                                </select>
                            </div>
                        </div>
                        <div v-for="i in 5" :key="i" class="mt-6">
                            <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                                <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                        2020</span><a href="#"
                                        class="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a>
                                </div>
                                <div class="mt-2"><a href="#" class="text-2xl font-bold text-gray-700 hover:underline">Build
                                        Your New Idea with Laravel Freamwork.</a>
                                    <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing
                                        elit.
                                        Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
                                        enim
                                        reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!
                                    </p>
                                </div>
                                <div class="flex items-center justify-between mt-4"><a href="#"
                                        class="text-blue-500 hover:underline">Read more</a>
                                    <div><a href="#" class="flex items-center"><img
                                                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                                alt="avatar"
                                                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block">
                                            <h1 class="font-bold text-gray-700 hover:underline">Alex John</h1>
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
                    <div class="hidden w-4/12 -mx-8 lg:block sticky top-32 h-full">
                        <NuxtImg
                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                            alt="config.public.name" class="rounded-full border border-gray-300" width="100" height="100" />

                        <div class="font-semibold text-xl mt-2">
                            Eyob Nigussie
                        </div>
                        <div class="text-gray-500 text-sm mt-2">
                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                            mattis, pulvinar dapibus leo.
                        </div>
                        <div class="mt-4">
                            <div class="flex mb-3 space-x-4">
                                <NuxtLink v-for="i in 5" :key="i" aria-label="Open Youtube profile"
                                    class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="me"
                                    to="/hello"><span class="sr-only">Youtube</span>
                                    <Icon name="ic:baseline-facebook"
                                        class="transition-transform hover:scale-110 w-6 h-6" />
                                </NuxtLink>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>