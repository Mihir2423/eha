import ChangePasswordPage from "@/components/userDetailsComponent/ChangePasswordPage";
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
      <ChangePasswordPage />
    </Box>
  );
};

export default Profile;
