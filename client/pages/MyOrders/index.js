import MyOrdersPage from "@/components/userDetailsComponent/MyOrdersPage";
import { getToken } from "@/redux/features/userSlice";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter()

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (typeof token === "string") {
      dispatch(getToken(token));
    } else {
      router.push("/");
    }
  }, []);
  return (
    <Box className="mt-20">
      <MyOrdersPage />
    </Box>
  );
};

export default Profile;
