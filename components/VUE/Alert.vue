<script setup>
const layout = useLayout();
</script>



<template>
    <div class="w-80 text-red-500 z-[2147483647]">
        <UNotification @close="layout.showAlert.message = ''"
            :icon="layout.showAlert.error || layout.showAlert.warning ? 'i-heroicons-exclamation-triangle-20-solid' : 'i-heroicons-check-circle'"
            :description="layout.showAlert.message" :id="3" :timeout="5000"
            :title="layout.showAlert.error ? 'Error' : layout.showAlert.warning ? 'Warning' : 'Success'"
            :color="layout.showAlert.error ? 'red' : layout.showAlert.warning ? 'orange' : 'primary'"
            class="z-[2147483647]" />
    </div>
</template>

