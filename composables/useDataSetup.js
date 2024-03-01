

import get_social_links_query from "../queries/get.gql";
export const useGetData = () => {
  const router = useRouter();
  

  const mainData = useData();

  async function setSocialLinks() {
    const { data, error } = await useAsyncQuery(get_social_links_query);
    if (error.value) {
      console.log("eroror", error.value)
      return error.value;
    } else {
      console.log("hello", data.value.social_medias_enum)
      mainData.value.SOCIALLINKS = data.value.social_medias_enum
    }
  }

  
  return {
   setSocialLinks
  };
};
