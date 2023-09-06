import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { UpdateSidebarType } from "../redux/slices/app";
import { useDispatch } from "react-redux";
import { faker } from "@faker-js/faker";
import { SHARED_DOCS, SHARED_LINKS } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";
const SharedMessages = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
            {" "}
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
        {/* Header end  */}
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          sx={{ px: 2, pt: 2 }}
        >
          <Tab label="Media" />
          <Tab label="Links" />
          <Tab label="Docs" />
        </Tabs>
        {/* Body start  */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          p={3}
          spacing={value === 1 ? 1 : 3}
        >
          <SwitchTabs value={value} />
        </Stack>
        {/* Body end  */}
      </Stack>
    </Box>
  );
};

const SwitchTabs = ({ value }) => {
  switch (value) {
    case 0:
      //images
      return (
        <Grid container spacing={2}>
          {[0, 1, 2, 3, 4, 5, 6].map((el) => {
            return (
              <Grid item xs={4}>
                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
              </Grid>
            );
          })}
        </Grid>
      );

    case 1:
      //links
      return SHARED_LINKS.map((el) => <LinkMsg el={el} />);

    case 2:
      //docs
      return SHARED_DOCS.map((el) => <DocMsg el={el} />);
    default:
      break;
  }
};

export default SharedMessages;
