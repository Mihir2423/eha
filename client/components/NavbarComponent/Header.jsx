import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  OutlinedInput,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "../../assets/svg/Cart.svg";
import ListIcon from "../../assets/svg/listIcom.svg";
import ProfileIcon from "../../assets/svg/ProfileIcon.svg";
import { mainTitle, smallTypo } from "@/styles/typoStyles";
import { useRouter } from "next/router";

import styles from "../page.module.css";
import Image from "next/image";
import Details from "./Details";
import Categories from "./Categories";
import Link from "next/link";
import UIButton from "../ui/UIButton";
import { useLazyQuery } from "@apollo/client";
import { GET_PRODUCT_BY_NAME } from "@/gqloperation/queries";
import CartMenu from "./CartMenu";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

import { useSession } from "next-auth/react";
import localFont from "next/font/local";
import { useCart } from "react-use-cart";
import { profile, product } from "./constant";
import SearchContent from "./SearchContent";

const nova = localFont({
  src: "../../assets/fonts/NovaSlim-Regular.ttf",
  display: "swap",
});

const Header = () => {
  const router = useRouter();
  const { items } = useCart();

  const [totalItems, setTotalItems] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setprofileEl] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [ele, setEle] = React.useState(null);

  const status = useSelector((state) => state?.govCorporate?.status);

  useEffect(() => {
    setTotalItems(items.length);
  }, [items]);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { data: session } = useSession();

  React.useEffect(() => {
    if (session == null) return;
  }, [session]);

  React.useEffect(() => {
    debouncedHandleQuery();
    return () => clearTimeout(debouncedHandleQuery);
  }, [searchInput]);

  const [
    getProducts,
    { data: { products: { data: productsData } = {} } = {}, loading, error },
  ] = useLazyQuery(GET_PRODUCT_BY_NAME);

  // Function to open the cart menu
  const handleOpenCart = (event) => {
    setAnchorEl(event.currentTarget);
    setIsCartOpen(true);
  };

  // Function to close the cart menu
  const handleCloseCart = () => {
    setAnchorEl(null);
    setIsCartOpen(false);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const handleQuery = () => {
    if (searchInput !== "") {
      getProducts({ variables: { searchString: searchInput } });
    }
  };

  const debouncedHandleQuery = debounce(handleQuery, 1000);
  let content;
  if (searchInput.length !== 0) {
    content = (
      <SearchContent
        productsData={productsData}
        setSearchInput={setSearchInput}
      />
    );
  }

  const handleProfileOpen = () => {
    setprofileEl(event.currentTarget);
    setIsProfileOpen(true);
  };
  const handleCloseProfile = () => {
    setprofileEl(null);
    setIsProfileOpen(false);
  };
  const handleSearch = () => {
    if (searchInput !== "") {
      router.push(`/search?name=${searchInput}`);
      setSearchInput("");
    }
  };

  const inputStyle = {
    backgroundColor: "rgba(229, 229, 229, 1)",
    width: isMobile ? "95vw" : "370px",
    paddingLeft: "5px",
    borderRadius: "10px",
    "&::placeholder": {
      fontSize: isMobile ? "8px" : "12px",
      fontWeight: 400,
      lineHeight: "16px",
      color: "rgba(0, 0, 0, 1)",
    },
  };

  React.useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const eleItem = localStorage.getItem("ele");
      setEle(eleItem);
      console.log(ele);
    }
  }, [ele, status]);
  console.log("This below");
  console.log(ele, status);

  return (
    <AppBar position="fixed" className={`bg-black shadow-none`}>
      {!isMobile && <Details />}
      <Toolbar className=" flex flex-col gap-4 py-3 md:py-5 pl-3 md:pl-10 pr-3 md:pr-20 bg-black">
        <Box className="flex w-full items-center ">
          <Box className="w-3/4 md:w-1/2">
            <Link href="/">
              <Typography
                variant="h1"
                className={`text-white ${nova.className} text-[14px] leading-[19px]  md:text-[25px] md:leading-[32px] `}
                style={isMobile ? smallTypo : mainTitle}
              >
                EHA SHIVAM TECHNOLOGIES
              </Typography>
            </Link>
          </Box>
          <Box className="w-1/2 flex gap-3 md:gap-0 justify-end md:justify-between items-center">
            {!isMobile && (
              <Box className={`relative`}>
                <OutlinedInput
                  classes={{
                    notchedOutline: styles.notchedOutline,
                  }}
                  endAdornment={
                    <SearchIcon
                      style={{ cursor: "pointer" }}
                      onClick={handleSearch}
                    />
                  }
                  inputProps={{
                    style: { padding: "10px 15px" },
                  }}
                  placeholder="Search for a product, category or brand"
                  value={searchInput}
                  onChange={(e) => handleChange(e)}
                  sx={inputStyle}
                />
                {content}
              </Box>
            )}
            <div className="flex items-center justify-between gap-4 md:gap-10">
              <button
                className="relative translate-y-[4px]"
                onClick={handleOpenCart}
              >
                <Image
                  src={
                    ele === "Government" || ele === "Commercial"
                      ? ListIcon
                      : CartIcon
                  }
                  alt="cart"
                  width={isMobile ? 30 : 45}
                  height={isMobile ? 30 : 45}
                  className="-mt-2"
                />
                <div className="absolute -top-[10px] -right-[8px]">
                  <div
                    className={`bg-[#009A4C] rounded-full h-[20px] w-[20px] flex items-center justify-center `}
                  >
                    <h1 className={`text-[10px]`}>{totalItems}</h1>
                  </div>
                </div>
              </button>
              {!session ? (
                <Link
                  className={`${
                    ele === "Government" || ele === "Commercial" ? `hidden` : ``
                  }`}
                  href="/auth/login"
                >
                  <UIButton title={"Sign in"} />
                </Link>
              ) : (
                <button onClick={handleProfileOpen}>
                  <Image
                    src={ProfileIcon}
                    alt="profile"
                    width={isMobile ? 30 : 45}
                    height={isMobile ? 30 : 45}
                    className=" text-white relative"
                  />
                </button>
              )}
            </div>

            <CartMenu
              anchorEl={anchorEl}
              isCartOpen={isCartOpen}
              handleCloseCart={handleCloseCart}
              products={product}
            />
            <ProfileMenu
              profileEl={profileEl}
              isProfileOpen={isProfileOpen}
              handleCloseProfile={handleCloseProfile}
              profile={profile}
            />
          </Box>
        </Box>
        {isMobile && (
          <Box className={`relative`}>
            <OutlinedInput
              classes={{
                notchedOutline: styles.notchedOutline,
              }}
              endAdornment={
                <SearchIcon
                  style={{ cursor: "pointer" }}
                  onClick={handleSearch}
                />
              }
              inputProps={{
                style: { padding: isMobile ? "8px 12px" : "10px 15px" },
              }}
              placeholder="Search for a product, category or brand"
              value={searchInput}
              onChange={(e) => handleChange(e)}
              sx={inputStyle}
            />
            {content}
          </Box>
        )}
      </Toolbar>
      {!isMobile && <Categories />}
      {isMobile && <Details />}
    </AppBar>
  );
};

export default Header;
