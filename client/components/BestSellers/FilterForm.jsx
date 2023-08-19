import React from "react";
import { Box, Slider, Typography } from "@mui/material";

import { Noto_Sans_Thai_Looped } from "next/font/google";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

function valuetext(value) {
  return `${value}`;
}

const FilterForm = () => {
  const [value, setValue] = React.useState([99, 150000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Box className={`border-b-[#C8C8C8] border-b-[2px] px-5`}>
        <Typography
          variant="h4"
          className={`${nova_thai.className} text-[15px] line-height-[24px] text-left ml-6`}
        >
          Price Range
        </Typography>
        <Box>
          <Box className={`flex justify-between mt-5`}>
            <Typography
              variant="span"
              className={` ${nova_thai.className} text-[14px] line-height-[19px] text-[#5F5F5F]`}
            >
              ₹99
            </Typography>
            <Typography
              variant="span"
              className={`${nova_thai.className} text-[14px] line-height-[19px] text-[#5F5F5F]`}
            >
              ₹1,50,000
            </Typography>
          </Box>
          <Slider
            sx={{
              color: "#EA1D25",
              height: "2px",
              ".MuiSlider-rail": {
                backgroundColor: "#EA1D25",
              },
            }}
            getAriaLabel={() => "Temperature range"}
            min={99}
            max={150000}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FilterForm;
