<template>
    <div class="mb-7 p-7 border-gray-100 border rounded-3xl">
        <h3 class="text-2xl text-gray-700 dark:text-gray-200 relative capitalize pb-5 mb-5
                                  ">Popular Post</h3>
        <div class="posts">

            <div v-for="i in 5" :key="i" class="overflow-hidden mt-4 pt-4">
                <div class="w-[70px] float-left">
                    <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="" class="rounded-[5px]">
                </div>
                <div class="w-[calc(100%-70px)] float-left pl-5">
                    <span class="text-sm text-[#444444] relative top-[-5px]">22 May 2024
                    </span>
                    <h4 class="text-lg font-medium"><a class="text-[#232f4b] transition-all hover:text-primary">Best
                            tourism
                            site
                            all
                            over the
                            world.</a>
                    </h4>
                </div>
            </div>

        </div>
    </div>
</template>