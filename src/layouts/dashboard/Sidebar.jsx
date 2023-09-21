import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LogoutUser } from "../../redux/slices/auth";
const Sidebar = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(0);
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        sx={{ height: "100%" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={3}
      >
        <Stack alignItems={"center"} spacing={4}>
          <Link to={"/"}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 2.5,
              }}
            >
              <img src={Logo} alt={"Chat App logo"} />
            </Box>
          </Link>
          <Stack
            spacing={3}
            alignItems="center"
            direction="column"
            sx={{
              width: "max-content",
            }}
          >
            {Nav_Buttons.map((el) =>
              el.index === selected ? (
                <Box
                  key={el.index}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <Link to={el.link}>
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  </Link>
                </Box>
              ) : (
                <Link to={el.link}>
                  <IconButton
                    onClick={() => setSelected(el.index)}
                    sx={{
                      width: "max-content",
                      color:
                        theme.palette.mode === "light"
                          ? "#000"
                          : theme.palette.text.primary,
                    }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Link>
              )
            )}
            <Divider sx={{ width: "48px" }} />
            {selected === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ width: "max-content", color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <Link to={"/settings"}>
                <IconButton
                  onClick={() => setSelected(3)}
                  sx={{
                    width: "max-content",

                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                >
                  <Gear />
                </IconButton>
              </Link>
            )}
          </Stack>
        </Stack>
        <Stack sx={{}} spacing={4}>
          {/* SWITCH  */}
          {/* switch toggle need to be fixed  */}
          <AntSwitch
            defaultChecked
            onChange={() => {
              onToggleMode();
            }}
          />
          <Avatar
            src={faker.image.avatar()}
            id="basic-button"
            onClick={handleClick}
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          />
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el, id) => (
                <MenuItem key={id}>
                  <Stack
                    onClick={() => {
                      if (id === 2) {
                        dispatch(LogoutUser());
                      }
                    }}
                  >
                    <Link to={el.link}>
                      <Stack
                        sx={{ width: 100 }}
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <span>{el.title}</span>
                        {el.icon}
                      </Stack>
                    </Link>
                  </Stack>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
