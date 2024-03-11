<script setup>
definePageMeta({ layout: 'account' })

import { get__my_blogs_query } from '../../../queries/blogs/get.gql'
import { delete_blogs_query } from '../../../queries/blogs/delete.gql'
const { mutate: DeleteBlog, onDone: onDeleteDone, onError: onDeleteError, loading: deleteLoading } = useMutation(delete_blogs_query)


const UID = useCookie('UID')
const { onResult, onError, loading, refetch } = useQuery(get__my_blogs_query, { author_id: UID.value })
const router = useRouter();
const layout = useLayout();
const toast = useToast();
const blogs = ref([])

const items = (row) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => {
            router.push(`/account/blogs/edit-${row.id}`)
        }

    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        click: () => {
            toast.add({
                id: 'deleteblogs',
                title: 'Are you sure',
                color: 'red',
                timeout: 0,
                actions: [{
                    label: 'Yes',
                    click: () => {
                        DeleteBlog({ id: row.id })
                        onDeleteDone(async res => {
                            refetch();
                            toast.add({
                                id: 'deleteblogssucesss',
                                title: 'Blog deleted successfully',
                                icon: 'i-heroicons-exclamation-triangle',
                                color: 'green',
                                timeout: 5000
                            })
                        })
                        onDeleteError(err => {
                            toast.add({
                                id: 'deleteblogerror',
                                title: err.message,
                                description: 'Please, try again',
                                icon: 'i-heroicons-exclamation-triangle',
                                color: 'red',
                                timeout: 5000
                            })
                        })
                    },
                    loading: deleteLoading.value
                }, {
                    label: 'No',
                    click: () => toast.remove()
                }]
            })

        }

    }]
]
const q = ref('')
const filteredRows = computed(() => {
    if (!q.value) {
        return blogs.value
    }

    return blogs.value.filter((blog) => {
        return Object.values(blog).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})


onResult(res => {
    blogs.value = res.data?.blogs?.map((blog, key) => {
        return { ...blog, key: key + 1 }
    })
})
onError(err => {
    layout.value.showAlert = { error: true, message: err.message }
})

</script>

<template>
    <div class="w-full ml-20 px-4 mt-8">
        <div class="flex justify-between mr-8">

            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <UInput v-model="q" placeholder="Filter certificates..." size="xl" class="w-96" />
            </div>
            <div class="flex items-center">
                <UButton to="/account/blogs/new" size="lg">Post Blog</UButton>
            </div>
        </div>
        <UTable :loading="loading" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
            :progress="{ color: 'primary', animation: 'carousel' }" sort-asc-icon="i-heroicons-arrow-up-20-solid"
            sort-desc-icon="i-heroicons-arrow-down-20-solid"
            :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"
            class="w-full"
            :columns="[{ key: 'key' }, { key: 'title', label: 'Title', sortable: true }, { key: 'subtitle', label: 'Subtitle', sortable: true }, { key: 'category', label: 'Category', sortable: true }, { key: 'actions' }]"
            :rows="filteredRows">
            <template #name-data="{ row }">
                {{ row.name }}
            </template>

            <template #actions-data="{ row }">
                <UDropdown :items="items(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                </UDropdown>
            </template>
        </UTable>
        <VUEPagination />

    </div>
</template>