<script setup>
definePageMeta({
    layout: 'auth'
})
import {
    LoginValidationSchema
} from '../../../zod/LoginSchema'
import { login_query } from '../../../queries/auth/authors.gql'
const {
    onLogin,
    onLogout,
    getToken
} = useApollo()
const {
    mutate: Login,
    onDone,
    onError,
    loading
} = useMutation(login_query)
const router = useRouter();
const layout = useLayout();
const UID = useCookie('UID')
const LoginState = ref({

    email: '',
    password: ''
})
const LOGIN = () => {
    UID.value = null
    onLogout()
    Login({

        email: LoginState.value.email,
        password: LoginState.value.password
    })
    onDone(async res => {
        console.log("is verif", res.data.Login.is_verified)
        await onLogout()
        await onLogin(res.data.Login.token)
        UID.value = res.data.Login.id;
        if (!res.data.Login.is_verified) {
            router.push('/auth/user/verify')
        } else {
            reloadNuxtApp({
                path: "/",
                ttl: 1000,
            });
        }
    })
    onError(async err => {
        UID.value = null
        await onLogout()
        layout.value.showAlert = {
            message: err.message,
            error: true
        }
    })
}
</script>

<template>
    <div class="h-screen flex items-center justify-center overlay">


        <div
            class="rounded-xl divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow max-w-sm w-full bg-white/75 dark:bg-white/5 backdrop-blur">
            <div class="px-4 py-5 sm:p-6">
                <div class="w-full max-w-sm space-y-6">
                    <div class="text-center">
                        <div class="mb-2 pointer-events-none">
                            <span
                                class="i-heroicons-lock-closed w-8 h-8 flex-shrink-0 text-gray-900 dark:text-white"></span>
                        </div>
                        <p class="text-2xl text-gray-900 dark:text-white font-bold">
                            Welcome back
                        </p>
                        <p class="text-gray-500 dark:text-gray-400 mt-1">
                            Don't have an account?
                            <NuxtLink to="/auth/user/signup" class="text-primary font-medium">Sign up</NuxtLink>.
                        </p>
                    </div>
                    <div class="gap-y-6 flex  flex-col-reverse">
                        <div class="space-y-3">
                            <button type="button"
                                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 w-full flex justify-center items-center">
                                <Icon name="i-mdi-github" class="flex-shrink-0 h-5 w-5" /><span class="">Continue
                                    with GitHub</span>
                            </button>
                        </div>
                        <div class="flex items-center align-center text-center w-full flex-row">
                            <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>

                            <div class="font-medium text-gray-700 dark:text-gray-200 flex mx-3 whitespace-nowrap">
                                <span class="text-sm">or</span>
                            </div>
                            <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
                        </div>
                        <UForm :schema="LoginValidationSchema" :state="LoginState" class="space-y-6" @submit="LOGIN">
                            <div class="">
                                <UFormGroup name="email" v-slot="{ error }" label="Email" :eager-validation="true">
                                    <UInput v-model="LoginState.email" type="email" placeholder="abebe@gmail.com"
                                        :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                                </UFormGroup>
                            </div>
                            <div class="">
                                <div class="">
                                    <div class="flex content-center items-center justify-between text-sm">
                                        <label for="aUkbh3TvCg:2"
                                            class="block font-medium text-gray-700 dark:text-gray-200">Password</label><span
                                            class="text-gray-500 dark:text-gray-400"><a href="/"
                                                class="text-primary font-medium">Forgot password?</a></span>
                                    </div>
                                </div>
                                <UFormGroup name="password" v-slot="{ error }" :eager-validation="true">
                                    <UInput v-model="LoginState.password" type="password" placeholder="***********"
                                        :trailing-icon="error ? 'i-heroicons-exclamation-triangle-20-solid' : undefined" />
                                </UFormGroup>
                            </div>
                            <UButton type="submit" :loading="loading"
                                class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-full text-sm gap-x-2 px-3 py-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 w-full flex justify-center items-center">
                                <span>Login</span>
                            </UButton>
                        </UForm>
                    </div>
                    <p class="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center">
                        By signing in, you agree to our
                        <a href="/" class="text-primary font-medium">Terms of Service</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
