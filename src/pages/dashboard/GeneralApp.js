import React from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessage from "../../components/StarredMessage";

const GeneralApp = () => {
  const theme = useTheme();
  const { sideBar } = useSelector((store) => store.app);
  console.log();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chats  */}
      <Chats />
      {/* conversation  */}
      <Box
        sx={{
          height: "100%",
          width: sideBar?.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
      {/* Conract  */}
      {sideBar?.open &&
        (() => {
          switch (sideBar?.type) {
            case "CONTACT":
              return <Contact />;
            case "STARRED":
              return <StarredMessage />;
            case "SHARED":
              return <SharedMessages />;
            default:
              break;
          }
        })()}
    </Stack>
  );
};

export default GeneralApp;
