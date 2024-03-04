<template>
    <div class="mb-7 p-5 border-gray-100 border rounded-3xl text-center bg-white dark:bg-primary relative z-30">
        <form>
            <div class="relative">
                <UInput icon="i-heroicons-magnifying-glass-20-solid" size="xl" color="white" :trailing="false"
                    placeholder="Search..." />
                <UButton color="primary" type="submit"
                    class="bg-primary text-xl text-white border-none absolute right-0.5 top-[50%] h-[40px] leading-[50px] w-[50px] rounded-[6px] -translate-y-1/2">

                    <Icon name="i-heroicons-magnifying-glass-20-solid" class="size-6 h-6 " />
                </UButton>

            </div>
        </form>
    </div>
</template>