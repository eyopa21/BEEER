export default function() {
    return useState('layout', () => {
        return {
   
            showSidebar: false,
            showCart: false,
            showSearch: false,
            showFilters: false,
            showModal: false, 
            isFiltering: false,
            showAlert: {
                message: '',
                error: true,
                warning: false
            },
            reportLoading: false

        }
    })
}