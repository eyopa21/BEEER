<script setup>
const height = ref(5)
const layout = useLayout();
const { myAuth } = useAuth()
const mainData = useData();
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await myAuth()
    console.log("tokichaw", res)
    loading.value = false;
  } catch (err) {
    console.log("tokierror", err)
    loading.value = false;
  }
})

const { setSocialLinks } = useGetData();

try {
  await setSocialLinks()
} catch (err) {
  layout.value.showAlert = { error: true, message: 'Loading social links error' }
}
</script>


<template>
  <div class="bg-white dark:bg-black scroll-smooth  min-w-screen w-screen transition-colors duration-100">
    <NuxtLayout>

      <div class="fixed top-8 right-8 z-[2147483647]">
        <VUEAlert v-if="layout.showAlert.message" />
      </div>
      <NuxtLoadingIndicator color="linear-gradient(to right, rgb(134, 239, 172), rgb(59, 130, 246), rgb(147, 51, 234))"
        :height="height" />

      <NuxtPage />
      <UNotifications />
    </NuxtLayout>
    <div v-if="loading"
      class="fixed inset-0 z-50 bg-gray-900  max-h-screen overscroll-contain  max-w-screen opacity-80 ">

      <VUELoading />
    </div>

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