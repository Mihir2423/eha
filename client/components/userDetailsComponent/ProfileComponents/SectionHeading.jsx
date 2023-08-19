import { nova_thai_semi_bold } from "@/utilities/font";
import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeading = ({title}) => {
  return (
    <Box className={`px-5 pb-4 border-b-2 border-b-[#D3D3D3] mb-4`}>
      <Typography
        variant="h1"
        className={` ${nova_thai_semi_bold.className} text-[20px] text-left`}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
