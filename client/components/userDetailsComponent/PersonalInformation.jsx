import { Box, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import ProfileRoutes from "./ProfileComponents/ProfileRoutes";
import InfoForm from "./ProfileComponents/InfoForm";
import { getdetail } from "@/redux/features/userSlice";
import InfoNotFound from "./ProfileComponents/getpersonalinfo";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";


const PersonalInformation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const dispatch = useDispatch();
  const [takeInput, setTakeInput] = React.useState(false);
  const userDetails = useSelector((state) => state.user.userDetails.details);

  return (
    <Grid container  className="md:px-36 px-4 items-center justify-center md:justify-none">
    {
      isMobile ?
      <Grid item xs={8.6} md={8.6} xl={8.6} className="w-full bg-white flex items-center justify-center rounded-md">
        {
          userDetails ?
          <InfoForm takeInput={takeInput} setTakeInput={setTakeInput}/> 
          :
           <InfoNotFound setTakeInput={setTakeInput}
           takeInput={takeInput}/>
        }
        
      </Grid>
      :
      <Box className="flex mt-8 item-center justify-center gap-8">
      <Grid item xs={3.4} md={3} xl={3.4}>

      <Box className={`flex flex-col gap-[36px] mt-4`}>
        <ProfileCard
          edit={true}
          setTakeInput={setTakeInput}
          takeInput={takeInput}
        />
        <ProfileRoutes page={"PERSONAL INFORMATION"} />
      </Box>
      </Grid>
      <Grid item xs={8.6} md={8.6} xl={8.6}>
        {
          userDetails ?
          <InfoForm takeInput={takeInput} setTakeInput={setTakeInput} /> 
          :
           <InfoNotFound setTakeInput={setTakeInput}
           takeInput={takeInput}/>
        }
      </Grid>
      </Box>
    }   
    </Grid>
  );
};

export default PersonalInformation;
