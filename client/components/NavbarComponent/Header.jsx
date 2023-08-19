import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  OutlinedInput,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CartIcon from "../../assets/svg/Cart.svg";
import ProfileIcon from "../../assets/svg/ProfileIcon.svg";
import { mainTitle, smallTypo } from "@/styles/typoStyles";
import { nova, nova_thai } from "@/utilities/font";
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
import img from "../../assets/png/pngwing 7.png";
import { signOut, useSession } from "next-auth/react";

const profile = [
  {
    id: 1,
    name: "Personal Information",
    component: "PersonalInformation",
  },
  {
    id: 2,
    name: "My Orders",
    component: "MyOrders",
  },
  {
    id: 3,
    name: "Manage Address",
    component: "ManageAddress",
  },
  {
    id: 4,
    name: "Change Password",
    component: "ChangePassword",
  },
  {
    id: 5,
    name: "Sign Out",
    component: "auth/login",
  },
];
const product = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    image: img,
  },
  {
    id: 2,
    name: "Product 2",
    price: 200,
    image: img,
  },
];

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { data: session } = useSession();

  React.useEffect(() => {
    if (session == null) return;
    console.log("session.jwt", session.jwt);
  }, [session]);
  const state = useSelector((state) => state?.user?.userDetails?.token);
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileEl, setprofileEl] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [searchInput, setSearchInput] = useState("");

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

  const [
    getProducts,
    { data: { products: { data: productsData } = {} } = {}, loading, error },
  ] = useLazyQuery(GET_PRODUCT_BY_NAME);

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
      <Box
        className={`absolute flex gap-8 flex-col w-full  bg-[#f1f1f1] z-10 shadow-md shadow-black py-[15px] px-[15px] rounded-b-[10px] max-h-[300px] overflow-y-scroll`}
      >
        {!productsData ? (
          <Typography
            variant="h4"
            className={` ${nova_thai.className} text-black text-[15px] cursor-pointer`}
          >
            Searching...
          </Typography>
        ) : productsData.length !== 0 ? (
          productsData.map((item, i) => (
            <Box
              key={i}
              className={`cursor-pointer flex gap-5 items-center border-b-[#c7c6c6] border-b-[2px] pb-3`}
              onClick={() => {
                router.push(`/product/${item?.id}`);
                setSearchInput("");
              }}
            >
              <Image
                src={item?.attributes?.thumbnail?.data?.attributes?.url}
                width={38}
                height={38}
              />
              <Typography
                variant="h4"
                className={` ${nova_thai.className} text-black text-[15px]`}
              >
                {item?.attributes?.name}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography
            variant="h4"
            className={` ${nova_thai.className} text-black text-[15px] cursor-pointer`}
          >
            No Products Found
          </Typography>
        )}
      </Box>
    );
  }

  React.useEffect(() => {
    debouncedHandleQuery();
    return () => clearTimeout(debouncedHandleQuery);
  }, [searchInput]);

  const router = useRouter();
  const handleProfileOpen = () => {
    setprofileEl(event.currentTarget);
    setIsProfileOpen(true);
  };
  const handleCloseProfile = () => {
    setprofileEl(null);
    setIsProfileOpen(false);
  };
  const handleSearch = () => {
    if (searchInput === "") {
      console.log("No input"); // Add Toast in future
    } else {
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
  return (
    <AppBar position="fixed" className={`bg-black shadow-none`}>
      {!isMobile && <Details />}
      <Toolbar className=" flex flex-col gap-4 py-3 md:py-5 pl-3 md:pl-10 pr-3 md:pr-20 bg-black">
        <Box className="flex w-full items-center ">
          <Box className="w-3/4 md:w-1/2">
            <Link href="/">
              <Typography
                variant="h1"
                className={`text-white ${nova.className} `}
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
            <button onClick={handleOpenCart}>
              <Image
                src={CartIcon}
                alt="cart"
                width={isMobile ? 30 : 45}
                height={isMobile ? 30 : 45}
                className="-mt-2"
              />
            </button>
            {!session ? (
              <Link href="/auth/login">
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
