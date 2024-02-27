<script setup>
const height = ref(5)

</script>


<template>
  <div class="bg-white dark:bg-black scroll-smooth  min-w-screen w-screen transition-colors duration-100">
    <NuxtLayout>
      <NuxtLoadingIndicator color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
        :height="height" />

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
/* Page transition */
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>