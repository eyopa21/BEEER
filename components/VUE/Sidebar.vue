<template>
    <div id="sidebar"
        class="w-64 transition-all duration-[.5s] flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full  lg:flex shadow-t-xl">
        <div id="inner-sidenav-transition"
            class="lg:w-64 shadow-violet-500 shadow-lg lg:shadow-none mt-[.4px] lg:mt-0 flex transition-all duration-[.5s]  relative flex-col flex-1 pt-0 min-h-0 bg-gray-100 lg:bg-gray-50 dark:bg-gray-900 border-b-32">
            <div class="flex overflow-y-auto flex-col flex-1 pt-8 pb-4">
                <div class="flex-1 px-3 bg-gray-50 dark:bg-gray-900" id="sidebar-items">
                    <ul class="pb-2 pt-1">

                        <li v-for="( i, key ) in  navs " :key="key" class="">


                            <NuxtLink :to="i.to"
                                class="flex items-center py-2.5 px-3 text-base font-normal text-dark-500 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 group  transition-all duration-200"
                                exact-active-class="bg-gray-200 dark:bg-gray-700">
                                <div
                                    class="bg-white dark:bg-gray-800 shadow-lg shadow-gray-300 dark:shadow-gray-800  w-8 h-8 p-2 mr-1 rounded-lg text-center grid place-items-center">

                                    <ClientOnly>
                                        <Icon :name="i.icon" class="dark:text-gray-300" />
                                    </ClientOnly>
                                </div>
                                <span class="block ml-3 dark:text-white  text-sm font-light" sidebar-toggle-item=""> {{
                                    i.name
                                }}
                                </span>
                            </NuxtLink>
                            <hr v-if="key == 0 || key == 6"
                                class="border-0 mt-2 h-px last:mb-2 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
                        </li>

                    </ul>


                </div>
            </div>
            <BottomSidebar />
        </div>
    </div>

    <div class=" lg:hidden fixed inset-0 z-10 bg-gray-900 opacity-50" id="sidebarBackdrop"></div>
</template>

<script setup>
const shrink = ref(false)

const props = defineProps(['class'])
const navs = ref([{
    name: 'Dashboard',
    to: '/account/settings-12',
    icon: 'heroicons:adjustments-horizontal-20-solid'
},

{
    name: 'Projects',
    to: '/account/projects-12',
    icon: 'heroicons-solid:briefcase'
},
{
    name: 'Education',
    to: '/account/education-12',
    icon: 'heroicons:code-bracket-20-solid'
},
{
    name: 'Certificates',
    to: '/account/certificates-12',
    icon: 'heroicons:newspaper-20-solid'
},

])
</script>


<style></style>