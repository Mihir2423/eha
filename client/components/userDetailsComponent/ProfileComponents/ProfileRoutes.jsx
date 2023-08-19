import { Box, Typography } from "@mui/material";
import React from "react";
import { nova_thai } from "@/utilities/font";
import Link from "next/link";

const ProfileRoutes = ({ page }) => {
  const routeArray = [
    { name: "PERSONAL INFORMATION", link: "PersonalInformation" },
    { name: "MY ORDERS", link: "MyOrders" },
    { name: "MANAGE ADDRESS", link: "ManageAddress" },
    { name: "CHANGE PASSWORD", link: "ChangePassword" },
    { name: "SIGN OUT", link: "MyOrders" },
  ];
  return (
    <Box
      className={`${nova_thai.className} flex flex-col justify-center rounded-[8px] text-left overflow-hidden`}
      style={{ boxShadow: "0px 0px 12px 1px #00000040" }}
    >
      {routeArray?.map((data, i) => (
        <Link key={i} href={`${data.link}`}>
          <Typography
            
            variant="h3"
            className={
              data.name !== page
                ? `text-[black] text-[18px] line-height-[28px] bg-white p-4 px-8 cursor-pointer hover:text-[white] hover:bg-black`
                : `text-[white] text-[18px] line-height-[28px] bg-black p-4 px-8 cursor-pointer`
            }
          >
            {data.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};

export default ProfileRoutes;
