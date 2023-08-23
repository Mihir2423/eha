import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import ServicesCard from "./servicesCard";
import ProductsSection from "./ProductsSection";
import { useSelector } from "react-redux";

const DealsForYou = ({ posts }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [ele, setEle] = React.useState(null);
  const status = useSelector((state) => state.govCorporate?.status);
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const eleItem = localStorage.getItem("ele");
      setEle(eleItem);
      console.log(ele);
    }
  }, [ele]);
  return status ? null : (
    <>
      {isMobile ? (
        <Grid container spacing={2} padding={3}>
          <Grid item xs={12} md={12} xl={12}>
            <ProductsSection posts={posts} />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2} padding={3}>
          <Grid item xs={3} md={2} xl={2}>
            {status ? null : <ServicesCard />}
          </Grid>
          <Grid item xs={9} md={10} xl={10}>
            <ProductsSection posts={posts} />
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default DealsForYou;
