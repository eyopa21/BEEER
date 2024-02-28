<script setup>
definePageMeta({ layout: 'auth' })
import { z } from 'zod'
import { verify_query } from '../../../queries/auth/authors.gql'
const { onLogout } = useApollo()
const { mutate: Verify, onDone, onError, loading } = useMutation(verify_query)

const router = useRouter();
const layout = useLayout();
const UID = useCookie('UID')
const VerifyState = ref({
    code: ''
})

const VerifySchema = z.object({
    code: z.string().min(5, 'Please insert valid code'),
})

const VERIFY = () => {
    console.log("verify")
    Verify({ id: UID.value, code: VerifyState.value.code })
    onDone(res => {
        layout.value.showAlert = { error: false, message: 'Verification success, please wait' }
        setTimeout(() => {
            reloadNuxtApp({
                path: "/",
                ttl: 1000,
            });
        }, 5000)
    })
    onError(err => {
        layout.value.showAlert = { error: true, message: err.message }
    })
}

const logout = async () => {
    await onLogout()
    UID.value = null
    router.push('/auth/user/login')
}

</script>

<template>
    <div class="h-screen flex items-center justify-center overlay">
        <div
            class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">

            <div class="px-4 py-5 sm:p-6">
                <div class="w-full max-w-sm space-y-6">
                    <div class="text-center">
                        <p class="text-2xl text-gray-900 dark:text-white font-bold">Verify your account
                        </p>
                        <p class="text-gray-500 dark:text-gray-400 mt-1"> We have sent a verification code to your email
                            <span @click="logout()" class="text-red-500 underline font-base cursor-pointer">logout</span>
                        </p>
                    </div>
                    <div class="gap-y-6 flex flex-col-reverse">

                        <div class="flex items-center align-center text-center w-full flex-row">
                            <UDivider label="BEEER.com" />

                        </div>
                        <UForm :schema="VerifySchema" :state="VerifyState" class="space-y-6" @submit="VERIFY">


                            <div class="">
                                <UFormGroup name="code" v-slot="{ error }" label="Verification code"
                                    :eager-validation="true">
                                    <UInput v-model="VerifyState.code" type="text"
                                        placeholder="Enter the verification code ..."
                                        :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                                </UFormGroup>
                            </div>

                            <UButton type="submit" :loading="loading"
                                class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center">
                                <span>Verify your Account</span>
                            </UButton>
                        </UForm>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center"> By signing up, you
                        agree to our <a href="/#faqs" class="text-primary font-medium">Terms of Service</a>. </p>
                </div>
            </div>
        </div>
    </div>
</template>