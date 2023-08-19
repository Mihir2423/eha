import React from "react";

import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import starIcon from "../../assets/svg/star.svg";

import { Noto_Sans_Thai_Looped } from "next/font/google";
import Image from "next/image";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const nova_thai_600 = Noto_Sans_Thai_Looped({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const AboutProduct = ({ data }) => {
  console.log(data);
  return (
    <Box className={``}>
      <Box>
        <Box className={`ml-4 `}>
          <Typography
            variant="h1"
            className={`${nova_thai.className}`}
            style={{ fontSize: "20px", lineHeight: "32px" }}
          >
            {data?.attributes?.name}
          </Typography>
        </Box>
        <Box className={` ml-4 mt-6 mb-6`}>
          <Box
            className={`flex bg-[#319F43] w-[60px] items-center justify-center rounded-[6px] gap-1 py-[3px] px-[4px] text-black`}
          >
            <Typography variant="span" className={`text-white text-[14px]`}>
              {data?.attributes?.rating}
            </Typography>
            <Image
              src={starIcon}
              alt="star"
              style={{ transform: "translateY(-1.3px)" }}
            />
          </Box>
        </Box>
        <Box className={`flex items-center gap-5 pl-4`}>
          <Typography
            variant="span"
            className={`${nova_thai.className} text-black text-[30px] line-height-[30px] `}
          >
            {`₹${data?.attributes?.price}`}
          </Typography>
          <Typography
            variant="span"
            className={`${nova_thai.className} text-[#454545] text-[20px] line-height-[32px] line-through `}
          >
            {`₹${data?.attributes?.original_price}`}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box className={`border-2 border-gray-300 py-8 px-5 mt-8`}>
          <Box className={`flex gap-10 items-center `}>
            <Typography
              variant="h3"
              className={`text-[#777777]   ${nova_thai_600}`}
              style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 600 }}
            >
              DELIVERY
            </Typography>
            <TextField
              id="standard-basic"
              placeholder="Pincode"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon style={{ color: "#EA1D25" }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      variant="span"
                      className={` text-[#EA1D25]`}
                      style={{ fontSize: "19px", lineHeight: "32px" }}
                    >
                      CHECK
                    </Typography>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box
          className={`border-l-2 border-r-2 h-[250px] border-gray-300 py-8 px-5`}
        >
          <Typography
            variant="h3"
            className={`text-[#777777] text-[20px] line-height-8  ${nova_thai_600}`}
            style={{ fontSize: "20px", lineHeight: "32px", fontWeight: 600 }}
          >
            HIGHLIGHTS
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutProduct;
