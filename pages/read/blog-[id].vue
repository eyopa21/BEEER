<script setup>
//definePageMeta({ layout: 'feed' })
import { GetSingleBlogs } from '../../queries/blogs/get.gql'
import { like_query, unlike_query } from '../../queries/blogs/like.gql'
import { parseMarkdown } from '~/utils/parseMarkdown'
import { isClient } from '@vueuse/shared'
import { useShare } from '@vueuse/core'
const route = useRoute()
const { onResult, onError, loading, refetch } = useQuery(GetSingleBlogs, { id: route.params.id })
const { mutate: Like, onDone: onLikeDone, onError: onLikeError, loading: likeLoading } = useMutation(like_query)
const { mutate: Unlike, onDone: onUnLikeDone, onError: onUnLikeError, loading: unLikeLoading } = useMutation(unlike_query)
const UID = useCookie('UID')
const router = useRouter();
const { formatDate } = useHelpers()
const layout = useLayout();
const toast = useToast();
const blog = ref('')
const likes = ref([])
const totalComments = computed(() => {
    let count = blog.value?.comments?.length;
    blog.value?.comments?.map(comm => {
        count += comm.replies_aggregate.aggregate.count
    })
    return count
})

onResult(async res => {
    blog.value = res.data?.blogs[0]
    likes.value = blog.value?.likes?.map(lik => {
        return lik.liker.id
    })
    await loadMarkdown()
})
const mdBlog = ref('')
const loadMarkdown = async () => {
    mdBlog.value = await parseMarkdown(blog.value?.description)
}
onError(err => {
    layout.value.showAlert = { error: true, message: err.message }
})





const options = ref({
    title: blog.title,
    text: blog.subtitle,
    url: isClient ? location.href : '',
})

const { share, isSupported } = useShare(options)

function startShare() {
    return share().catch(err => err)
}


const isPostLiked = ref(computed(() => {
    if (likes.value?.includes(UID.value)) {
        return true
    } else {
        return false
    }
}))

const toggleLike = () => {

    if (isPostLiked.value) {
        Unlike({ liker_id: UID.value, blog_id: blog.value.id })
        onUnLikeDone(res => {
            refetch();
        })
        onUnLikeError(err => {
            layout.value.showAlert = { error: true, message: 'Please, try again' }
        })
    } else {
        Like({ liker_id: UID.value, blog_id: blog.value.id })
        onLikeDone(res => {
            refetch();
        })
        onLikeError(err => {
            layout.value.showAlert = { error: true, message: 'Please, try again' }
        })
    }
}

const isEmpty = ref(computed(() => {
    if (loading.value) return false
    if (blog.value !== '') return false
    return true
}))

</script>



