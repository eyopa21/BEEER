<script setup>

const page = ref(1)

</script>


<template>
    <div class="mt-8">
        <div>
            <div class="flex scale-120 justify-end px-10 py-4 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="4" :total="10" :ui="{
                    wrapper: 'flex items-center gap-1',
                    rounded: '!rounded-full min-w-[32px] justify-center',
                    default: {
                        activeButton: {
                            variant: 'outline'
                        }
                    }
                }" />
            </div>
        </div>
    </div>
</template>