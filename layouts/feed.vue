<script setup>
const layout = useLayout();
const links = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        },
        badge: 100
    }, {
        label: 'Installation',
        icon: 'i-heroicons-home',
        to: '/getting-started/installation'
    }, {
        label: 'Vertical Navigation',
        icon: 'i-heroicons-chart-bar',
        // to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/vertical-navigation`
    }, {
        label: 'Command Palette',
        icon: 'i-heroicons-command-line',
        to: '/components/command-palette'
    }], [{
        label: 'Examples',
        icon: 'i-heroicons-light-bulb'
    }, {
        label: 'Help',
        icon: 'i-heroicons-question-mark-circle'
    }]
]
</script>

<template>
    <div>

        <NuxtLayout name="default">
            <div>
                <div class="w-32 ">

                    <USlideover v-model="layout.showFeedsOptions" side="right"
                        :ui="{ wrapper: 'ml-16', background: 'bg-white dark:bg-black' }">
                        <div class="p-4 flex-1">

                            <div class="flex items-center justify-between">
                                <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                    Settings
                                </h3>
                                <UButton color="gray" variant="outline" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                                    @click="layout.showFeedsOptions = false" />
                            </div>

                            <UVerticalNavigation :links="links" />
                        </div>
                    </USlideover>
                </div>
            </div>
            <div class="flex cursor-pointer fixed right-2 top-16 animate-rotate justify-end p-2 lg:hidden">
                <Icon name="i-heroicons-viewfinder-circle-solid" class="w-6 h-6" alt="Options" />
            </div>
            <slot />
        </NuxtLayout>
    </div>
</template>