<template>
    <div>
        <div class="flex flex-col lg:flex-row w-full">
            <div v-if="isEmpty" class="w-full mx-auto">
                <VUENoItemFound />
            </div>
            <div v-if="loading">
                <VUEInnerLoading />
            </div>

            <div v-if="blog" class="w-full  lg:w-[60%] xl:w-2/3 px-4 pl-6 mt-4">
                <div class="rounded-lg shadow-front-2 dark:bg-foreground mb-7">
                    <img class="w-full rounded h-96 " :src="blog.image" alt="">
                    <div class="p-6 border-b border-gray-200 dark:border-gray-800">
                        <h5
                            class="text-primary lg:text-2xl text-lg font-semibold underline uppercase dark:text-primary ">
                            {{ blog.title }}</h5>
                        <h2 class="mr-4  font-semibold   mb-6">
                            {{ blog.subtitle }}
                        </h2>
                        <div class="flex justify-between flex-wrap mb-9">
                            <div class="flex items-center mb-4 mr-4">
                                <div
                                    class="bg-gray-200 dark:bg-gray-800 mr-3 w-9 h-9 rounded-full flex-shrink-0 flex justify-center items-center">
                                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none"
                                        class="h-4 w-4 text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.1235 17V15.2222C15.1235 14.2793 14.7515 13.3749 14.0893 12.7081C13.4271 12.0413 12.5291 11.6667 11.5926 11.6667H4.53087C3.59443 11.6667 2.69633 12.0413 2.03417 12.7081C1.372 13.3749 1 14.2793 1 15.2222L1 17"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                        <path
                                            d="M8.06174 8.11111C10.0118 8.11111 11.5926 6.51923 11.5926 4.55556C11.5926 2.59188 10.0118 1 8.06174 1C6.11169 1 4.53087 2.59188 4.53087 4.55556C4.53087 6.51923 6.11169 8.11111 8.06174 8.11111Z"
                                            stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h6 class="text-gray-500 font-normal dark:text-gray-400 text-sm"> Posted By
                                    </h6>
                                    <p class="text-gray-700 dark:text-gray-100 text-sm font-medium">
                                        {{ blog.author.beeer_name }}</p>
                                </div>
                            </div>
                            <div class="flex items-center mb-4 mr-4">
                                <div
                                    class="bg-gray-200 dark:bg-gray-800 mr-3 w-9 h-9 rounded-full flex-shrink-0 flex justify-center items-center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                                        class="h-4 w-4 text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M4.6498 2.39995H7.3498V1.64995C7.3498 1.40151 7.55043 1.19995 7.7998 1.19995C8.04918 1.19995 8.2498 1.40151 8.2498 1.64995V2.39995H8.9998C9.66168 2.39995 10.1998 2.93714 10.1998 3.59995V9.59995C10.1998 10.2618 9.66168 10.8 8.9998 10.8H2.9998C2.33699 10.8 1.7998 10.2618 1.7998 9.59995V3.59995C1.7998 2.93714 2.33699 2.39995 2.9998 2.39995H3.7498V1.64995C3.7498 1.40151 3.95043 1.19995 4.1998 1.19995C4.44918 1.19995 4.6498 1.40151 4.6498 1.64995V2.39995ZM2.6998 9.59995C2.6998 9.76495 2.83405 9.89995 2.9998 9.89995H8.9998C9.1648 9.89995 9.2998 9.76495 9.2998 9.59995V4.79995H2.6998V9.59995Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h6 class="text-gray-500 dark:text-gray-400 text-sm"> Publish in </h6>
                                    <p class="text-gray-700 dark:text-gray-100 text-sm font-medium">
                                        {{ formatDate(blog.created_at) }} </p>
                                </div>
                            </div>
                            <div class="flex items-center mb-4 mr-4">
                                <div
                                    class="bg-gray-200 dark:bg-gray-800 mr-3 w-9 h-9 rounded-full flex-shrink-0 flex justify-center items-center">
                                    <svg class="h-5 w-5 text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                                        </path>
                                    </svg>
                                </div>
                                <h6 class="text-gray-500 dark:text-gray-400 text-sm">{{ totalComments }}</h6>
                            </div>
                            <!--div class="flex items-center mb-4 mr-4">
                                <div
                                    class="bg-gray-200 dark:bg-gray-800 mr-3 w-9 h-9 rounded-full flex-shrink-0 flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                        class="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z">
                                        </path>
                                    </svg>
                                </div>
                                <h6 class="text-gray-500 dark:text-gray-400 text-sm">575</h6>
                            </!--div-->
                        </div>
                        <div
                            class="prose prose-sm sm:prose lg:prose-lg dark:prose-invert  overflow-x-scroll dark:text-white w-full mb-10 mt-8">

                            <ContentRendererMarkdown :value="mdBlog" />


                        </div>
                        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">Share to:</p>
                        <div class="flex flex-row justify-between">


                            <div class="flex flex-wrap" :disabled="!isSupported">

                                <a @click="startShare"
                                    class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 mr-[18px]">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" class="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7.03344 16.563C13.0697 16.563 16.3722 11.5608 16.3722 7.22423C16.3722 7.0836 16.3691 6.93985 16.3628 6.79923C17.0052 6.33463 17.5597 5.75916 18 5.09985C17.4017 5.36605 16.7664 5.53991 16.1159 5.61548C16.8009 5.20493 17.3137 4.55997 17.5594 3.80017C16.915 4.18203 16.2104 4.4514 15.4756 4.59673C14.9806 4.0707 14.326 3.7224 13.6131 3.60569C12.9003 3.48898 12.1688 3.61036 11.5318 3.95105C10.8949 4.29175 10.3879 4.83279 10.0892 5.49053C9.7906 6.14827 9.71695 6.88606 9.87969 7.58985C8.575 7.52438 7.29862 7.18546 6.13332 6.59505C4.96802 6.00465 3.9398 5.17595 3.11531 4.16267C2.69627 4.88515 2.56804 5.74008 2.75669 6.55372C2.94534 7.36735 3.43671 8.07862 4.13094 8.54298C3.60975 8.52643 3.09998 8.38611 2.64375 8.1336V8.17423C2.64328 8.93242 2.9054 9.66738 3.38554 10.2542C3.86568 10.841 4.53422 11.2434 5.2775 11.393C4.7947 11.5251 4.28799 11.5443 3.79656 11.4492C4.0063 12.1013 4.41438 12.6716 4.96385 13.0805C5.51331 13.4895 6.17675 13.7167 6.86156 13.7305C5.69895 14.6437 4.26278 15.1391 2.78438 15.1367C2.52219 15.1363 2.26027 15.1203 2 15.0886C3.5019 16.0522 5.24902 16.5639 7.03344 16.563Z"
                                            fill="currentColor"></path>
                                    </svg> </a>
                                <a @click="startShare"
                                    class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 mr-[18px]">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" class="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.8156 2.5625H3.18125C2.52812 2.5625 2 3.07813 2 3.71563V17.4062C2 18.0438 2.52812 18.5625 3.18125 18.5625H16.8156C17.4688 18.5625 18 18.0438 18 17.4094V3.71563C18 3.07813 17.4688 2.5625 16.8156 2.5625ZM6.74687 16.1969H4.37188V8.55937H6.74687V16.1969ZM5.55938 7.51875C4.79688 7.51875 4.18125 6.90312 4.18125 6.14375C4.18125 5.38438 4.79688 4.76875 5.55938 4.76875C6.31875 4.76875 6.93437 5.38438 6.93437 6.14375C6.93437 6.9 6.31875 7.51875 5.55938 7.51875ZM15.6344 16.1969H13.2625V12.4844C13.2625 11.6 13.2469 10.4594 12.0281 10.4594C10.7937 10.4594 10.6062 11.425 10.6062 12.4219V16.1969H8.2375V8.55937H10.5125V9.60313H10.5437C10.8594 9.00313 11.6344 8.36875 12.7875 8.36875C15.1906 8.36875 15.6344 9.95 15.6344 12.0063V16.1969Z"
                                            fill="currentColor"></path>
                                    </svg> </a>
                                <a @click="startShare"
                                    class="text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 mr-[18px]">
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" class="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M18 10.5625C18 6.14422 14.4183 2.5625 10 2.5625C5.58172 2.5625 2 6.14422 2 10.5625C2 14.5555 4.92547 17.8652 8.75 18.4653V12.875H6.71875V10.5625H8.75V8.8C8.75 6.795 9.94438 5.6875 11.7717 5.6875C12.6467 5.6875 13.5625 5.84375 13.5625 5.84375V7.8125H12.5538C11.56 7.8125 11.25 8.42922 11.25 9.0625V10.5625H13.4688L13.1141 12.875H11.25V18.4653C15.0745 17.8652 18 14.5555 18 10.5625Z"
                                            fill="currentColor"></path>
                                    </svg> </a>
                            </div>
                            <div class=" space-x-2">
                                <span class="text-lg text-primary">{{ blog.likes_aggregate?.aggregate.count }}
                                    likes</span>
                                <UButton @click="toggleLike()" :loading="likeLoading || unLikeLoading"
                                    :icon="isPostLiked ? 'i-heroicons-hand-thumb-down' : 'i-heroicons-hand-thumb-up'"
                                    size="xl" :color="isPostLiked ? 'red' : 'primary'" square variant="solid" />
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-sm mb-3 text-gray-700 dark:text-gray-100">Tags:</p>
                        <div class="flex flex-wrap">
                            <div v-for="i in blog.tags" :key="i"
                                class="bg-blue-500 px-4 py-1 mr-2 mb-5 text-xs rounded text-white">{{ i }}</div>

                        </div>
                    </div>
                    <BlogComment :comment="blog.comments" @refetch="refetch()" />
                </div>
            </div>
            <div class="w-full lg:w-[40%] xl:w-1/3 mt-8">
                <div class=" ">
                    <div class="lg:max-w-[400px] px-2 lg:pl-0">
                        <BlogAuthor v-if="blog" :author="blog.author" />
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