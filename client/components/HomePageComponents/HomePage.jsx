import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import React from "react";

const BannerSection = dynamic(() => import("./BannerSection"), {
  loading: () => <p>Loading...</p>,
  ssr: true
});
const DealsForYou = dynamic(
  () => import("../LandingPageComponents/DealsForYou/DealsForYou"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const BestSeller = dynamic(
  () => import("../LandingPageComponents/BestSeller"),
  {
    loading: () => <p>Loading...</p>,
  }
);
const NewArrival = dynamic(
  () => import("../LandingPageComponents/NewArrival"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const HomePage = ({ posts, laptops }) => {
  return (
    <Box className="p-0">
      <BannerSection />
      <DealsForYou posts={posts} />
      <BestSeller posts={laptops} />
      <NewArrival posts={posts} />
      <BestSeller posts={laptops} />
    </Box>
  );
};

export default HomePage;
