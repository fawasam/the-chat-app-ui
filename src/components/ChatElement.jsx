import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";
import { faker } from "@faker-js/faker";
import StyledBadge from "../components/StyledBadge";
const ChatElement = ({ id, img, name, msg, time, unread, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroudeColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.paper,
        height: 60,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar alt="Remy Sharp" src={faker.image.avatar()} />
          )}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{name}</Typography>
            <Typography variant="caption">{msg}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={2}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatElement;
