<script setup>

const props = defineProps(['profile'])

const items = [{
    key: 'education',
    label: 'Education',
    description: 'Education background of Mr Eyob'
}, {
    key: 'certificate',
    label: 'Ceftications',
    description: 'Certfication of Mr Eyob '
}, {
    key: 'project',
    label: 'Projects',
    description: 'Previous projects of Mr Eyob'
}]
</script>

<template>
    <div class="">

        <UTabs :items="items" class="w-full">
            <template #item="{ item }">
                <div class=" bg-transparent border-none">
                    <!--div class="pl-4 ">
                        <p class=" font-semibold leading-6 text-primary text-xl  bg-transparent">
                            {{ item.description }}
                        </p>
                        </!--div-->
                    <div class="p-2" v-if="props.profile">

                        <div v-if="item.key === 'education'" class="space-y-3">
                            <LazyProfileEducationTab :educations="props.profile?.educations" />
                        </div>
                        <div v-else-if="item.key === 'certificate'" class="space-y-3">
                            <LazyProfileCertificatesTab :certificates="props.profile?.certificates" />
                        </div>
                        <div v-else-if="item.key === 'project'" class="space-y-3">

                            <LazyProfileProjectsTab :projects="props.profile?.projects" />
                        </div>

                    </div>
                </div>
            </template>
        </UTabs>
    </div>
</template>
