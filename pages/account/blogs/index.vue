<script setup>
definePageMeta({ layout: ['account'] })


import { get_blogs_query } from '../../../queries/users/get.gql'


const UID = useCookie('UID')
const { onResult, onError, loading, refetch } = useQuery(get_blogs_query, { author_id: UID.value })




const layout = useLayout();
const blogs = ref([])

const items = (row) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',

    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
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
    <div class="w-full ml-64 px-4 mt-8">
        <div class="flex justify-between mr-8">

            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <UInput v-model="q" placeholder="Filter certificates..." size="xl" class="w-96" />
            </div>
            <div class="flex items-center">
                <UButton @click="isOpen = true" size="lg">Post Blog</UButton>
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