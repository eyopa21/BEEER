<script setup>
const route = useRoute();

const { getFilter, setFilter, applyFilter, isFiltersActive } = await useFiltering();
const categoryFilterValue = ref(computed(() => {
    return getFilter('tags')[0];
}));

const items = [{
    key: 'blogs',
    label: 'Blogs',
    description: 'Filter for Blogs'
},
{
    key: 'authors',
    label: 'Writers',
    description: 'Filter for writers'
}]
</script>

<template>
    <div class="mt-8">
        {{ categoryFilterValue }}
        <UTabs :items="items" class="w-full px-64">
            <template #item="{ item }">
                <div class=" bg-transparent border-none">

                    <div class="p-2">

                        <div v-if="item.key === 'blogs'" class="space-y-3">
                            <div>
                                <div class="flex items-center justify-between">
                                    <h1 class="text-xl font-bold text-gray-700 dark:text-gray-200 md:text-2xl">Post</h1>
                                    <div>
                                        <VUEFilter />
                                    </div>
                                </div>
                                <div v-for="(i, key) in 5" :key="key" class="mt-6">
                                    <div
                                        class="max-w-4xl px-10 py-6 mx-auto bg-white dark:bg-black rounded-3xl shadow-sm dark:shadow-none dark:border dark:border-gray-900 border-primary shadow-primary">
                                        <div class="flex items-center justify-between"><span
                                                class="font-light text-gray-600">
                                                date
                                            </span><a href="#"
                                                class="px-2 py-1 text-xs font-bold text-gray-100 bg-primary dark:bg-primary-800 rounded-lg">Category</a>
                                        </div>
                                        <div class="mt-2"><a href="#"
                                                class="text-2xl font-bold text-gray-700 dark:text-gray-300 hover:underline">
                                                title
                                            </a>
                                            <p class="mt-2 text-gray-600 prose prose-[2px]  dark:prose-invert ">
                                                subtitle
                                            </p>
                                        </div>
                                        <div class="flex items-center justify-between mt-4">
                                            <NuxtLink :to="`/read/blog-${i.id}`" class="text-blue-500 hover:underline">
                                                Read more
                                            </NuxtLink>
                                            <div>
                                                <a class="flex items-center">
                                                    <img :src="'/placeholder.jpg'" alt="i.author.beeer_name"
                                                        class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block">
                                                    <NuxtLink to="`/account/profile-${i.id}`"
                                                        class="font-bold text-gray-700 hover:underline">
                                                        i.author.beeer_name

                                                    </NuxtLink>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else-if="item.key === 'authors'" class="space-y-3">
                            authors tab
                        </div>


                    </div>
                </div>
            </template>
        </UTabs>

    </div>
</template>