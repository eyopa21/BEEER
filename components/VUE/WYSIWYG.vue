<template>
    <div class="w-full">

        <MdEditor v-model="text" @input="emit('change', text); console.log(text)" :theme="isDark ? 'dark' : 'light'"
            language="en-US" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
const emit = defineEmits(['change'])
const props = defineProps(['data'])
let propData = ref(computed(() => {
    return props.data ? props.data : '# Welcome to my blog'
}))
const text = ref(propData.value);
</script>