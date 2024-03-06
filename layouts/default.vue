<script setup>
const route = useRoute();

const layout = useLayout();
const links = [
    [{
        label: 'Home',
        icon: 'i-heroicons-home',
        to: '/'
    }], [{
        label: 'Feeds',
        icon: 'i-heroicons-rss-16-solid',
        to: '/feeds'
    },
    {
        label: 'Writers',
        icon: 'i-heroicons-pencil-solid',
        to: '/writers'
    }], [{
        label: 'FAQs',
        icon: 'i-heroicons-question-mark-circle',
        to: '/#faqs'
    }, {
        label: 'Documentation',
        icon: 'i-heroicons-light-bulb'
    }, {
        label: 'Help',
        icon: 'i-heroicons-chat-bubble-left-ellipsis'
    }]
]
</script>

<template>
    <div>


        <NavHeader />
        <USlideover v-model="layout.showMainSideBar" side="left">
            <div class="p-4 flex-1">


                <UCard class="flex flex-col flex-1 min-h-screen"
                    :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                Settings
                            </h3>
                            <UButton color="gray" variant="outline" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                                @click="layout.showMainSideBar = false" />
                        </div>
                    </template>

                    <UVerticalNavigation :links="links" @click="layout.showMainSideBar = false" />

                    <template #footer>
                        <p class="flex justify-center text-primary p-2">version 1.1</p>
                    </template>
                </UCard>

            </div>
        </USlideover>
        <slot />

        <div v-if="!route.name.includes('account') || route.name === 'account-profile-id'" class="mt-16">

            <NavFooter />
        </div>

    </div>
</template>
