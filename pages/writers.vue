<script setup>
import { GetAuthors_query } from '../queries/users/get.gql'
const { onResult, onError, loading, refetch } = useQuery(GetAuthors_query)
const authors = ref([])

onResult(res => {
    authors.value = res.data?.authors

})
onError(err => {
    layout.value.showAlert = { error: true, message: err.message }
})

const isWritersEmpty = ref(computed(() => {
    if (loading.value) return false
    if (authors.value?.length) return false
    return true
}))

</script>


<template>
    <div class=" bg-gray-100 dark:bg-black">

        <div class="px-6 py-8">
            <div class="container flex flex-col lg:flex-row justify-between mx-auto">
                <div v-if="isWritersEmpty" class="w-full mx-auto">
                    <VUENoItemFound title="No writers found" subtitle="PLease, try again" />
                </div>
                <div v-if="loading">
                    <VUEInnerLoading />
                </div>
                <div v-else class="w-full lg:w-8/12 space-y-4">
                    <h2 class="mb-8 font-bold text-3xl">
                        Top Writers
                    </h2>
                    <div v-for="(i, key) in authors" :key="key" class="flex flex-col sticky  top-0 z-10">
                        <div class="bg-white dark:bg-black  shadow-lg dark:border border-gray-900 rounded-2xl p-4">
                            <div class="flex-none sm:flex">
                                <div class=" relative h-32 w-32   sm:mb-0 mb-3">
                                    <img :src="i.profile_detail[0].profile_picture || '/placeholder.jpg'"
                                        :alt="i.beeer_name" class="min-w-32 w-32 h-32 object-cover rounded-2xl">
                                    <a href="#"
                                        class="absolute -right-2 bottom-2   -ml-3  text-white p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300">
                                        <span class="w-4 h-4">{{ key + 1 }}</span>
                                    </a>
                                </div>
                                <div class="flex-auto sm:ml-5 justify-evenly">
                                    <div class="flex items-center justify-between sm:mt-2">
                                        <div class="flex items-center">
                                            <div class="flex flex-col">
                                                <NuxtLink :to="`/account/profile-${i.id}`"
                                                    class="w-full cursor-pointer hover:underline underline-offset-2 flex-none text-lg text-black uppercase dark:text-gray-400 font-semibold leading-none">
                                                    {{ i?.profile_detail[0]?.first_name + " " +
                    i?.profile_detail[0]?.last_name }} | {{ i.beeer_name }}</NuxtLink>
                                                <div class="flex-auto text-gray-500 my-1">
                                                    <span class="mr-3 ">{{ i.profile_detail[0].profession }}</span><span
                                                        class="mr-3 border-r border-gray-600  max-h-0"></span><span>{{
                    i.profile_detail[0].location }}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row items-center">
                                        <div class="flex">
                                            <p
                                                class="text-xs text-gray-400 break-words line-clamp-3 break-all  text-wrap max-w-96">
                                                {{
                    i.profile_detail[0].bio }}
                                            </p>
                                        </div>
                                        <div class="flex-1 inline-flex   items-center ml-2 space-x-2">
                                            <a hre="https://www.behance.net/ajeeshmon" target="_blank"><svg
                                                    class=" cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300"
                                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48"
                                                    height="48" viewBox="0 0 172 172" style=" fill:#4a90e2;">
                                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                        stroke-linecap="butt" stroke-linejoin="miter"
                                                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                                        font-family="none" font-weight="none" font-size="none"
                                                        text-anchor="none" style="mix-blend-mode: normal">
                                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                                        <g fill="#ffffff">
                                                            <path
                                                                d="M71.66667,82.41667c3.58333,0 14.33333,-5.79783 14.33333,-20.13117c0,-22.28475 -19.72983,-26.45217 -41.95367,-26.45217c-4.19967,0 -17.00292,0.00717 -26.12967,0.00358c-5.93758,-0.00358 -10.75,4.81242 -10.75,10.75v78.82975c0,5.93758 4.81242,10.75 10.75,10.75h42.28333c15.83475,0 29.25792,-12.52733 29.38333,-28.36208c0.16842,-21.77233 -17.91667,-25.38792 -17.91667,-25.38792zM28.66667,53.75h25.08333c5.93758,0 10.75,4.81242 10.75,10.75c0,5.93758 -4.81242,10.75 -10.75,10.75h-25.08333zM55.54167,118.25h-26.875v-25.08333h26.875c6.92658,0 12.54167,5.61508 12.54167,12.54167c0,6.92658 -5.61508,12.54167 -12.54167,12.54167zM163.0775,103.91667c2.97058,0 5.375,-2.40442 5.37858,-5.375v0c0,-20.77975 -14.37275,-37.625 -35.83333,-37.625c-19.79075,0 -35.83333,16.84525 -35.83333,37.625c0,20.77975 16.04258,37.625 35.83333,37.625c17.51175,0 27.2405,-8.1915 31.992,-20.22075c0.91733,-2.31842 -0.8815,-4.83033 -3.3755,-4.83033h-8.60358c-1.30792,0 -2.46533,0.74175 -3.14258,1.86333c-3.27517,5.41083 -8.27392,8.85442 -15.00342,8.85442c-10.07633,0 -17.415,-7.65042 -19.2855,-17.91667h38.4205zM132.62275,75.25c7.44258,0 14.65583,5.934 16.69117,14.33333h-33.22825c2.69825,-8.41725 9.08375,-14.33333 16.53708,-14.33333zM148.70833,53.75h-28.66667c-2.967,0 -5.375,-2.408 -5.375,-5.375v0c0,-2.967 2.408,-5.375 5.375,-5.375h28.66667c2.967,0 5.375,2.408 5.375,5.375v0c0,2.967 -2.408,5.375 -5.375,5.375z">
                                                            </path>
                                                        </g>
                                                    </g>
                                                </svg></a>

                                            <a hre="https://www.linkedin.com/in/ajeeshmon" target="_blank"><svg
                                                    class="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-500 hover:text-white transition ease-in duration-300"
                                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"
                                                    height="30" viewBox="0 0 172 172" style=" fill:#ffffff;">
                                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                        stroke-linecap="butt" stroke-linejoin="miter"
                                                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                                        font-family="none" font-weight="none" font-size="none"
                                                        text-anchor="none" style="mix-blend-mode: normal">
                                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                                        <g fill="#ffffff">
                                                            <path
                                                                d="M51.6,143.33333h-28.66667v-86h28.66667zM37.2724,45.86667c-7.9292,0 -14.33907,-6.42707 -14.33907,-14.33907c0,-7.912 6.42133,-14.3276 14.33907,-14.3276c7.90053,0 14.3276,6.42707 14.3276,14.3276c0,7.912 -6.42707,14.33907 -14.3276,14.33907zM154.8,143.33333h-27.56013v-41.85333c0,-9.98173 -0.1892,-22.81867 -14.3276,-22.81867c-14.35053,0 -16.55787,10.8704 -16.55787,22.09627v42.57573h-27.5544v-86.06307h26.4536v11.75907h0.37267c3.6808,-6.76533 12.6764,-13.8976 26.0924,-13.8976c27.92133,0 33.08133,17.82493 33.08133,40.99907z">
                                                            </path>
                                                        </g>
                                                    </g>
                                                </svg></a>
                                            <a hre="https://twitter.com/ajeemon?lang=en" target="_blank"><svg
                                                    class="cursor-pointer w-5 h-5 p-1  rounded-2xl hover:bg-blue-400 hover:text-white transition ease-in duration-300"
                                                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24"
                                                    height="24" viewBox="0 0 172 172" style=" fill:#ffffff;">
                                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1"
                                                        stroke-linecap="butt" stroke-linejoin="miter"
                                                        stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                                        font-family="none" font-weight="none" font-size="none"
                                                        text-anchor="none" style="mix-blend-mode: normal">
                                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                                        <g fill="#ffffff">
                                                            <path
                                                                d="M155.04367,28.88883c-5.84083,2.75917 -15.781,7.9335 -20.77617,8.9225c-0.1935,0.05017 -0.35117,0.11467 -0.5375,0.16483c-5.8265,-5.74767 -13.81017,-9.3095 -22.64667,-9.3095c-17.80917,0 -32.25,14.44083 -32.25,32.25c0,0.93883 -0.07883,2.666 0,3.58333c-23.06233,0 -39.904,-12.03283 -52.51017,-27.4985c-1.68417,-2.07833 -3.47583,-0.99617 -3.8485,0.48017c-0.8385,3.33967 -1.12517,8.9225 -1.12517,12.90717c0,10.0405 7.8475,19.90183 20.06667,26.015c-2.25033,0.5805 -4.73,0.99617 -7.31,0.99617c-3.03867,0 -6.536,-0.7955 -9.59617,-2.40083c-1.13233,-0.59483 -3.57617,-0.43 -2.85233,2.46533c2.9025,11.60283 16.1465,19.75133 27.97867,22.1235c-2.6875,1.58383 -8.42083,1.26133 -11.05817,1.26133c-0.97467,0 -4.3645,-0.22933 -6.5575,-0.50167c-1.9995,-0.24367 -5.074,0.27233 -2.50117,4.171c5.5255,8.3635 18.02417,13.61667 28.78133,13.81733c-9.90433,7.76867 -26.101,10.60667 -41.61683,10.60667c-3.139,-0.07167 -2.98133,3.5045 -0.4515,4.83033c11.44517,6.00567 30.19317,9.56033 43.58767,9.56033c53.24833,0 83.51317,-40.58483 83.51317,-78.8405c0,-0.61633 -0.01433,-1.90633 -0.03583,-3.2035c0,-0.129 0.03583,-0.25083 0.03583,-0.37983c0,-0.1935 -0.05733,-0.37983 -0.05733,-0.57333c-0.0215,-0.97467 -0.043,-1.88483 -0.0645,-2.35783c4.22117,-3.04583 10.6855,-8.33483 13.9535,-12.384c1.11083,-1.376 0.215,-3.04583 -1.29717,-2.52267c-3.8915,1.3545 -10.621,3.9775 -14.835,4.47917c8.43517,-5.58283 12.60617,-10.44183 16.1895,-15.83833c1.2255,-1.84183 -0.30817,-3.71233 -2.17867,-2.82367z">
                                                            </path>
                                                        </g>
                                                    </g>
                                                </svg></a>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap pt-2  text-sm text-gray-400">
                                        <div class="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path
                                                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z">
                                                </path>
                                            </svg>
                                            <p class="flex">1.2k <span class="hidden md:block">Crowns</span></p>
                                        </div>
                                        <div class="flex-1 inline-flex items-center">
                                            <Icon name="heroicons-solid:briefcase" class="size-5 mr-2" />
                                            <p class="flex">{{ i.projects_aggregate?.aggregate.count }}
                                                <span class="hidden md:block">projects</span>
                                            </p>
                                        </div>
                                        <div class="flex-1 inline-flex items-center">
                                            <Icon name="heroicons:code-bracket-20-solid" class="size-5 mr-2" />
                                            <p class="flex">{{ i.educations_aggregate?.aggregate.count }}
                                                <span class="hidden md:block">Eds</span>
                                            </p>
                                        </div>
                                        <div class="flex-1 inline-flex items-center">
                                            <Icon name="heroicons:newspaper-20-solid" class="size-5 mr-2" />
                                            <p class="flex">{{ i.certificates_aggregate?.aggregate.count }}
                                                <span class="hidden md:block"> Certs</span>
                                            </p>
                                        </div>


                                        <div class="flex-1 inline-flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                            <p class="flex">{{ i.blogs_aggregate?.aggregate.count }} <span
                                                    class="hidden md:block">Posts</span></p>
                                        </div>
                                        <a target="_blank"
                                            class="flex-no-shrink bg-amber-600 px-5 ml-4 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-white text-white rounded-full transition ease-in duration-300">Crown</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <UDivider label="FILTERS" class=" flex justify-center lg:hidden my-8 lg:my-0" />
                <div class="w-full  lg:w-4/12 -mx-2 lg:-mx-8  lg:block sticky top-32 h-full">


                    <div class="lg:max-w-[400px] px-2 lg:pl-0">

                        <BlogSearch />
                        <BlogTrending />
                        <BlogPopular />

                        <BlogTags />


                        <BlogHelp />

                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
