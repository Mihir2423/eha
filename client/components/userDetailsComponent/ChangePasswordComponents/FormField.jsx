import { nova_thai } from "@/utilities/font";
import { Box, Typography } from "@mui/material";
import React from "react";

const FormField = ({ title }) => {
  return (
    <Box className={`px-[22px]`}>
      <Box className={`py-4 px-5 mt-10`}>
        <Box className={`text-left border-b-2 border-b-[#888888] w-[33%]`}>
          <Typography
            variant="h4"
            className={`${nova_thai.className} text-[12px] line-height-[19px] text-[#888888] `}
          >
            {title}
          </Typography>
          <Box className={`mt-4 relative`}>
            <input text="text" className={`outline-none`} />
            <Typography
              variant="p"
              className={` ${nova_thai.className} text-[12px] line-height-[19px] text-[#009A4C] absolute right-[10px] cursor-pointer`}
            >
              Show
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormField;
