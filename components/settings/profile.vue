<script setup>
const currentUser = useCurrentUser();
</script>

<template>
    <div class="w-full" v-if="currentUser.currentUser">

        <div
            class="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none items-center w-full h-full p-[16px] bg-cover">
            <div class="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
                :style="`background-image: url(&quot;${currentUser.currentUser?.profile_detail[0].profile_picture}&quot;);`">

                <div
                    class="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                    <img class="h-full w-full rounded-full"
                        :src="currentUser.currentUser?.profile_detail[0].profile_picture"
                        :alt="currentUser.currentUser.beeer_name">
                </div>
            </div>
            <div class="mt-16 flex flex-col items-center">
                <h4 class="text-xl font-bold text-navy-700 dark:text-white">
                    {{ currentUser.currentUser?.profile_detail[0].first_name }} +
                    {{ currentUser.currentUser?.profile_detail[0].last_name }} |
                    {{ currentUser.currentUser?.beeer_name }}</h4>
                <p class="text-base font-normal text-gray-600">{{
                    currentUser.currentUser?.profile_detail[0].profession }}</p>
            </div>
            <div class="mt-6 mb-3 flex gap-4 md:!gap-14">
                <div class="flex flex-col items-center justify-center">
                    <p class="text-2xl font-bold text-navy-700 dark:text-white">{{
                        currentUser.currentUser?.blogs_aggregate.aggregate.count }}</p>
                    <p class="text-sm font-normal text-gray-600">Posts</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="text-2xl font-bold text-navy-700 dark:text-white">9.7K</p>
                    <p class="text-sm font-normal text-gray-600">Crowns</p>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="text-2xl font-bold text-navy-700 dark:text-white">434</p>
                    <p class="text-sm font-normal text-gray-600">Points</p>
                </div>
            </div>
        </div>
    </div>
</template>