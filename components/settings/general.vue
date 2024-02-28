
<script setup>
import { GeneralValidationSchema } from '../../zod/ProfileSettingsSchema'
import { update_profile_detail } from '../../queries/users/update.gql'
const { mutate: Update, onDone, onError, loading } = useMutation(update_profile_detail)

const currentUser = useCurrentUser();
const layout = useLayout();
const State = ref({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    profession: '',
    location: '',
    phone_number: '',
    work_email: '',
    work_place: '',
    bio: '',
    website: ''
})

const updateValue = computed(() => {
    if (currentUser.value.currentUser?.profile_detail[0]?.phone_number) {

        State.value = { ...currentUser.value.currentUser?.profile_detail[0] }
    }
})
const UPDATE = () => {
    Update({
        id: currentUser.value.currentUser?.profile_detail[0]?.id,
        first_name: State.value.first_name,
        last_name: State.value.last_name,
        date_of_birth: State.value.date_of_birth,
        profession: State.value.profession,
        location: State.value.location,
        phone_number: State.value.phone_number,
        work_email: State.value.work_email,
        work_place: State.value.work_place,
        bio: State.value.bio,
        website: State.value.website
    })

    onDone(res => {
        layout.value.showAlert = { error: false, message: 'You have successfully updated your profile' }
    })
    onError(err => {
        layout.value.showAlert = { error: true, message: err.message }
    })
}

</script>
<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200 dark:shadow-gray-700 rounded-2xl p-4 mb-6">
        {{ updateValue }}
        <h3 class="mb-4 text-xl font-bold dark:text-gray-100">General information</h3>
        <UForm :schema="GeneralValidationSchema" :state="State" @submit="UPDATE">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="first_name" v-slot="{ error }" label="First Name" :eager-validation="true">
                        <UInput v-model="State.first_name" type="text" placeholder="Your first name..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <UFormGroup name="last_name" v-slot="{ error }" label="Last Name" :eager-validation="true">
                        <UInput v-model="State.last_name" type="text" placeholder="Your last name..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <UFormGroup name="date_of_birth" v-slot="{ error }" label="Date of birth" :eager-validation="true">
                        <UInput v-model="State.date_of_birth" type="date" placeholder="Birth date" size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="profession" v-slot="{ error }" label="Current profession" :eager-validation="true">
                        <UInput v-model="State.profession" type="text" placeholder="Your current profession..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="location" v-slot="{ error }" label="Location" :eager-validation="true">
                        <UInput v-model="State.location" type="text" placeholder="Your current location.." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="phone_number" v-slot="{ error }" label="Phone number" :eager-validation="true">
                        <UInput v-model="State.phone_number" type="text" placeholder="Your ohone number..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <UFormGroup name="webiste" v-slot="{ error }" label="Personal website" :eager-validation="true">
                        <UInput v-model="State.website" type="text" placeholder="Your personal website..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <UFormGroup name="work_email" v-slot="{ error }" label="Work email" :eager-validation="true">
                        <UInput v-model="State.work_email" type="text" placeholder="Your Work email..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="work_place" v-slot="{ error }" label="Work place" :eager-validation="true">
                        <UInput v-model="State.work_place" type="text" placeholder="Your current work place..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-12 sm:col-span-6">
                    <UFormGroup name="bio" v-slot="{ error }" label="Bio" :eager-validation="true">
                        <UTextarea v-model="State.bio" type="text" placeholder="Description about your self..." size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>

                <div class="col-span-6 sm:col-full flex justify-end">
                    <UButton type="submit" :loading="loading" size="md" class="px-8">Update</UButton>

                </div>
            </div>
        </UForm>
    </div>
</template>

