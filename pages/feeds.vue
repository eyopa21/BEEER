<script setup>

import { get_feeds_query } from '../queries/blogs/get.gql'
import { parseMarkdown } from '~/utils/parseMarkdown'
const { onResult, onError, loading, refetch } = useQuery(get_feeds_query)
const router = useRouter();
const { formatDate } = useHelpers()
const layout = useLayout();
const toast = useToast();
const blogs = ref([])
const authors = ref([])
const mdBlog = ref('')
onResult(res => {
    blogs.value = res.data?.blogs
    authors.value = res.data?.authors
})
const loadMarkdown = async () => {
    mdBlog.value = await parseMarkdown('# Welcome to my blog# Welcome to my blog# Welcome to my blog# Welcome to my blog')
}

await loadMarkdown()

onError(err => {

    layout.value.showAlert = { error: true, message: err.message }
})
const isFeedsEmpty = ref(computed(() => {
    if (loading.value) return false
    if (blogs.value?.length) return false
    return true
}))
</script>

<template>
    <div>

        <div class=" bg-gray-100 dark:bg-black">

            <div class="px-6 py-8">
                <div class="container flex flex-col lg:flex-row justify-between mx-auto">
                    <div v-if="isFeedsEmpty">
                        <VUENoItemFound title="No feeds found" subtitle="PLease, try again" />
                    </div>
                    <VUEInnerLoading v-if="loading" />
                    <div v-else class="w-full lg:w-8/12">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">Post</h1>
                            <div>
                                <VUEFilter />
                            </div>
                        </div>
                        <div v-for="(i, key) in blogs" :key="key" class="mt-6">
                            <div
                                class="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-black rounded-3xl shadow-sm dark:shadow-none dark:border dark:border-gray-900 border-primary shadow-primary">
                                <div class="flex items-center justify-between"><span class="font-light text-gray-600">
                                        {{ formatDate(i.created_at) }} {{ i.updated_at !== i.created_at ? '(edited)' :
                        ''
                                        }}
                                    </span><a href="#"
                                        class="px-2 py-1 text-xs font-bold text-gray-100 bg-primary dark:bg-primary-800 rounded-lg">{{
                        i.category }}</a>
                                </div>
                                <div class="mt-2"><a href="#"
                                        class="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:underline">
                                        {{ i.title }}
                                    </a>
                                    <p class="mt-2 text-gray-600 prose prose-[2px]  dark:prose-invert ">
                                        {{ i.subtitle }}
                                    </p>
                                </div>
                                <div class="flex items-center justify-between mt-4">
                                    <NuxtLink :to="`/read/blog-${i.id}`" class="text-blue-500 hover:underline">Read more
                                    </NuxtLink>
                                    <div><a href="#" class="flex items-center"><img
                                                :src="i?.author?.profile_detail[0]?.profile_picture || '/placeholder.jpg'"
                                                :alt="i.author.beeer_name"
                                                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block">
                                            <NuxtLink :to="`/account/profile-${i.id}`"
                                                class="font-bold text-gray-700 hover:underline">{{ i.author.beeer_name
                                                }}
                                            </NuxtLink>
                                        </a></div>
                                </div>
                            </div>
                        </div>

                        <VUEPagination />
                    </div>
                    <UDivider label="FILTERS" class=" flex justify-center lg:hidden my-8 lg:my-0" />
                    <div class="w-full lg:w-4/12 -mx-2 lg:-mx-8 lg:block lg:sticky lg:top-8 h-full">
                        <div class="lg:max-w-[400px] px-2 lg:pl-0">


                            <div>
                                <h1 class="mb-4 text-xl font-bold text-gray-700 dark:text-gray-200">Top Authors</h1>
                                <div class="flex flex-col max-w-sm px-6 py-4 ">
                                    <ul class="-mx-4">

                                        <li v-for="(i, key) in authors" :key="key"
                                            class="flex flex-col p-4 w-full shadow-sm dark:shadow-sm hover:shodow-lg dark:shadow-primary rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105 first:mt-0 mt-4">
                                            <div class="flex items-center justify-between">
                                                <div class="flex items-center mr-auto">

                                                    <div class="inline-flex w-12 h-12"><img
                                                            :src="i.profile_detail[0].profile_picture || '/placeholder.jpg'"
                                                            :alt="i.beeer_name"
                                                            class=" relative w-12 h-12 object-cover rounded-2xl"><span
                                                            class="animate-pulse absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                                                        <span></span>
                                                    </div>

                                                    <div class="flex flex-col ml-3">
                                                        <div
                                                            class="font-medium leading-none text-black dark:text-gray-100">
                                                            {{ i?.profile_detail[0]?.first_name + " " +
                        i?.profile_detail[0]?.last_name }}</div>
                                                        <p class="text-sm text-gray-500 leading-none mt-1">{{
                                                            i.profile_detail[0].profession }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <a
                                                    class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                                                    2
                                                    <Icon name="i-mdi-crown" class="size-5" />

                                                </a>
                                                <a
                                                    class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2">
                                                    {{ i.blogs_aggregate.aggregate.count }}
                                                    <Icon name="i-heroicons-fire-16-solid" class="size-5" />
                                                </a>
                                            </div>

                                        </li>


                                    </ul>
                                </div>
                            </div>
                            <div>

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

        </div>
    </div>
</template>