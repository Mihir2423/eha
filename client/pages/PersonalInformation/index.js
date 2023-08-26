import PersonalInformation from "@/components/userDetailsComponent/PersonalInformation";
import { setDetails } from "@/redux/features/userSlice";
import { Box } from "@mui/material"; // Corrected import
import React from "react"; // Importing useEffect directly
import { useDispatch } from "react-redux";
import axios from "axios";
import { getSession } from "next-auth/react";

const Profile = ({profile}) => {
  const dispatch = useDispatch();
  dispatch(setDetails(profile));
  return (
    <Box className="mt-20">
      <div style={{ overflow: "hidden", transform: "translateY(-0px) " }}>
        <div className="loginBg ">
          <PersonalInformation />
        </div>
      </div>
    </Box>
  );
};

export default Profile;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session == null) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    };
  }
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_NEXT_API_PUBLIC_URL}/api/profile/me`,
      {
        headers: {
          Authorization: `Bearer ${session?.jwt}`,
        },
      }
    );
    const profile = response.data.data?.attributes;
    return {
      props: {
        profile,
      },
    };
  } catch (error) {
    console.error("Error fetching profile:", error);
    return {
      props: {
        profile: {},
      },
    };
  }
}
