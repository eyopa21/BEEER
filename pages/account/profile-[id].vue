<script setup>

const route = useRoute();
const UID = useCookie('UID')
import { get_single_user_query } from '../../queries/users/get.gql'
const { onResult, onError, loading, refetch } = useQuery(get_single_user_query, { id: route.params.id })
const { formatDate } = useHelpers();
const layout = useLayout();
const profile = ref('')

onResult(res => {
    profile.value = res.data?.authors[0]
})

onError(err => {
    layout.value.showAlert = { error: true, message: err.message }
})

const isBlogEmpty = ref(computed(() => {
    if (loading.value) return false
    if (profile.value?.blogs?.length) return false
    return true
}))
const noUserFound = ref(computed(() => {
    if (loading.value) return false
    if (profile.value !== '') return false
    return true
}))
</script>

<template>
    <div>

        <div class=" bg-gray-100 dark:bg-black">

            <div class="px-6 py-8">
                <div v-if="loading">
                    <VUEInnerLoading />
                </div>
                <div v-if="noUserFound" class="w-full mx-auto">
                    <VUENoItemFound />
                </div>
                <div v-else class="container flex flex-col-reverse lg:flex-row justify-between mx-auto">
                    <div v-if="isBlogEmpty" class="w-full lg:w-8/12">
                        <VUENoItemFound title="No blogs yet" subtitle="This user have not posted yet" />
                    </div>
                    <div v-else class="w-full lg:w-8/12">
                        <div class="flex items-center justify-between">
                            <h1 class="text-xl font-bold text-gray-700 dark:text-gray-300 md:text-2xl">Posts</h1>
                            <div>
                                <VUEFilter />
                            </div>
                        </div>
                        <div v-for="i in profile?.blogs" :key="i" class="mt-6">
                            <div
                                class="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-black rounded-3xl shadow-sm dark:shadow-none dark:border dark:border-gray-900 border-primary shadow-primary">
                                <div class="flex items-center justify-between"><span class="font-light text-gray-600">
                                        {{ formatDate(i.created_at) }} {{ i.updated_at !== i.created_at ? '(edited)' :
                    ''
                                        }}
                                    </span><a href="#"
                                        class="px-2 py-1 text-xs font-bold text-gray-100 bg-primary dark:bg-primary-800 rounded-lg">Laravel</a>
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
                                    <div>
                                        <a href="#" class="flex items-center">
                                            <img :src="profile?.profile_detail[0]?.profile_picture"
                                                :alt="profile.beeer_name"
                                                class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block">
                                            <NuxtLink class="font-bold text-gray-700 hover:underline">
                                                {{ profile?.profile_detail[0]?.first_name + " " +
                    profile?.profile_detail[0]?.last_name }}</NuxtLink>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <VUEPagination />
                    </div>
                    <UDivider label="BLOGS" class="block lg:hidden my-4 lg:my-0" />
                    <div
                        class=" bg-transparent dark:bg-black w-full lg:w-4/12 lg:-mx-8 lg:block lg:sticky lg:top-32 h-full">
                        <div>


                            <UAvatar size="3xl" :src="profile?.profile_detail[0]?.profile_picture || '/placeholder.jpg'"
                                :alt="profile.beeer_name" />

                            <div class="flex justify-between font-semibold text-black dark:text-white text-xl mt-2">
                                <span>

                                    {{ profile?.profile_detail[0]?.first_name + " " +
                    profile?.profile_detail[0]?.last_name }} | {{ profile.beeer_name }}
                                </span>

                                <UButton v-if="route.params.id !== UID" size="sm" color="amber" square variant="solid">
                                    Crown
                                </UButton>
                            </div>
                            <a class="italic text-sm text-blue-500 font-semibold underline" href="#" target="_blank">
                                <Icon name="i-heroicons-link" class="size-4 " /> {{
                    profile.profile_detail[0].website }}
                            </a>
                            <div class="text-gray-500 text-sm  break-words  break-all  text-wrap max-w-96 mt-2">
                                {{ profile.profile_detail[0].bio }}
                            </div>
                            <div class="mt-4">
                                <div class="flex mb-3 space-x-4">
                                    <NuxtLink v-for="i in profile.social_links" :key="i"
                                        class="text-sm text-gray-500 transition hover:text-gray-600" target="_blank"
                                        rel="me" :to="i.link"><span class="sr-only">{{ i.enum.name }}</span>
                                        <Icon :name="i.enum.icon"
                                            class="transition-transform hover:scale-110 size-8 hover:text-primary" />
                                    </NuxtLink>

                                </div>
                            </div>
                        </div>
                        <UDivider label="Eyoba" class="my-4" />
                        <div>

                            <ProfileDetail :profile="profile" />

                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
