import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import whiteCart from "../../assets/svg/whiteCart.svg";
import bag from "../../assets/svg/bag.svg";
import Image from "next/image";
import { Noto_Sans_Thai_Looped } from "next/font/google";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const AddBtns = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      className={`flex items-center justify-end md:pr-24 md:mt-8 md:gap-5 w-full bg-white `}
      style={{ boxShadow: isMobile && "0px -4px 10px 0px #00000040" }}
    >
      <Box
        className={` bg-black py-3 px-7 flex w-1/2 md:w-fit justify-center items-center gap-5 md:rounded-[14px]  `}
      >
        <Typography
          className={`text-white normal-case text-base${nova_thai.className} text-[14px] md:text-[24px] leading-[38px]`}
          style={{ textTransform: isMobile ? "uppercase" : "none" }}
        >
          {"Add To Cart"}
        </Typography>
        <Image src={whiteCart} alt={"cart"} />
      </Box>
      <Box
        className={` bg-white py-3 px-7 md:border-2  md:border-black flex w-1/2 md:w-fit justify-center items-center gap-5 md:rounded-[14px]`}
      >
        <Typography
          className={`text-black normal-case text-base${nova_thai.className} text-[14px] md:text-[24px] leading-[38px]`}
          style={{ textTransform: isMobile ? "uppercase" : "none" }}
        >
          {"Buy Now"}
        </Typography>
        <Image
          src={bag}
          alt={"cart"}
          style={{
            transform: "translateY(-3px)",
          }}
        />
      </Box>
    </Box>
  );
};

export default AddBtns;
