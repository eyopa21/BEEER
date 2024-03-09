<script setup>
definePageMeta({ layout: ['account'] })

import { ProjectsValidationSchema } from '../../zod/ProfileSettingsSchema'
import { get_projects_query } from '../../queries/users/get.gql'
import { InsertProjects_query } from '../../queries/users/insert.gql'
import { update_project_query } from '../../queries/users/update.gql'
import { delete_projects_query } from '../../queries/users/delete.gql'
import { upload_image_query } from '../../queries/others.gql'

const UID = useCookie('UID')
const { onResult, onError, loading, refetch } = useQuery(get_projects_query, { author_id: UID.value })
const { mutate: UpdateProject, onDone: onUpdateDone, onError: onUpdateError, loading: updateLoading } = useMutation(update_project_query)
const { mutate: AddProjects, onDone: onAddDone, onError: onAddError, loading: addLoading } = useMutation(InsertProjects_query)
const { mutate: DeleteProject, onDone: onDeleteDone, onError: onDeleteError, loading: deleteLoading } = useMutation(delete_projects_query)
const { mutate: UploadImage, onDone: onUploadDone, onError: onUploadError, loading: uploadLoading } = useMutation(upload_image_query)



const isOpen = ref(false)
const layout = useLayout();
const toast = useToast();
const projects = ref([])

