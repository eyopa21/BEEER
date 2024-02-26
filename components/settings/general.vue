<template>
    <div class="bg-white dark:bg-gray-900 shadow-lg shadow-gray-200 dark:shadow-gray-700 rounded-2xl p-4 mb-6">
        <h3 class="mb-4 text-xl font-bold dark:text-gray-100">General information</h3>
        <form>
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">

                    <VUEInput label="First Name" type="text" name="first_name" placeholder="Your name ..."
                        rule="required" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <VUEInput label="Last Name" type="text" name="last_name" placeholder="Your father's name ..." />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <VUEInput label="Age" type="number" name="Age" placeholder="Your age ..." rule="number:10,100" />
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <VUEInput label="Profession" type="text" name="profession" placeholder="Your Profession ..."
                        rule="required" />
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <VUEInput label="Location" type="text" name="location" placeholder="Your location ..."
                        rule="required" />
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <VUEInput label="Phone Numbeer" type="text" name="phone_number" placeholder="Your phone number ..." />
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <VUEInput label="Email" type="email" name="email" placeholder="Your email ..." rule="email" />
                </div>
                <div class="col-span-6 sm:col-span-3">

                    <VUEInput label="Current workplace" type="text" name="current_workplace"
                        placeholder="Your cureent workplace ..." rule="required" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <VUEInput label="Role" type="text" name="role" placeholder="Your Role ..." rule="required" />

                </div>
                <div class="col-span-12 sm:col-span-6">
                    <VUEInput label="Description" :textarea="true" type="text" name="description"
                        placeholder="Some description" rule="required" />
                </div>

                <div class="col-span-6 sm:col-full">


                </div>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>