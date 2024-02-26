<template>
    <div class=" scroll-smooth">
        <NuxtLayout name="default">


            <div class="flex overflow-hidden bg-white dark:bg-gray-800 ">
                <VUESidebar class="block lg:w-64 " />
                <slot />

            </div>
        </NuxtLayout>
    </div>
</template>
