<script setup>
definePageMeta({ layout: 'auth' })
import { SignUpValidationSchema } from '../../../zod/SignUpSchema'

const SignUpState = ref({
    beeer_name: '',
    email: '',
    password: ''
})

const SignUp = () => {
    console.log("signup")
}

</script>

<template>
    <div class="h-screen flex items-center justify-center overlay">
        <div
            class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">

            <div class="px-4 py-5 sm:p-6">
                <div class="w-full max-w-sm space-y-6">
                    <div class="text-center">
                        <p class="text-2xl text-gray-900 dark:text-white font-bold">Create an account
                        </p>
                        <p class="text-gray-500 dark:text-gray-400 mt-1"> Already have an account? <NuxtLink
                                to="/auth/user/login" class="text-primary font-medium">Login</NuxtLink>. </p>
                    </div>
                    <div class="gap-y-6 flex flex-col-reverse">
                        <div class="space-y-3"><button type="button"
                                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center">
                                <Icon name="i-mdi-github" class="flex-shrink-0 h-5 w-5" /><span class="">Continue with
                                    GitHub</span>
                            </button></div>
                        <div class="flex items-center align-center text-center w-full flex-row">
                            <UDivider label="OR" />

                        </div>
                        <UForm :schema="SignUpValidationSchema" :state="SignUpState" class="space-y-6" @submit="SignUp">

                            <div class="">
                                <UFormGroup name="beeer_name" v-slot="{ error }" label="Beeer Name"
                                    :eager-validation="true">
                                    <UInput v-model="SignUpState.beeer_name" type="text" placeholder="Enter beeer name"
                                        :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                                </UFormGroup>
                            </div>
                            <div class="">
                                <UFormGroup name="email" v-slot="{ error }" label="Email" :eager-validation="true">
                                    <UInput v-model="SignUpState.email" type="email" placeholder="Enter email"
                                        :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                                </UFormGroup>
                            </div>
                            <div class="">
                                <UFormGroup name="password" v-slot="{ error }" label="Password" :eager-validation="true">
                                    <UInput v-model="SignUpState.password" type="password" placeholder="**********"
                                        :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                                </UFormGroup>
                            </div>
                            <UButton type="submit"
                                class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center">
                                <span>Create
                                    account</span>
                            </UButton>
                        </UForm>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center"> By signing up, you
                        agree to our <a href="/" class="text-primary font-medium">Terms of Service</a>. </p>
                </div>
            </div>
        </div>
    </div>
</template>