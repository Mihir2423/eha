import { Box, Typography } from "@mui/material";
import React from "react";
import { Noto_Sans_Thai_Looped } from "next/font/google";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});

import styles from "../dealStyle.module.css";
import UIButton from "@/components/ui/UIButton";

const ServicesCard = () => {
  return (
    <Box className={`${styles.cardBgColor} ${nova_thai.className}`}>
      <Box>
        <Typography variant="h3" className={styles.serviceCardTitle}>
          Looking For
        </Typography>
        <Typography variant="h3" className={styles.serviceCardTitle}>
          Other Services ?
        </Typography>
      </Box>
      <Box className={styles.btnsBox}>
        <UIButton title={"Government"} />
        <UIButton title={"Commercial"} />
      </Box>
    </Box>
  );
};

export default ServicesCard;
