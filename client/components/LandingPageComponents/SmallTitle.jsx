import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import headingLine from "../../assets/svg/headingLine.svg";

import { Noto_Sans_Thai_Looped } from "next/font/google";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const SmallTitle = ({ title, viewAll, id }) => {
  return (
    <Box className={`my-4 md:hidden`} >
      <Typography
        variant="p"
        className={`${nova_thai.className} text-[15px] text-[#494949]  `}
      >
        {title}
      </Typography>
      <Image src={headingLine} alt="line" />
    </Box>
  );
};

export default SmallTitle;
