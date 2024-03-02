<script setup>
import { AddSocialLinkValidationSchema } from '../../zod/ProfileSettingsSchema'
import { insert_social_links_query } from '../../queries/users/insert.gql'
import { update_social_links_query } from '../../queries/users/update.gql'
import { delete_social_links_query } from '../../queries/users/delete.gql'

const { mutate: UpdateSocialLink, onDone: onUpdateDone, onError: onUpdateError, loading: updateLoading } = useMutation(update_social_links_query)
const { mutate: AddSocialLink, onDone: onAddDone, onError: onAddError, loading: addLoading } = useMutation(insert_social_links_query)
const { mutate: DeleteSocialLink, onDone: onDeleteDone, onError: onDeleteError, loading: deleteLoading } = useMutation(delete_social_links_query)

const isOpen = ref(false)
const toBeEdited = ref('')
const layout = useLayout();
const toast = useToast();
const currentUser = useCurrentUser();
const links = computed(() => {
    return currentUser.value.currentUser?.social_links
})

const SOCIAL_LINKS = useData().value.SOCIALLINKS?.map(link => {
    return { label: link.name, icon: link.icon }
})
const { myAuth } = useAuth();

const DELETE = (id) => {

    toast.add({
        id: 'deletesociallinks',
        title: 'Are you sure',
        color: 'red',
        timeout: 0,
        actions: [{
            label: 'Yes',
            click: () => {
                DeleteSocialLink({ id: id })
                onDeleteDone(async res => {

                    toast.add({
                        id: 'deletesociallinksucesss',
                        title: 'Social link deleted successfully',
                        icon: 'i-heroicons-exclamation-triangle',
                        color: 'green',
                        timeout: 5000
                    })
                })
                onDeleteError(err => {
                    toast.add({
                        id: 'deletesociallinkerror',
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

const State = ref({
    link_name: '',
    the_link: '',
})

const ADDorUPDATE = () => {
    if (toBeEdited.value !== '') {
        UpdateSocialLink({ id: toBeEdited.value, name: State.value.link_name, link: State.value.the_link })
        onUpdateDone(res => {
            State.value = {}
            isOpen.value = false
        })
        onUpdateError(err => {
            layout.value.showAlert = { error: true, message: err.message }
        })

    } else {
        AddSocialLink({ author_id: currentUser.value.id, name: State.value.link_name, link: State.value.the_link })
        onAddDone(res => {
            State.value = {}
            isOpen.value = false
        })
        onAddError(err => {
            console.log("eroror", err)
            layout.value.showAlert = { error: true, message: err.message }
        })
    }

}
</script>


<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200  dark:shadow-gray-700 rounded-2xl p-4 mb-6">
        <div class="flow-root">

            <h3 class="dark:text-gray-100 text-xl font-bold">Social accounts</h3>
            <ul class="divide-y divide-gray-200">

                <ClientOnly>
                    <li v-for="link in links" :key="link" class="py-4">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <Icon :name="link.enum.icon" class=" w-5 h-5 text-white" />
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="block text-base font-semibold text-gray-900 dark:text-gray-400 truncate">
                                    {{ link.enum.name }}
                                </span>
                                <a href="#" class="block text-sm font-normal text-fuchsia-500 truncate hover:underline">
                                    {{ link.link }}
                                </a>
                            </div>
                            <div class="inline-flex items-center space-x-2">

                                <VUEButton
                                    @click="isOpen = true; toBeEdited = link.id; State.link_name = link.enum.name; State.the_link = link.link"
                                    name="Edit" variation="edit" type="button"
                                    className=" bg-white rounded-lg border border-gray-300 hover:bg-gray-50 hover:scale-[1.02] transition-transform" />
                                <VUEButton @click="DELETE(link.id)" name="Delete" type="button" variation="delete" />

                            </div>
                        </div>
                    </li>
                </ClientOnly>

            </ul>

            <div class="mt-2 flex justify-end">
                <UButton @click="isOpen = true" type="button"> Add new</UButton>

            </div>
        </div>
        <UModal v-model="isOpen" @close="State = {}; toBeEdited = ''">
            <UForm :schema="AddSocialLinkValidationSchema" :state="State" @submit="ADDorUPDATE">
                <UCard :ui="{
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                }">
                    <template #header> FInish the Process </template>
                    <div class="flex flex-col space-y-4">

                        <UFormGroup name="link_name" v-slot="{ error }" label="Select the Social account"
                            :eager-validation="true">
                            <UInputMenu v-model="State.link_name" :options="SOCIAL_LINKS" class="text-primary"
                                value-attribute="label"
                                :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined">
                                <template #leading>
                                    <UIcon v-if="State.link_name" name="i-heroicons-user-circle" class="w-4 h-4 mx-0.5" />

                                </template>
                            </UInputMenu>
                        </UFormGroup>
                        <UFormGroup name="the_link" v-slot="{ error }" label="The link" :eager-validation="true">
                            <UInput v-model="State.the_link" type="text" placeholder="Your current work place..." size="lg"
                                :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                        </UFormGroup>
                    </div>
                    <template #footer>
                        <div class="flex justify-end">
                            <UButton size="xl" type="submit" :loading="addLoading || updateLoading"> {{ toBeEdited ?
                                'Update'
                                : 'Insert ' }}
                            </UButton>
                        </div>
                    </template>
                </UCard>
            </UForm>
        </UModal>
    </div>
</template>

