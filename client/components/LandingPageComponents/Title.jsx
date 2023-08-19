import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import headingLine from "../../assets/svg/headingLine.svg";

import styles from "./dealStyle.module.css";
import { useRouter } from "next/router";

import { Noto_Sans_Thai_Looped } from "next/font/google";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

const Title = ({ title, viewAll, id }) => {
  const router = useRouter();
  return (
    <Box className={`hidden md:flex justify-between items-center px-10 py-8`}>
      <Box className={`flex justify-start items-center gap-5`}>
        <Image alt="line" src={headingLine} />
        <Typography variant="h4" className={styles.sectionTitle}>
          {title}
        </Typography>
      </Box>
      {viewAll && (
        <Box
          className={` bg-black py-2 px-3 flex justify-center items-center cursor-pointer`}
          style={{ borderRadius: "5px" }}
          onClick={() => router.push(`/category?id=${id}`)}
        >
          <Typography
            className={`text-white normal-case text-base${nova_thai.className}`}
          >
            {"VIEW ALL"}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Title;
