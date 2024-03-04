<script setup>
const props = defineProps(['author'])
</script>

<template>
    <div
        class="mb-7 p-5  border border-gray-300 dark:border-gray-700  rounded-3xl text-center bg-gray-50 dark:bg-gray-950 relative z-30">
        <div class="mb-[25px]">
            <img class="rounded-full w-full max-w-[200px] mx-auto"
                :src="props.author?.profile_detail[0]?.profile_picture" alt="">
        </div>
        <h4 class="text-primary text-[25px] font-bold  ">
            {{ props.author?.profile_detail[0]?.first_name + " " + props.author?.profile_detail[0]?.first_name + " | " +
                    props.author.beeer_name }}</h4>
        <a href="#" class="text-primary italic text-sm mb-[15px]">{{ props.author?.profile_detail[0]?.website }}</a>
        <p class=" text-gray-500 text-[15px] mb-[18px]">Hi! beautiful people. I`m an
            authtor of
            this blog. Read our post - stay with us</p>
        <ul class="flex justify-center">
            <li v-for="i in props.author?.social_links" :key="i" class="mr-[10px]">
                <a :href="i.link" class="block w-[40px] h-[40px] leading-[44px] 
                                            rounded-full transition-all hover:text-primary">
                    <Icon :name="i.enum.icon" class="w-full h-full" />
                </a>
            </li>

        </ul>
    </div>
</template>