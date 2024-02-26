<script setup lang="ts">
const items = [
    [{
        label: 'Date',
        icon: 'i-heroicons-archive-box-20-solid'
    }, {
        label: 'Like',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Title',
        icon: 'i-heroicons-trash-20-solid',

    }]
]
</script>

<template>
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Filter" trailing-icon="i-heroicons-chevron-down-20-solid" />
    </UDropdown>
</template>