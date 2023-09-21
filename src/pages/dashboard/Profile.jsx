import React from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import ProfileForm from "../../sections/settings/ProfileForm";
const Profile = () => {
  // 14 35
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* Left */}
        <Box
          sx={{
            overflowY: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
            height: "100vh",
            width: 320,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,

            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* Header  */}
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton>
                <CaretLeft size={24} color={"#4b4b4b"} />
              </IconButton>
              <Typography variant="h5">Profile</Typography>
            </Stack>
            {/* Profile Form  */}
            <ProfileForm />
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
