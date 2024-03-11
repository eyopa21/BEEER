<script setup>
const { onLogout } = useApollo()
const UID = useCookie('UID')
const router = useRouter();
const currentUser = useCurrentUser();
const items = [
    [{

        slot: 'account',
        disabled: true
    }],
    [{
        label: 'Profile',
        icon: 'i-heroicons-user-circle',
        click: () => {
            router.push(`/account/profile-${UID.value}`)
        }
    }], [{
        label: 'Dashboard',
        icon: 'i-heroicons-adjustments-horizontal-20-solid',
        click: () => {
            router.push(`/account/settings`)
        }

    }], [{
        label: 'Contribute',
        icon: 'i-heroicons-arrow-right-circle-20-solid'
    }], [{
        label: 'Logout',
        icon: 'i-heroicons-arrow-left-start-on-rectangle-16-solid',
        click: async () => {
            await onLogout();
            UID.value = null;
            router.push('/auth/user/login')
        }
    }]
]
</script>

<template>
    <UDropdown v-if="currentUser.currentUser" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }">
        <div>
            <UAvatar v-if="currentUser.currentUser?.profile_detail[0]?.profile_picture"
                :src="currentUser.currentUser?.profile_detail[0]?.profile_picture || '/placeholder.jpg'"
                class="block bg-primary" />
            <Icon v-else name="i-heroicons-user-circle" class="size-6" />
        </div>


        <template #account="{ item }">
            <div class="text-left">
                <p>
                    Signed in as

                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ currentUser.currentUser.email }}
                </p>
            </div>
        </template>

        <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>

            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </template>
    </UDropdown>
</template>
