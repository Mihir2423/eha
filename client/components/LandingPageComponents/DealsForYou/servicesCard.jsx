import { Box, Typography } from "@mui/material";
import React from "react";
import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

import styles from "../dealStyle.module.css";
import UIButton from "@/components/ui/UIButton";

const ServicesCard = () => {
  return (
    <Box className={`${styles.cardBgColor} ${nova_thai.className}`}>
      <Box>
        <Typography variant="h3" className={`${nova_thai.className} ${styles.serviceCardTitle}`}>
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
