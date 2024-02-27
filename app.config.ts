export default defineAppConfig({

    ui: {
        primary: 'green',
        gray: 'cool',


        table: {
            wrapper: '',
            divide: '',
            th: {
                color: 'text-red-500'
            }
        },
        selectMenu: {
            trigger: 'h-12 ',
            option: {
                base: 'my-2 py-2 px-4 hover:bg-primary-200 rounded-[2px]',
            },
            input: "placeholder-primary-400 font-base text-primary !text-md",

        },
        notifications: {
            // Show toasts at the top right of the screen
            position: 'top-0 bottom-auto',
            background: 'bg-primary dark:bg-primary',
            wrapper: 'bg-primary-200 rounded-xl mt-8'
        },
        accordion: {
            wrapper: '',
            container: 'py-2',
            item: {
                padding: 'p-6',
                color: 'text-primary font-bold'
            },
            default: {
                class: 'py-3'
            }
        },
        inputMenu: {
            trigger: 'h-12',

        },
        input: {
            wrapper: 'shadown-none border-0',
            label: {
                base: "block font-medium text-gray-700 dark:text-gray-200"
            },
            placeholder: "placeholder-primary-400 font-base !text-md"
        },
        textarea: {
            placeholder: "placeholder-primary-400 font-base p-2"
        },
        dropdown: {
            trigger: ' h-8 ',
            item: {
                padding: 'p-2',
                base: 'p-2'
            }
        },
        divider: {

            container: {
                base: 'text-primary'
            }
        },



    }
})