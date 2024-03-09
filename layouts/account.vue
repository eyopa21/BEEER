<template>
    <div class=" scroll-smooth">
        <NuxtLayout name="default">


            <div class="flex overflow-y-auto bg-white dark:bg-gray-800 ">
                <VUESidebar class="block lg:w-64 " />
                <slot class="-ml-2" />

            </div>
        </NuxtLayout>
    </div>
</template>
