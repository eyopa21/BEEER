//import filter_query from "../queries/filters/filter.gql";

export function useFiltering() {
  const route = useRoute();
  const router = useRouter();
  const layout = useLayout();
  const mainData = useData();
  const filterQuery = useState("filter", () => "");

  filterQuery.value = route.query.filter;

  function getFilter(filterName) {
    return (
      filterQuery.value
        ?.split(`${filterName}[`)[1]
        ?.split("]")[0]
        ?.split(",") || []
    );
  }

  function setFilter(filterName, filterValue) {
    let newFilterQuery = filterQuery.value || "";
    console.log("filter query", filterQuery.value);
    if (!filterQuery.value || !filterQuery.value.includes(filterName)) {
      newFilterQuery = filterQuery.value
        ? `${filterQuery.value},${filterName}[${filterValue}]`
        : `${filterName}[${filterValue}]`;
    } else {
      newFilterQuery = !filterValue.length
        ? filterQuery.value.replace(
            `${filterName}[${getFilter(filterName)}]`,
            ""
          )
        : filterQuery.value.replace(
            `${filterName}[${getFilter(filterName)}]`,
            `${filterName}[${filterValue}]`
          );
    }

    newFilterQuery = newFilterQuery.replace(/^,/, "").replace(/,$/, "");
    newFilterQuery = newFilterQuery.replace(/,{2,}/g, ",");

    filterQuery.value = newFilterQuery;

    router.push({ query: { ...route.query, filter: newFilterQuery } });

    const path = route.path.includes("/page/")
      ? route.path.split("/page/")[0]
      : route.path;

    if (!newFilterQuery) {
      router.push({ path, query: { ...route.query, filter: undefined } });
    } else {
      router.push({ path, query: { ...route.query, filter: newFilterQuery } });
    }

    setTimeout(() => {
      // updateProductList();
    }, 50);
  }

  async function resetFilter() {
    const { scrollToTop } = useHelpers();
    filterQuery.value = "";

    setTimeout(async () => {
      await applyFilter([], []);
      router.push({ query: { ...route.query, filter: undefined } });
      
      scrollToTop();
    }, 50);
  }

  const isFiltersActive = computed(() => !!filterQuery.value);

  async function applyFilter(categoryValue, priceValue) {

    console.log("cate", categoryValue)
    console.log("price", priceValue)
    try {
      // if (!categoryValue?.length) setFilter("category", []);
      //  if (!priceValue?.length) setFilter("price", []);
      if (categoryValue?.length) setFilter("category", categoryValue);
      if (priceValue?.length) setFilter("tags", priceValue);
      /*

      const { onResult, onError, loading } = useQuery(filter_query, {
        categories: categoryValue,
        max: priceValue[1],
        min: priceValue[0],
      });
      layout.value.isFiltering = loading;
      onResult((res) => {
        mainData.value.products = res.data?.products;
      });
      onError((err) => {
        console.log("erororor", err);
      });
      */
    } catch (error) {
      console.log("filter by category error", error);
    }
  }

  return { applyFilter, getFilter, setFilter, resetFilter, isFiltersActive };
}
