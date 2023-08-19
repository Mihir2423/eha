import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import laptopImg from "../../assets/svg/laptopImg.svg";
import greyCart from "../../assets/svg/greyCart.svg";
import heartImg from "../../assets/svg/heartImg.svg";
import searchIcon from "../../assets/svg/searchIcon.svg";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./dealStyle.module.css";

import { useCart } from "react-use-cart";

import localFont from 'next/font/local'

const nova_thai = localFont({
  src: '../../assets/fonts/NotoSansThaiLooped-Regular.ttf',
  display: 'swap',
})

const SingleProduct = ({ item }) => {
  const { addItem } = useCart();
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const dispatch = useDispatch();
  const router = useRouter();

  const addToCart = () => {
    addItem({
      id: item?.id,
      name: item?.attributes?.name,
      price: item?.attributes?.price,
      img: item?.attributes?.thumbnail?.data?.attributes?.url,
    });
  };

  return (
    <Box className={`${styles.singleProdContainer}`}>
      <Box
        className={` flex relative justify-center gap-5 flex-col py-10 ${
          !isMobile ? styles.singleProd : `max-w-[340px]`
        }`}
      >
        {/* Details Start*/}
        <Image
          alt="product"
          src={item?.attributes?.thumbnail?.data?.attributes?.url || laptopImg}
          width={200}
          height={200}
          style={{ width: "100%" }}
          loading="lazy"
        />
        <Box className={`${styles.descContainer}`}>
          <Typography variant="p" className={styles.productDesc}>
            {item?.attributes?.name}
          </Typography>
          <Typography className={`${styles.prodPrice} ${nova_thai.className}`}>
            {`₹${item?.attributes?.price}`}
          </Typography>
        </Box>

        {/* Details End*/}

        <Box className={`${styles.cartBtns}`}>
          <Box className={`flex justify-between items-center px-2`}>
            <Box
              className={` bg-black py-2 px-[7px] md:px-3 flex justify-between items-center gap-1 md:gap-[8px]`}
              style={{
                borderRadius: "5px",
              }}
              // onClick={() => dispatch(incrementItems(item?.id))}
              onClick={addToCart}
            >
              <Typography
                className={`text-white normal-case text-base${nova_thai.className} text-[10px] md:text-[13px] `}
              >
                {"Add To Cart"}
              </Typography>
              <Image
                src={greyCart}
                alt={"cart"}
                style={{ width: isMobile ? "13px" : "30px" }}
              />
            </Box>
            <Box
              className={`rounded-full border-black border-2 p-2 overflow-hidden`}
            >
              <Image src={heartImg} alt={"cart"} />
            </Box>
          </Box>
        </Box>
        <Box className={`${styles.searchImgContainer}`}>
          <Box
            className={`bg-black rounded-full p-2 inline-block`}
            onClick={() => router.push(`/product/${item?.id}`)}
          >
            <Image alt={"search"} src={searchIcon} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
