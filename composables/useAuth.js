import {get_current_user_query} from "../queries/users/get.gql";
export const useAuth = () => {
  const router = useRouter();
  const { onLogin, onLogout, getToken } = useApollo();
  const layout = useLayout();
  const currentUser = useCurrentUser();
  const UID = useCookie("UID");

  const myAuth = async () => {
    try {
      const token = await getToken();
      const claims = token ? await JSON.parse(atob(token?.split(".")[1])) : "";
      currentUser.value.id = claims?.uid;
      currentUser.value.company_id = claims?.company_id;
      const { data, error } = await useLazyAsyncQuery(get_current_user_query, {
        id: currentUser.value.id,
      });
      if (error.value) {
        console.log(error.value);
        currentUser.value.id = null;
        currentUser.value.currentUser = null;
        UID.value = null;
        throw new Error("User not logged in");
      } else {
        console.log("wowowow", data.value);
        currentUser.value.id = data.value.authors_by_pk.id;
        currentUser.value.currentUser = data.value.authors_by_pk;
        currentUser.value.isVerified = data.value.authors_by_pk.is_verified;
        UID.value = data.value?.authors_by_pk?.id;
        if (!currentUser.value.isVerified) {
          router.push("/auth/user/verify");
        }
        if (!currentUser.value.currentUser?.profile_detail[0]?.phone_number) {
          layout.value.showAlert = {
            error: false,
            warning: true,
            message: "Please, complete your profile and Earn your points",
          };
        }

        return "User logged in";
      }
    } catch (error) {
      console.log("erororor", error);
      UID.value = null;
      throw new Error("User not logged in");
    }
  };

  // const { clearAllCookies } = useHelpers();
  async function logout() {
    console.log("logoutting");
    isPending.value = true;
    console.log("isPending", isPending.value);
    try {
      onLogout();
      currentUser.value.currentUser = null;
      currentUser.value.id = null;
      currentUser.value.isVerified = null;
      currentUser.value.cart = null;
      clearAllCookies();
      isPending.value = false;
      router.push("/auth/login");
    } catch (err) {
      isPending.value = false;
      console.log("err");
      throw new Error("cannot logout");
    }
  }

  return {
    myAuth,
    logout,
  };
};
