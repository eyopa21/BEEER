<script setup>
import { ChnagePasswordValidationSchema } from '../../zod/PasswordSchema'

const State = ref({
    old_password: '',
    new_password: '',
    confirm_password: ''
})

</script>




<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200  dark:shadow-gray-700 rounded-2xl p-4 mb-6">
        <h3 class="mb-4 text-xl font-bold dark:text-gray-100">Password information</h3>
        <UForm :schema="ChnagePasswordValidationSchema" :state="State">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="old_password" v-slot="{ error }" label="Current Password" :eager-validation="true">
                        <UInput v-model="State.old_password" type="password" placeholder="********" size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>

                </div>
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="new_password" v-slot="{ error }" label="New password" :eager-validation="true">
                        <UInput v-model="State.new_password" type="password" placeholder="***********" size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <UFormGroup name="confirm_password" v-slot="{ error }" label="Confirm password"
                        :eager-validation="true">
                        <UInput v-model="State.confirm_password" type="password" placeholder="*********" size="lg"
                            :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                    </UFormGroup>
                </div>
                <div class="col-span-full">
                    <div class="text-sm font-medium dark:text-gray-300">
                        Password requirements:
                    </div>
                    <div class="mb-1 text-sm font-normal text-gray-500">
                        Ensure that these requirements are met:
                    </div>
                    <ul class="pl-4 space-y-1 text-gray-500">
                        <li class="text-xs font-normal">
                            At least 10 characters (and up to 100 characters)
                        </li>
                        <li class="text-xs font-normal">
                            At least one lowercase character
                        </li>
                        <li class="text-xs font-normal">
                            Inclusion of at least one special character, e.g., ! @
                            # ?
                        </li>
                        <li class="text-xs font-normal">
                            Some text here
                        </li>
                    </ul>
                </div>
                <div class="col-span-6 sm:col-full">
                    <UButton type="submit" size="md" class="px-8">Change Password</UButton>
                </div>
            </div>
        </UForm>
    </div>
</template>
