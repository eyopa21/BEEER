<script setup>
definePageMeta({ layout: ['account'] })

import { CertificatesValidationSchema } from '../../zod/ProfileSettingsSchema'
import { get_certificates_query } from '../../queries/users/get.gql'
import { InsertCertificates_query } from '../../queries/users/insert.gql'
import { update_certificates_query } from '../../queries/users/update.gql'
import { delete_certificates_query } from '../../queries/users/delete.gql'
import { upload_image_query } from '../../queries/others.gql'

const UID = useCookie('UID')
const { onResult, onError, loading, refetch } = useQuery(get_certificates_query, { author_id: UID.value })
const { mutate: UpdateCertificates, onDone: onUpdateDone, onError: onUpdateError, loading: updateLoading } = useMutation(update_certificates_query)
const { mutate: AddCertificates, onDone: onAddDone, onError: onAddError, loading: addLoading } = useMutation(InsertCertificates_query)
const { mutate: DeleteCertificates, onDone: onDeleteDone, onError: onDeleteError, loading: deleteLoading } = useMutation(delete_certificates_query)
const { mutate: UploadImage, onDone: onUploadDone, onError: onUploadError, loading: uploadLoading } = useMutation(upload_image_query)



const isOpen = ref(false)
const layout = useLayout();
const toast = useToast();
const certificates = ref([])

const State = ref({
    base64: '',
    title: '',
    description: '',
    start_date: '',
    end_date: '',
    location: ''
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
                id: 'deletecertificates',
                title: 'Are you sure',
                color: 'red',
                timeout: 0,
                actions: [{
                    label: 'Yes',
                    click: () => {
                        DeleteCertificates({ id: row.id })
                        onDeleteDone(async res => {
                            refetch();
                            toast.add({
                                id: 'deletecertificatessucesss',
                                title: 'Certificate deleted successfully',
                                icon: 'i-heroicons-exclamation-triangle',
                                color: 'green',
                                timeout: 5000
                            })
                        })
                        onDeleteError(err => {
                            toast.add({
                                id: 'deletecertificateserror',
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
        return certificates.value
    }

    return certificates.value.filter((cert) => {
        return Object.values(cert).some((value) => {
            return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})


onResult(res => {
    certificates.value = res.data?.certificates?.map((cert, key) => {
        return { ...cert, key: key + 1 }
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
                AddCertificates({ author_id: UID.value, image: res.data.UploadImage?.url, title: State.value.title, description: State.value.description, start_date: State.value.start_date, end_date: State.value.end_date, location: State.value.location })
            })
            onUploadError(err => {
                layout.value.showAlert = { error: true, message: err.message }
            })
            onAddDone(res => {
                console.log("done")
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
                UpdateCertificates({ id: toBeEdited.value, image: res.data.UploadImage?.url, title: State.value.title, description: State.value.description, start_date: State.value.start_date, end_date: State.value.end_date, location: State.value.location })
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
            UpdateCertificates({ id: toBeEdited.value, image: State.value.image, title: State.value.title, description: State.value.description, start_date: State.value.start_date, end_date: State.value.end_date, location: State.value.location })
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
    <div class="w-full ml-64 px-4 mt-8">
        <div class="flex justify-between mr-8">

            <div class="flex px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <UInput v-model="q" placeholder="Filter certificates..." size="xl" class="w-96" />
            </div>
            <div class="flex items-center">
                <UButton @click="isOpen = true" size="lg">Add new Certification</UButton>
            </div>
        </div>
        <UTable :loading="loading" :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
            :progress="{ color: 'primary', animation: 'carousel' }" sort-asc-icon="i-heroicons-arrow-up-20-solid"
            sort-desc-icon="i-heroicons-arrow-down-20-solid"
            :sort-button="{ icon: 'i-heroicons-sparkles-20-solid', color: 'primary', variant: 'outline', size: '2xs', square: false, ui: { rounded: 'rounded-full' } }"
            class="w-full"
            :columns="[{ key: 'key' }, { key: 'title', label: 'Title', sortable: true }, { key: 'description', label: 'Description', sortable: true }, { key: 'location', label: 'Location', sortable: true }, { key: 'actions' }]"
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

            <UForm :schema="CertificatesValidationSchema" :state="State" @submit="ADDorUPDATE">

                <UCard :ui="{
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                }">
                    <template #header>
                        <div class="flex items-center justify-between">
                            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                                {{ toBeEdited ? 'Update certification' : 'Add new Certification' }}
                            </h3>

                        </div>
                    </template>
                    <div class="grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="title" v-slot="{ error }" label="Certification title"
                                :eager-validation="true">
                                <UInput v-model="State.title" type="text" placeholder="The title here ..." size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="description" v-slot="{ error }" label="Certification description"
                                :eager-validation="true">
                                <UInput v-model="State.description" type="text" placeholder="The description here ..."
                                    size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="start_date" v-slot="{ error }" label="Certification start date"
                                :eager-validation="true">
                                <UInput v-model="State.start_date" type="date" placeholder="Start date" size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="end_date" v-slot="{ error }" label="Certification end date"
                                :eager-validation="true">
                                <UInput v-model="State.end_date" type="date" placeholder="End date" size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>
                        <div class="col-span-6 sm:col-span-3">

                            <UFormGroup name="location" v-slot="{ error }" label="Location" :eager-validation="true">
                                <UInput v-model="State.location" type="text" placeholder="Certification location..."
                                    size="lg"
                                    :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                            </UFormGroup>
                        </div>


                    </div>

                    <!--div class="flex my-4 space-x-5 ">


                    <a v-for="i in  projectImagestoPreview " class="hover:scale-110 -mr-3" :key="i">
                        <img @click="showImageModal = true" class="w-24 h-24 rounded-full border-2 border-white" :src="i"
                            alt="blog image">
                        <a @click="removeImage(i)" class="cursor-pointer"><svg
                                class="-mt-5 w-6 h-6 text-red-600 hover:scale-110" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg></a>
                    </a>


                </div-->
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