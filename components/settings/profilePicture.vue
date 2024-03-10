<script setup>
import { upload_image_query } from '../../queries/others.gql'
import { update_profile_picture_query } from '../queries/users/update.gql'

const { mutate: UploadImage, onDone: onUploadDone, onError: onUploadError, loading: uploadLoading } = useMutation(upload_image_query)
const { mutate: UpdateProfilePicture, onDone: onUpdateDone, onError: onUpdateError, loading: updateLoading } = useMutation(update_profile_picture_query)
const currentUser = useCurrentUser();
const layout = useLayout();
const base64 = ref(null)

const UPDATE = () => {
    UploadImage({ base64: base64.value?.base64?.split(",")[1] })
    onUploadDone(res => {
        console.log("log", res)
        UpdateProfilePicture({
            id: currentUser.value.currentUser?.profile_detail[0].id,
            profile_picture: res.data.UploadImage?.url
        })
    })
    onUploadError(err => {
        console.log("upload err", err)
        layout.value.showAlert = { error: false, message: err.message }
    })
    onUpdateDone(res => {
        layout.value.showAlert = { error: false, message: 'Profile Picture updated successfull' }
    })
    onUpdateError(err => {
        console.log("update err", err)
        layout.value.showAlert = { error: true, message: err.message }
    })
}
</script>


<template>
    <div>


        <div v-if="currentUser.currentUser">
            <div
                class="bg-white flex space-x-8  dark:bg-gray-900 shadow-lg shadow-gray-200 dark:shadow-gray-700 dark:shadow-md rounded-2xl p-4 mb-6">

                <div
                    class="w-full md:w-1/2 items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">

                    <VUEImage @onbase64="(n) => base64 = n"
                        :image="currentUser.currentUser?.profile_detail[0]?.profile_picture" />
                    <div class="mt-4">


                        <VUEButton @click="UPDATE()" class="" className="cursor-pointer" name="Change Picture"
                            type="button" variation="normal" icon="profile-pic" :disabled="!base64"
                            :loading="uploadLoading || updateLoading" />
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
