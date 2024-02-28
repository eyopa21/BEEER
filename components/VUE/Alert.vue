<script setup>
const layout = useLayout();
</script>



<template>
    <div class="w-80 text-red-500">
        <UNotification @close="layout.showAlert.message = ''"
            :icon="layout.showAlert.error ? 'i-heroicons-exclamation-triangle-20-solid' : 'i-heroicons-check-circle'"
            :description="layout.showAlert.message" :id="3" :timeout="5000"
            :title="layout.showAlert.error ? 'Error' : 'Success'" :color="layout.showAlert.error ? 'red' : 'primary'" />
    </div>
</template>

