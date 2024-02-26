<template>
    <div class="flex flex-col">
        <div class="w-full h-full p-4 bg-white dark:bg-gray-950 shadow-primary shadow-sm hover:shodow-lg rounded-2xl">
            <div class="flex-none lg:flex">
                <div class=" pr-2  ">
                    <img src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                        alt="unsplash images" class="   object-scale-down lg:object-cover  h-24 w-24 rounded-2xl">
                </div>
                <div class="flex-auto  justify-evenly ">
                    <div class="flex flex-col ">

                        <div class="flex items-center  justify-between min-w-0">
                            <h2 class="  text-base text-black dark:text-white font-medium truncate max-w-48">Bahirdar
                                academy
                            </h2>
                            <div class="flex items-center text-sm font-medium text-black dark:text-white ">

                                <Icon name="ic:baseline-calendar-month" class="h-4 w-4" />
                                12
                                <span class="text-gray-500 text-sm font-normal">Years</span>
                            </div>
                        </div>
                        <p class="flex items-center text-xs text-gray-400">Bahirdar
                        </p>

                        <a href="#" class="text-xs text-primary pt-2 hover:underline">https://eyoba-blog.netlify.app</a>
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
</template>