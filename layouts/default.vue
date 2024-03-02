<script setup>
const route = useRoute();
</script>
<template>
    <div>


        <NavHeader />
        <slot />

        <div v-if="!route.name.includes('account')" class="mt-16">

            <NavFooter />
        </div>

    </div>
</template>

