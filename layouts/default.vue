<script setup>
const route = useRoute();
</script>
<template>
    <div>


        <NavHeader />
        <slot />

        <div v-if="route.name !== 'account-settings-id'" class="mt-16">

            <NavFooter />
        </div>

    </div>
</template>

