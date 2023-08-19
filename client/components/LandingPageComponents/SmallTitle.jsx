import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import headingLine from "../../assets/svg/headingLine.svg";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

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
