// useProductsData.js
import { useQuery } from "@apollo/client";
import {
  GET_NEW_ARRIVALS,
  GET_PRODUCT_BY_CATEGORY,
} from "@/gqloperation/queries";
import { Box } from "@mui/material";
import SingleProduct from "@/components/LandingPageComponents/SingleProduct";
import styles from "./prod.module.css";

const useProductsData = (id, sortField, dir) => {
  // variables
  let content;
  let title;

  // All
  if (Number(id) === 1) {
    const { data, loading, error } = useQuery(GET_PRODUCT_BY_CATEGORY, {
      variables: {
        categoryId: 1,
        sortField: sortField,
      },
    });

    if (loading) content = <h1>Loading...</h1>;
    else if (error) content = <h1>Something went wrong</h1>;
    else {
      title = "BEST SELLING LAPTOPS";
      let productsData = data?.category?.data?.attributes?.products?.data || [];
      if (dir === "desc") {
        productsData = [...productsData]?.reverse();
      }
      content = productsData?.map((data, i) => (
        <Box key={i} className={styles.bestSeller}>
          <SingleProduct item={data} />
        </Box>
      ));
    }
  }

  // New Arrivals
  else if (Number(id) === 2) {
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    oneMonthAgo.setHours(0, 0, 0, 0);
    const formattedDate = oneMonthAgo.toISOString();
    const { data, loading, error } = useQuery(GET_NEW_ARRIVALS, {
      variables: {
        filters: {
          updatedAt: {
            gte: formattedDate,
          },
        },
        sortField: sortField,
      },
    });
    if (loading) content = <h1>Loading...</h1>;
    else if (error) content = <h1>Something went wrong</h1>;
    else {
      title = "NEW ARRIVALS";
      let productsData = data.products.data;
      if (dir === "desc") {
        productsData = [...productsData]?.reverse();
      }
      content = productsData?.map((data, i) => (
        <Box key={i} className={styles.bestSeller}>
          <SingleProduct item={data} />
        </Box>
      ));
    }
  }
  // In case of incorrect id
  else {
    content = <h1>No Products found</h1>;
  }

  return { content, title };
};

export default useProductsData;
