import {
  Avatar,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft, X } from "phosphor-react";
import React from "react";
import { UpdateSidebarType } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import Message from "./Conversation/Message";
const StarredMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      {" "}
      <Stack sx={{ height: "100%" }}>
        {" "}
        {/* Header start  */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#f8faff"
                : theme.palette.background,
          }}
        >
          <Stack
            direction={"row"}
            sx={{ height: "100%", p: 2 }}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Starred Messages</Typography>
          </Stack>
        </Box>
        {/* Header end  */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          p={3}
          spacing={3}
        >
          <Message />
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessage;
