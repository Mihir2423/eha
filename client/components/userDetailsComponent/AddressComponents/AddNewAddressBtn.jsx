import { Box, Typography } from "@mui/material";
import React from "react";
import addPlusIcon from "../../../assets/svg/addPlusIcon.svg";
import { nova_thai_bold } from "@/utilities/font";
import Image from "next/image";
const AddNewAddressBtn = ({ setAdd }) => {
  return (
    <Box
      className={`flex flex-col  rounded-[8px] text-center py-8 px-3 `}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
      onClick={() => setAdd(true)}
    >
      <Box className={`flex gap-5 py-2 px-8`}>
        <Image src={addPlusIcon} alt="addPlusIcon" />
        <Typography
          variant="h4"
          className={`${nova_thai_bold.className} text-[18px] line-height-[28px] text-[#009A4C]`}
        >
          Add New Address
        </Typography>
      </Box>
    </Box>
  );
};

export default AddNewAddressBtn;
