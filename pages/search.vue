<script setup>
const route = useRoute();

</script>

<template>
    <div>
        search {{ route.query }}
    </div>
</template>