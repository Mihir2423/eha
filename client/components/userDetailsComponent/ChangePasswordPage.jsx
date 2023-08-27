import { Box, Grid } from "@mui/material";
import React from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import ProfileRoutes from "./ProfileComponents/ProfileRoutes";
import PasswordForm from "./ChangePasswordComponents/PasswordForm";

const ChangePasswordPage = ({profile}) => {
  return (
    <Grid container spacing={8} padding={3} paddingX={12}>
      <Grid item xs={3.4} md={3.4} xl={3.4}>
        <Box className={`flex flex-col gap-[56px]`}>
          <ProfileCard profile={profile}  />
          <ProfileRoutes page={"CHANGE PASSWORD"} />
        </Box>
      </Grid>
      <Grid item xs={8.6} md={8.6} xl={8.6}>
        <Box className={`flex flex-col gap-4`}>
          <PasswordForm />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ChangePasswordPage;
