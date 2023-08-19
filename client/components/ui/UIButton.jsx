import { Typography, useMediaQuery } from "@mui/material";
import React from "react";

import { Noto_Sans_Thai_Looped } from "next/font/google";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const UIButton = ({ title }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Typography
      variant="p"
      className={`text-white normal-case text-base ${nova_thai.className} text-[11px]  md:text-[14px]`}
      style={{
        border: " 2px solid rgba(217, 217, 217, 1)",
        padding: isMobile ? "3px 13px" : "8px 25px",
        textAlign: "center",
        borderRadius: isMobile ? "5px" : "13px"
      }}
    >
      {title}
    </Typography>
  );
};

export default UIButton;
