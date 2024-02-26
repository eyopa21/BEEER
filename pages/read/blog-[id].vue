<template>
    <div>
        <div class="flex w-full">
            <div class="w-2/3">
                read
            </div>
            <div class="w-1/3">
                <div class="col-span-4 md:col-span-12 ">
                    <div class="max-w-[400px] pl-7 lg:pl-0">
                        <div class="mb-7 p-5 border-[#eef0fc] border text-center bg-[#f9faff] relative z-30">
                            <div class="mb-[25px]">
                                <img class="rounded-full w-full max-w-[200px] mx-auto"
                                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                    alt="">
                            </div>
                            <h4 class="text-[#232f4b] text-[25px] font-bold mb-[15px] font-heading-font-s2 capitalize">
                                Jenny
                                Watson</h4>
                            <p class=" text-[#666] text-[15px] mb-[18px]">Hi! beautiful people. I`m an
                                authtor of
                                this blog. Read our post - stay with us</p>
                            <ul class="flex justify-center">
                                <li v-for="i in 4" :key="i" class="mr-[10px]"><a href="#" class="block text-[#232f4b] w-[40px] h-[40px] leading-[44px] bg-[#eeeff7]
                                            rounded-[50%] transition-all hover:text-primary">
                                        <Icon name="ic:baseline-facebook" class="w-full h-full" />
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div class="mb-7 p-5 border-[#eef0fc] border text-center bg-[#f9faff] relative z-30">
                            <form>
                                <div class="relative">
                                    <input type="text" placeholder="Search Post.." class="h-[70px] text-base p-[6px_50px_6px_20px] rounded-[5px]
                                            bg-[rgba(55,86,247,0.05)] focus:bg-[rgba(55,86,247,0.1)] w-full
                                            focus-visible:outline-0 transition-all
                                            focus-visible:border-none ">
                                    <button type="submit"
                                        class="bg-primary text-xl text-white border-none absolute right-3 top-[52%] h-[50px] leading-[50px] w-[50px] rounded-[6px] -translate-y-1/2">
                                        <i class="ti-search"></i>
                                    </button>

                                </div>
                            </form>
                        </div>
                        <div class="mb-7 p-5 border-[#eef0fc] border">
                            <h3 class="text-2xl text-[#232f4b] relative capitalize pb-5 mb-5
                                  before:absolute before:left-0 before:bottom-0 before:w-[55px] before:h-[4px]
                                  before:rounded-[10px]
                                  before:bg-primary
                                  after:absolute after:left-[65px] after:bottom-0 after:w-[70%] after:h-[4px]
                                  after:rounded-[10px]
                                  after:bg-[#f2f2f2] ">Trending Topics</h3>
                            <ul>

                                <li v-for="i in 6" :key="i"
                                    class="text-lg font-normal relative sm:text-base mt-5 pt-5 border-t border-[#eef0fc]">

                                    <a href="blog-single.html"
                                        class="block text-[#474f62] relative pl-2  before:text-base transition-all hover:text-primary hover:before:text-primary before:transition-all">
                                        <Icon name="heroicons:chevron-right" class="w-6 h-6" />
                                        Photography
                                        <span class="absolute right-0">(06)</span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                        <div class="mb-7 p-7 border-[#eef0fc] border">
                            <h3 class="text-2xl text-[#232f4b] relative capitalize pb-5 mb-5
                                  before:absolute before:left-0 before:bottom-0 before:w-[55px] before:h-[4px]
                                  before:rounded-[10px]
                                  before:bg-primary
                                  after:absolute after:left-[65px] after:bottom-0 after:w-[80%] after:h-[4px]
                                  after:rounded-[10px]
                                  after:bg-[#f2f2f2]">Popular Post</h3>
                            <div class="posts">

                                <div v-for="i in 5" :key="i" class="overflow-hidden mt-4 pt-4">
                                    <div class="w-[70px] float-left">
                                        <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                            alt="" class="rounded-[5px]">
                                    </div>
                                    <div class="w-[calc(100%-70px)] float-left pl-5">
                                        <span class="text-sm text-[#444444] relative top-[-5px]">22 May 2024
                                        </span>
                                        <h4 class="text-lg font-medium"><a
                                                class="text-[#232f4b] transition-all hover:text-primary"
                                                href="blog-single.html">Best tourism site all over the
                                                world.</a>
                                        </h4>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="mb-7 p-7 border-[#eef0fc] border">
                            <h3 class="text-2xl text-[#232f4b] relative capitalize pb-5 mb-5
                                  before:absolute before:left-0 before:bottom-0 before:w-[55px] before:h-[4px]
                                  before:rounded-[10px]
                                  before:bg-primary
                                  after:absolute after:left-[65px] after:bottom-0 after:w-[80%] after:h-[4px]
                                  after:rounded-[10px]
                                  after:bg-[#f2f2f2]">Tags</h3>
                            <ul class="overflow-hidden">
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Travel</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Food</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Lifestyle</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Business</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Idea</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Finance</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Corporate</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Culture</a></li>
                                <li class="float-left mr-[8px] mb-[8px]"><a
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white"
                                        href="#">Gym</a></li>
                            </ul>
                        </div>

                        <div class="bg-primary p-[30px_40px] lg:p-5">
                            <h2 class="text-3xl font-bold text-left text-white mb-5">How We Can <br> Help
                                You!</h2>
                            <p class="text-white text-lg mb-3">labore et dolore magna aliqua. Quis ipsum
                                suspendisse
                                ultrices gravida. Risus
                                commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            <a href="contact.html" class="inline-block text-white p-[10px_20px] border border-white text-[18px]
                                  pr-24 relative mt-3 before:absolute before:text-[18px] before:right-[15px] before:top-1/2 
                                  before:-translate-y-1/2 before:font-['themify'] before:content-['\e628']
                                 ">Contact Us</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <VUEWYSIWYG />
    </div>
</template>