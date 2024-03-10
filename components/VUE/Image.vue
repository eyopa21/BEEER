<script setup>
import { useImage, useBase64, useObjectUrl } from '@vueuse/core'
import { shallowRef } from 'vue'
const emit = defineEmits(['onbase64'])
const props = defineProps(['image'])
const file = shallowRef()
const url = useObjectUrl(file)
const base64 = ref('');
const ROLE = useCookie('ROLE');
function onFileChange(event) {
    file.value = event.target.files[0]
    base64.value = useBase64(file.value)
    emit('onbase64', base64.value)
    console.log(base64.value)
}
const { isLoading } = useImage({ src: url })
</script>

<template>
    <div class="flex flex-col justify-start items-center mt-4">
        <div class=" w-full h-20 relative">
            <div class="w-20 h-20  bg-white rounded-3xl border border-neutral-400">
                <div>

                    <span v-if="isLoading">Loading</span>
                    <img v-else :src="url ? url : props.image" class="w-20 h-20 p-1 rounded-3xl">
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center w-full mt-2">
            <label
                class="flex flex-col w-full h-32 rounded border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                <div class="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12">
                        </path>
                    </svg>
                    <p class="py-1 text-sm text-gray-600">Upload a file or drag and drop</p>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
                <input ref="input" type="file" @change="onFileChange" class="hidden">
            </label>
        </div>
    </div>
</template>