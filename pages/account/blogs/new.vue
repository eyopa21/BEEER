<script setup>
import { BlogValidationSchema } from '../../../zod/BlogSchema'
import { InsertBlogs_query } from '../../../queries/blogs/insert.gql'
import { upload_image_query } from '../../../queries/others.gql'
const { mutate: AddBlog, onDone: onAddDone, onError: onAddError, loading: addLoading } = useMutation(InsertBlogs_query)
const { mutate: UploadImage, onDone: onUploadDone, onError: onUploadError, loading: uploadLoading } = useMutation(upload_image_query)

const UID = useCookie('UID')
const layout = useLayout();
const State = ref({
    image: '',
    title: '',
    subtitle: '',
    description: '',
    category: '',
    tags: []
})

const POST = () => {
    if (State.value.image) {
        UploadImage({ base64: State.value.image?.base64?.split(",")[1] })
        onUploadDone(res => [
            AddBlog({ author_id: UID.value, image: res.data.UploadImage?.url, title: State.value.title, subtitle: State.value.subtitle, description: State.value.description, category: State.value.category, tags: State.value.tags })
        ])
        onUploadError(err => {
            layout.value.showAlert = { error: true, message: err.message }
        })
        onAddDone(res => {
            State.value = {}
        })
        onAddError(err => {
            layout.value.showAlert = { error: true, message: err.message }
        })
    } else {
        layout.value.showAlert = { error: true, message: 'Please, select image first' }
    }
}

</script>


<template>
    <div class="p-4 md:p-8 md:mb-64 pb-64">

        <div class="w-full h-screen  bg-white dark:bg-black rounded-lg">
            <div class="p-4 text-zinc-700 text-xl font-medium  leading-loose">
                Blog post form</div>
            <div class="md:pl-16 w-full">
                <VUEImage @onbase64="(n) => State.image = n" />
            </div>
            <UForm :schema="BlogValidationSchema" :state="State" class="md:px-16" @submit="POST">
                <div class="grid grid-cols-1 md:grid-cols-2 md:p-8 pb-8  md:gap-4">
                    <div class="flex flex-col pl-4 pt-4 w-full pr-2 space-y-4 ">
                        <UFormGroup name="title" :eager-validation="true">
                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="title"
                                    class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Title
                                </label>
                                <UInput v-model="State.title" size="xl" id="title" placeholder="Blog title" type="text"
                                    class="  w-full " />

                            </div>
                        </UFormGroup>
                        <UFormGroup name="subtitle" :eager-validation="true">

                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="subtitle"
                                    class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Subtitle
                                </label>
                                <UInput v-model="State.subtitle" size="xl" id="subtitle" placeholder="Blog subtitle"
                                    type="text" class=" w-full " />

                            </div>
                        </UFormGroup>



                    </div>
                    <div class="flex flex-col pl-4 pt-4 w-full pr-2 space-y-4">
                        <UFormGroup name="category" :eager-validation="true">
                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="category"
                                    class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Category
                                </label>
                                <UInput v-model="State.category" size="xl" id="category" placeholder="Blog category"
                                    type="text" class=" w-full " />

                            </div>
                        </UFormGroup>
                        <UFormGroup name="tags" :eager-validation="true">
                            <div class="flex flex-row justify-start items-center gap-14 ">
                                <label for="tags" class="w-1/3 text-gray-600 text-base font-medium  leading-normal">Tags
                                </label>
                                <USelectMenu v-model="State.tags" name="category" :multiple="true"
                                    selected-icon="i-heroicons-hand-thumb-up-solid" class="w-full"
                                    placeholder="Select tags" :options="['Structural', 'Finishing']" />
                            </div>
                        </UFormGroup>


                    </div>
                    <div class="col-span-full mt-4 -mx-2">
                        <UFormGroup name="description" :eager-validation="true">
                            <label class="w-1/3 text-lg p-2 text-blue-500 underline  font-medium  leading-normal">
                                The Blog
                            </label>
                            <VUEWYSIWYG @change="(n) => State.description = n" />
                        </UFormGroup>
                    </div>
                </div>
                <div class="flex justify-end gap-4 pb-8">
                    <UButton to="/account/blogs" size="lg" color="primary" variant="outline">Discard</UButton>
                    <UButton :loading="uploadLoading || addLoading" type="submit" size="lg" color="primary">Post Blog
                    </UButton>
                </div>
            </UForm>
        </div>

    </div>
</template>