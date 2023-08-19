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
    const response = await axios.get(`http://localhost:1337/api/profile/me`
          , {
            headers: {
              Authorization: `Bearer ${session?.jwt}`,
            },
          }
        ); 
    console.log(response.data.data.attributes);
    dispatch(setDetails(response.data.data.attributes));
  };
  useEffect(() => {
    getProfile();
  }, []);
  return (

    <Box className="mt-20">
      <PersonalInformation userData={userData} />
    </Box>
  );
};

export default Profile;
