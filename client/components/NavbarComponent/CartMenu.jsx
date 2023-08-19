import React from "react";
import { Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { nova, nova_thai } from "@/utilities/font";
import { useCart } from "react-use-cart";

const CartMenu = ({ anchorEl, isCartOpen, handleCloseCart, products }) => {
  const { isEmpty, items, cartTotal, removeItem } = useCart();
  let content;

  if (isEmpty) {
    content = <h1>Cart is empty!!</h1>;
  }
  if (items) {
    content = items.map((item) => (
      <MenuItem key={item.id} onClick={handleCloseCart}>
        <div className="flex items-center">
          <Image
            src={item.img}
            alt={item.name}
            width={40}
            height={40}
            className="w-[40px] h-[40px] object-cover rounded-md"
          />
          <span className={`text-sm font-semibold ${nova_thai.className}`}>
            {item.name}
          </span>
          <span
            className={`text-[15px] font-semibold ${nova_thai.className} text-green-500 m-1`}
          >
            ${item.price}
          </span>
        </div>
      </MenuItem>
    ));
  }
  return (
    <Menu
      id="cart-menu"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      // transformOrigin={{
      //   vertical: "left",
      //   horizontal: "right",
      // }}
      open={isCartOpen}
      onClose={handleCloseCart}
    >
      {content}
      <MenuItem
        onClick={handleCloseCart}
        className="bg-black btn text-white hover:bg-gray-800 px-2"
      >
        <Link href="/Cart" className="text-right">
          <span className={`text-sm font-semibold ${nova.className} `}>
            View Cart
          </span>
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default CartMenu;