const State = ref({
    base64: '',
    title: '',
    subtitle: '',
    description: '',
    start_date: '',
    end_date: '',
    location: '',
    link: '',
    client: '',
    skills: []
})
const toBeEdited = ref('')
const items = (row) => [
    [{
        label: 'Edit',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => {
            isOpen.value = true;
            toBeEdited.value = row.id
            State.value = { ...row }
        }
    }], [{
        label: 'Delete',
        icon: 'i-heroicons-trash-20-solid',
        click: () => {
            toast.add({
                id: 'deleteprojects',
                title: 'Are you sure',
                color: 'red',
                timeout: 0,
                actions: [{
                    label: 'Yes',
                    click: () => {
                        DeleteProject({ id: row.id })
                        onDeleteDone(async res => {
                            refetch();
                            toast.add({
                                id: 'deleteprojectssucesss',
                                title: 'Project deleted successfully',
                                icon: 'i-heroicons-exclamation-triangle',
                                color: 'green',
                                timeout: 5000
                            })
                        })
                        onDeleteError(err => {
                            toast.add({
                                id: 'deleteprojectserror',
                                title: err.message,
                                description: 'Please, try again',
                                icon: 'i-heroicons-exclamation-triangle',
                                color: 'red',
                                timeout: 5000
                            })
                        })
                    },
                    loading: deleteLoading.value
                }, {
                    label: 'No',
                    click: () => toast.remove()
                }]
            })

        }

    }]
]
const q = ref('')
const filteredRows = computed(() => {
    if (!q.value) {
        return projects.value
    }

    return projects.value.filter((proj) => {
        return Object.values(proj).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})


onResult(res => {
    projects.value = res.data?.projects?.map((proj, key) => {
        return { ...proj, key: key + 1 }
    })
})
onError(err => {
    layout.value.showAlert = { error: true, message: err.message }
})

const ADDorUPDATE = () => {

    if (toBeEdited.value === "") {
        if (State.value.base64) {
            UploadImage({ base64: State.value.base64?.base64?.split(",")[1] })
            onUploadDone(res => {
                AddProjects({ author_id: UID.value, image: res.data.UploadImage?.url, title: State.value.title, subtitle: State.value.subtitle, description: State.value.description, start_date: State.value.start_date, end_date: State.value.end_date, location: State.value.location, client: State.value.client, link: State.value.link, skills: State.value.skills })
            })
            onUploadError(err => {
                layout.value.showAlert = { error: true, message: err.message }
            })
            onAddDone(res => {

                refetch();
                isOpen.value = false;
                State.value = {}
            })
            onAddError(err => {
                layout.value.showAlert = { error: true, message: err.message }
            })
        } else {
            layout.value.showAlert = { error: true, message: 'Please, select image first' }
        }
    } else {
        if (State.value.base64) {
            UploadImage({ base64: State.value.base64?.base64?.split(",")[1] })
            onUploadDone(res => {
                UpdateProject({ id: toBeEdited.value, image: res.data.UploadImage?.url, title: State.value.title, subtitle: State.value.subtitle, description: State.value.description, start_date: State.value.start_date, end_date: State.value.end_date, location: State.value.location, client: State.value.client, link: State.value.link, skills: State.value.skills })
            })
            onUploadError(err => {
                layout.value.showAlert = { error: true, message: err.message }
            })
            onUpdateDone(res => {
                refetch();
                toBeEdited.value = ""
                isOpen.value = false;
                State.value = {}
            })
            onUpdateError(err => {
                layout.value.showAlert = { error: true, message: err.message }
            })
        } else {
            UpdateProject({ id: toBeEdited.value, image: State.value.image, title: State.value.title, subtitle: State.value.subtitle, description: State.value.description, start_date: State.value.start_date, end_date: State.value.end_date, location: State.value.location, client: State.value.client, link: State.value.link, skills: State.value.skills })
            onUpdateDone(res => {
                refetch();
                toBeEdited.value = ""
                isOpen.value = false;
                State.value = {}
            })
            onUpdateError(err => {
                layout.value.showAlert = { error: true, message: err.message }
            })
        }
    }


}

</script>
<template>
    <div class="w-full ml-20 md:ml-64 px-4 mt-8">
        <div class="flex justify-between mr-8">

            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <UInput v-model="q" placeholder="Search for projects..." size="xl" class="w-96" />
            </div>
            <div class="flex items-center">
                <UButton @click="isOpen = true" size="lg">Add new Project</UButton>
            </div>
        </div>
        <UTable :loading="loading" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
            :progress="{ color: 'primary', animation: 'carousel' }" sort-asc-icon="i-heroicons-arrow-up-20-solid"
            sort-desc-icon="i-heroicons-arrow-down-20-solid"
            :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"
            class="w-full"
            :columns="[{ key: 'key' }, { key: 'title', label: 'Title', sortable: true }, { key: 'subtitle', label: 'Subtitle', sortable: true }, { key: 'description', label: 'Description', sortable: true }, { key: 'location', label: 'Location', sortable: true }, { key: 'actions' }]"
            :rows="filteredRows">
            <template #name-data="{ row }">
                {{ row.name }}
            </template>

            <template #actions-data="{ row }">
                <UDropdown :items="items(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
                </UDropdown>
            </template>
        </UTable>
        <VUEPagination />
        <UModal v-model="isOpen" class="px-32" @close="toBeEdited = ''; State = {}"
            :prevent-close="uploadLoading || addLoading || updateLoading">

            <UForm :schema="ProjectsValidationSchema" :state="State" @submit="ADDorUPDATE">

                <UCard :ui="{
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                }">

                    <template #header>
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                {{ toBeEdited ? 'Update project' : 'Add new Project' }}
                            </h3>

                        </div>
                    </template>
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-full">

                            <UFormGroup name="title" v-slot="{ error }" label="Project title" :eager-validation="true">
                                <UInput v-model="State.title" type="text" placeholder="The title here ..." size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-full">

                            <UFormGroup name="subtitle" v-slot="{ error }" label="Project subttitle"
                                :eager-validation="true">
                                <UInput v-model="State.subtitle" type="text" placeholder="The subtitle here ..."
                                    size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-full">

                            <UFormGroup name="description" v-slot="{ error }" label="Project description"
                                :eager-validation="true">
                                <UTextarea v-model="State.description" type="text"
                                    placeholder="The description here ..." size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="start_date" v-slot="{ error }" label="Project start date"
                                :eager-validation="true">
                                <UInput v-model="State.start_date" type="date" placeholder="Start date" size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="end_date" v-slot="{ error }" label="Project end date"
                                :eager-validation="true">
                                <UInput v-model="State.end_date" type="date" placeholder="End date" size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="location" v-slot="{ error }" label="Location" :eager-validation="true">
                                <UInput v-model="State.location" type="text" placeholder="Project location..." size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="client" v-slot="{ error }" label="Client" :eager-validation="true">
                                <UInput v-model="State.client" type="text" placeholder="Client name ..." size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-full">

                            <UFormGroup name="link" v-slot="{ error }" label="Link" :eager-validation="true">
                                <UInput v-model="State.link" type="text" placeholder="Project link ..." size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-full">

                            <UFormGroup name="skills" v-slot="{ error }" label="Skills" :eager-validation="true">
                                <USelectMenu v-model="State.skills" :multiple="true" searchable
                                    searchable-placeholder="Search a skill..." placeholder="Select skills used"
                                    :options="['Html', 'CSS', 'Javascript', 'Typsecript', 'Jquery', 'Bootstrap', 'Tailwind', 'React', 'Redux', 'Vue', 'Vuex', 'Pinia', 'Next js', 'Nuxt js', 'Node js', 'Express', 'PHP', 'Laravel', 'Python', 'Djnago', 'Rust', 'AWS', 'Firebase', 'Angular', 'Svelete', 'Dart', 'Flutter', 'Getx', 'Axios', 'Apollo', 'Postgresql', 'Mongodb', 'Mysql']"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>



                    </div>


                    <VUEImage @onbase64="(n) => State.base64 = n" :image="State.image" />

                    <template #footer>
                        <div class="flex justify-end">
                            <UButton :loading="uploadLoading || addLoading || updateLoading" size="xl" type="submit">
                                {{ toBeEdited ? 'Update ' : 'Insert' }}
                            </UButton>
                        </div>
                    </template>
                </UCard>
            </UForm>
        </UModal>
    </div>
</template>