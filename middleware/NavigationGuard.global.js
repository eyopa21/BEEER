export default defineNuxtRouteMiddleware((to, from) => {
   
   const UID = useCookie('UID')

    if ((to.name === 'auth-user-login'|| to.name === 'auth-user-signup' || to.name === 'auth-user-verify') && UID.value) {
        return navigateTo('/');
    }

     if ((to.name === 'account-blogs-edit-id'|| to.name === 'account-blogs' || to.name === 'account-blogs-new') && !UID.value) {
        return navigateTo('/auth/user/login');
    }
    
     if ((to.name === 'account-certificates'|| to.name === 'account-detail-id' || to.name === 'account-education'  || to.name === 'account-projects' ||  to.name === 'account-settings') && !UID.value) {
        return navigateTo('/auth/user/login');
    }
    
    
    
});