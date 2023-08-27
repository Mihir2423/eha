import React from "react";

import { Box, InputAdornment, Snackbar, TextField, Typography,Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import starIcon from "../../assets/svg/star.svg";

import Image from "next/image";
import { checkPincode } from "../../utilities/pincode";
import localFont from 'next/font/local';


const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})
const nova_thai_600 = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-SemiBold.ttf',
  display: 'swap',
})
const AboutProduct = ({ data }) => {
  const [pin, setPin] = React.useState("208011");
  const  pincodeCheck = async() => {
    console.log(pin.length);
    const response = await checkPincode(pin);
    if(response){
      alert("Delivery available");
    }else{
      alert("Delivery not available");
    }
  };

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
              onChange={(e) => setPin(e.target.value)}
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
                  <InputAdornment  position="start" onClick={pincodeCheck} className="mb-2 " >
                    <Typography
                      variant="span"
                      className={` text-[#EA1D25] border-2 border-red-500 px-2 rounded hover:bg-red-100 transition-all duration-300 ease-in-out cursor-pointer ${nova_thai_600}`}
                      style={{ fontSize: "15px", lineHeight: "32px" }}
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
