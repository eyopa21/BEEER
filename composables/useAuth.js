import query from '../queries/get/get-current-user.gql'
export const useAuth = () => {
  const router = useRouter()
  const { onLogin, onLogout, getToken } = useApollo()


 

  const currentUser = useCurrentUser();
  const UID = useCookie('UID')
    
  const myAuth = async () => {
      try {
        const token = await getToken();
        const claims = token ? await JSON.parse(atob(token?.split(".")[1])) :'';
          currentUser.value.id = claims?.uid
          currentUser.value.company_id = claims?.company_id
        const { data, error } = await useLazyAsyncQuery(query, { id: currentUser.value.id })
        if (error.value) {
          currentUser.value.id = null
          currentUser.value.currentUser = null
          ROLE.value = null
          throw new Error('User not logged in')
        } else {
          console.log("wowowow", data.value)
          currentUser.value.id = data.value.users_by_pk.id
          currentUser.value.currentUser = data.value.users_by_pk;
          currentUser.value.isVerified = data.value.users_by_pk.isVerified
          if (!currentUser.value.isVerified) {
            console.log("not verified")
            router.push('/auth/verify')
          }
          ROLE.value = data.value?.users_by_pk?.role;
          return 'User logged in';
        }
      } catch (error) {
        console.log("erororor", error)
        ROLE.value = null
        throw new Error('User not logged in')
      }
  }
  

 // const { clearAllCookies } = useHelpers();
  async function logout() {

    console.log("logoutting")
    isPending.value = true
    console.log("isPending", isPending.value)
    try {
       onLogout();
      currentUser.value.currentUser = null 
      currentUser.value.id = null
      currentUser.value.isVerified = null
       currentUser.value.cart = null
      clearAllCookies()
      isPending.value = false
      router.push('/auth/login')
    } catch (err) {
      isPending.value = false
      console.log("err")
      throw new Error('cannot logout')
    }
  }

    return {
     
 
    
      
      myAuth,
      logout
    };
  };