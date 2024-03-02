<script setup >
const { onLogout } = useApollo()
const UID = useCookie('UID')
const router = useRouter();
const items = [
    [{
        label: 'Profile',
        avatar: {
            src: 'https://avatars.githubusercontent.com/u/739984?v=4'
        },
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
    <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="white" label="Profile" trailing-icon="i-heroicons-chevron-down-20-solid" />
    </UDropdown>
</template>

