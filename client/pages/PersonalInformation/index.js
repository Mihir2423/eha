import PersonalInformation from "@/components/userDetailsComponent/PersonalInformation";
import { setDetails } from "@/redux/features/userSlice";
import { Box } from "@mui/material";
import { useRouter } from "next/router"; // Corrected import
import React, { useEffect } from "react"; // Importing useEffect directly
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useSession } from "next-auth/react";

const Profile = () => {
  const { data: session } = useSession();
  const [userData, setUserData] = React.useState(null);
  const dispatch =useDispatch();
  async function getProfile() {
    console.log("getProfile");
    // const token = window.localStorage.getItem("token");
    const response = await axios.get(`${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/profile/me`
          , {
            headers: {
              Authorization: `Bearer ${session?.jwt}`,
            },
          }
        ); 
    console.log(response.data.data?.attributes);
    dispatch(setDetails(response.data.data.attributes));
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (

    <Box className="mt-20">
    <div
        style={{ overflow: "hidden", transform: "translateY(-0px) " }}
      >
        <div className="loginBg ">
      <PersonalInformation userData={userData} />
    </div>
    </div>
    </Box>
  );
};

export default Profile;
