<script setup>
const { getFilter, resetFilter, setFilter, applyFilter, isFiltersActive } = await useFiltering();
const categoryFilterValue = ref(computed(() => {
        return getFilter('category');
}));
const handleFilter = (value) => {
        //  resetFilter();
        applyFilter(categoryFilterValue.value, value)
} 
</script>


<template>
        <div class="mb-7 p-7 border-gray-100 border rounded-3xl">
                <h3 class="text-2xl text-gray-700 dark:text-gray-200 relative capitalize pb-5 mb-5
                                  ">Tags</h3>
                <ul class="overflow-hidden">
                        <li class="float-left mr-[8px] mb-[8px]">
                                <button @click="handleFilter('travel')"
                                        class="text-sm inline-block p-[5px_18px] text-[#232f4b] bg-[#ecf4fb] rounded-[5px] transition-all hover:bg-primary hover:text-white">
                                        Travel
                                </button>
                        </li>
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
</template>