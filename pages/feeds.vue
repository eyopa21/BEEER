<script setup>

const page = ref(1)

</script>


<template>
    <div>

        <div class=" bg-gray-100 dark:bg-black">

            <div class="px-6 py-8">
                <div class="container flex justify-between mx-auto">
                    <div class="w-full lg:w-8/12">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">Post</h1>
                            <div>
                                <VUEFilter />
                            </div>
                        </div>
                        <div v-for="i in 5" :key="i" class="mt-6">
                            <div
                                class="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-black rounded-3xl shadow-sm dark:shadow-none dark:border dark:border-gray-900 border-primary shadow-primary">
                                <div class="flex items-center justify-between"><span class="font-light text-gray-600">Jun 1,
                                        2020</span><a href="#"
                                        class="px-2 py-1 text-xs font-bold text-gray-100 bg-primary dark:bg-primary-800 rounded-lg">Laravel</a>
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
                            <div>
                                <div
                                    class="flex scale-120 justify-end px-10 py-4 border-t border-gray-200 dark:border-gray-700">
                                    <UPagination v-model="page" :page-count="4" :total="10" :ui="{
                                        wrapper: 'flex items-center gap-1',
                                        rounded: '!rounded-full min-w-[32px] justify-center',
                                        default: {
                                            activeButton: {
                                                variant: 'outline'
                                            }
                                        }
                                    }" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hidden w-4/12 -mx-8 lg:block sticky top-8 h-full">
                        <div class="px-8">
                            <h1 class="mb-4 text-xl font-bold text-gray-700 dark:text-gray-200">Top Authors</h1>
                            <div class="flex flex-col max-w-sm px-6 py-4 mx-auto ">
                                <ul class="-mx-4">

                                    <li v-for="i in 5" :key="i"
                                        class="flex flex-col p-4  shadow-md dark:shadow-sm hover:shodow-lg dark:shadow-primary rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105 first:mt-0 mt-4">
                                        <div class="flex items-center justify-between">
                                            <div class="flex items-center mr-auto">

                                                <div class="inline-flex w-12 h-12"><img
                                                        src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                                                        alt="aji" class=" relative w-12 h-12 object-cover rounded-2xl"><span
                                                        class="animate-pulse absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                                                    <span></span>
                                                </div>

                                                <div class="flex flex-col ml-3">
                                                    <div class="font-medium leading-none text-black dark:text-gray-100">Eyob
                                                        Nigussie</div>
                                                    <p class="text-sm text-gray-500 leading-none mt-1">UI/UX Designer
                                                    </p>
                                                </div>
                                            </div>
                                            <a href="#"
                                                class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                                                        clip-rule="evenodd"></path>
                                                </svg></a>
                                            <a hrf="#"
                                                class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd"
                                                        d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                                                        clip-rule="evenodd"></path>
                                                </svg></a>
                                        </div>

                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div class="px-8 mt-10">
                            <h1 class="mb-4 text-xl font-bold text-gray-700 dark:text-gray-200">Categories</h1>
                            <div
                                class="flex flex-col max-w-sm px-4 py-6 mx-auto bg-gray-50 dark:bg-gray-950 rounded-lg shadow-md">
                                <ul>


                                    <li v-for="i in 5" :key="i" class="mt-2"><a href="#"
                                            class="mx-1 font-bold text-gray-700 hover:text-gray-600 hover:underline">-
                                            Design</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="px-8 mt-10">
                            <h1 class="mb-4 text-xl font-bold text-gray-700 dark:text-gray-200">Recent Post</h1>
                            <div
                                class="flex flex-col max-w-sm px-8 py-6 mx-auto bg-white dark:bg-gray-950 rounded-lg shadow-md">

                                <div class="mt-4"><a href="#"
                                        class="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline">Build
                                        Your New Idea with Laravel Freamwork.</a></div>
                                <div class="flex items-center justify-between mt-4">
                                    <div class="flex items-center"><img
                                            src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                            alt="avatar" class="object-cover w-8 h-8 rounded-full"><a href="#"
                                            class="mx-3 text-sm text-gray-700 hover:underline">Alex John</a></div><span
                                        class="text-sm font-light text-gray-600">Jun 1, 2020</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>