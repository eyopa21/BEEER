<template>
    <main class=" ml-20  w-full mb-32">
        <div @scroll="test()" class=" grid grid-cols-1 md:px-4 pt-6 xl:grid-cols-3 xl:gap-6">
            <div class="col-span-full mb-4 xl:mb-0">

                <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-200 sm:text-2xl">
                    User settings
                </h1>
            </div>

            <div class="col-span-full ">
                <SettingsProfile />
                <SettingsProfilePicture />
            </div>
            <div class=" col-span-full ">

                <!--SettingsDateAndTIme/-->
                <!--SettingsGuests /-->
                <SettingsSocialAccounts />
            </div>
            <div class=" col-span-full">
                <SettingsGeneral />

                <SettingsChangePassword />
                <!--SettingsSessions/-->
            </div>
        </div>
        <!--div class="flex px-4">
            <div
                class="bg-white dark:bg-gray-900 w-full shadow-lg shadow-gray-200 dark:shadow-gray-700 rounded-2xl p-4 mb-4 xl:mb-0">
                <div class="flow-root">
                    <h3 class="text-xl font-bold dark:text-gray-100">Preference Settings</h3>
                    <p class="text-xs font-normal text-gray-500">
                        You can set up your preference here ...
                    </p>
                    <div class="divide-y divide-gray-200">

                        <div v-for="(setting, i) in settings" :key="i" class="flex justify-between items-center py-4">
                            <div class="flex flex-col flex-grow">
                                <div class="text-lg font-semibold text-gray-900 dark:text-gray-500">
                                    {{ setting.title }}
                                </div>
                                <div class="text-base font-normal text-gray-500 dark:text-gray-700">
                                    {{ setting.description }}
                                </div>
                            </div>
                            <VueToggle :id="'id' + i" :toggleData="setting.value" @toggle="(a) => setting.value = a" />
                        </div>


                    </div>
                    <div class="mt-6">
                        <VueButton @click="save" name="Save all" variation="normal" type="button" />
                    </div>
                </div>
            </div>

        </!--div-->
    </main>
</template>
<style>
.stickyy {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    width: 200px;
}
</style>
<script setup>

definePageMeta({
    layout: 'account'
})


const save = () => {
    console.log("istoggle", isToggledOn.value)
}

const test = () => {
    console.log("testststs")
}

const settings = ref([{
    title: 'Account Activity',
    description: 'Get important notifications about you or activity youve missed',
    value: false
},
{
    title: 'Account Activity',
    description: 'Get important notifications about you or activity youve missed',
    value: true
}, {
    title: 'Account Activity',
    description: 'Get important notifications about you or activity youve missed',
    value: true
}, {
    title: 'Account Activity',
    description: 'Get important notifications about you or activity youve missed',
    value: false
}, {
    title: 'Account Activity',
    description: 'Get important notifications about you or activity youve missed',
    value: true
},])
</script>