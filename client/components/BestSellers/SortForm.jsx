import { fieldName, sortDir } from "@/redux/features/filterSlice";
import { Box, Typography } from "@mui/material";
import { Noto_Sans_Thai_Looped } from "next/font/google";
import React from "react";
import { useDispatch } from "react-redux";

const nova_thai = Noto_Sans_Thai_Looped({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-inter",
});
const SortForm = () => {
  const sortOptions = [
    { name: "Popular", field: "name", dir: "asc" },
    { name: "Price: Low to High", field: "price", dir: "asc" },
    { name: "Price: High to Low", field: "price", dir: "desc" },
    { name: "Alphabetically: A to Z", field: "name", dir: "asc" },
    { name: "Alphabetically: Z to A", field: "name", dir: "desc" },
  ];

  const dispatch = useDispatch();

  return (
    <Box className={`w-[90%] px-4`}>
      <Box className={`flex flex-col gap-5`}>
        {sortOptions?.map((data, i) => (
          <Typography
            key={i}
            variant="h1"
            className={`${nova_thai.className} cursor-pointer`}
            style={{ fontSize: "16px", lineHeight: "22px" }}
            onClick={() => {
              dispatch(fieldName(data.field));
              dispatch(sortDir(data.dir));
            }}
          >
            {data.name}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default SortForm;
