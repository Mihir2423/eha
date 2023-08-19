import ManageAddressPage from "@/components/userDetailsComponent/ManageAddressPage";
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
      router.push("/auth/login");
    }
  }, []);
  return (
    <Box className="mt-20">
      <ManageAddressPage />
    </Box>
  );
};

export default Profile;
