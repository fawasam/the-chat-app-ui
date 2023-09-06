import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  CaretLeft,
  Bell,
  Lock,
  Key,
  PencilCircle,
  Image,
  Note,
  Keyboard,
  Info,
} from "phosphor-react";
import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import Shortcuts from "../../sections/settings/Shortcuts";
import ThemeDialog from "../../sections/settings/ThemeDialog";

const Settings = () => {
  const theme = useTheme();
  const [openTheme, setOpenTheme] = useState(false);

  const handleOpenTheme = () => {
    setOpenTheme(true);
  };

  const handleCloseTheme = () => {
    setOpenTheme(false);
  };
  const [openShortcuts, setOpenShortcuts] = useState(false);

  const handleOpenShortcuts = () => {
    setOpenShortcuts(true);
  };

  const handleCloseShortcuts = () => {
    setOpenShortcuts(false);
  };
  const list = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      onclick: handleOpenTheme,
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
      onclick: handleOpenShortcuts,
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];

  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* Leftpanel  */}
      <Box
        sx={{
          overflowY: "scroll",
          height: "100vh",
          width: 320,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#f8faff"
              : theme.palette.background,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Stack p={4} spacing={5}>
          {/* Header  */}
          <Stack direction={"row"} alignItems={"Center"} spacing={3}>
            <IconButton>
              <CaretLeft size={24} color={"#4b4b4b"} />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          {/* Profile  */}
          <Stack spacing={3} direction="row">
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={faker.image.avatar()}
              alt={faker.name.fullName()}
            />
            <Stack spacing={0.5}>
              <Typography variant="article">Fawas a m</Typography>
              <Typography variant="body">{faker.random.words()}</Typography>
            </Stack>
          </Stack>
          {/* List of options  */}
          <Stack spacing={3}>
            {list.map(({ key, icon, title, onclick }) => (
              <Stack
                onClick={onclick}
                sx={{ cursor: "pointer" }}
                spacing={2}
                key={key}
              >
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                  {icon}
                  <Typography variant="body">{title}</Typography>
                </Stack>
                {key !== 7 && <Divider />}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
      {/* Rightpanel  */}
      {openShortcuts && (
        <Shortcuts open={true} handleClose={handleCloseShortcuts} />
      )}
      {openTheme && <ThemeDialog open={true} handleClose={handleCloseTheme} />}
    </Stack>
  );
};

export default Settings;
