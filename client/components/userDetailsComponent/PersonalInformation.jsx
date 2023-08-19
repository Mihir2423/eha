import { Box, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import ProfileRoutes from "./ProfileComponents/ProfileRoutes";
import InfoForm from "./ProfileComponents/InfoForm";
import { getdetail } from "@/redux/features/userSlice";
import InfoNotFound from "./ProfileComponents/getpersonalinfo";
import { useDispatch, useSelector } from "react-redux";


const PersonalInformation = () => {
  const dispatch = useDispatch();
  const [takeInput, setTakeInput] = React.useState(false);
  const userDetails = useSelector((state) => state.user.userDetails.details);
  return (
    <Grid container spacing={8} padding={3} paddingX={12}>
      <Grid item xs={3.4} md={3.4} xl={3.4}>
        <Box className={`flex flex-col gap-[56px]`}>
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
           <InfoNotFound setTakeInput={setTakeInput}
           takeInput={takeInput}/> :
          <InfoForm takeInput={takeInput} setTakeInput={setTakeInput}/> 
        }
        
      </Grid>
    </Grid>
  );
};

export default PersonalInformation;
