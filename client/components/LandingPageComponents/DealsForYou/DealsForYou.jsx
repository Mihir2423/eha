import React from "react";
import { Grid, useMediaQuery } from "@mui/material";
import ServicesCard from "./servicesCard";
import ProductsSection from "./ProductsSection";

const DealsForYou = ({ posts }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
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
            <ServicesCard />
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
