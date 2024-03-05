<script setup lang="ts">
const props = defineProps(['title', 'subtitle'])
const router = useRouter();
</script>

<template>
    <div class="w-full  my-16 lg:my-24">
        <div class="flex flex-col items-center justify-center w-full text-center">
            <Icon name="ion:sad-outline" size="156" class="opacity-25 mb-10" />
            <h2 class="text-2xl font-bold">{{ props.title }}</h2>
            <p class="mt-4 max-w-xs">
                {{ props.subtitle }}
            </p>
            <div>
                <button @click="router.go(-1)"
                    class="bg-primary rounded-lg font-bold mt-8 text-center text-white text-sm w-full p-2 px-3 inline-block"
                    title="Clear all filters and search" aria-label="Clear all filters and search">
                    Get back
                </button>
            </div>
        </div>
    </div>
</template>