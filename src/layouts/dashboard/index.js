import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
const DashboardLayout = () => {
  return (
    <Stack direction={"row"}>
      {/* Sidebar  */}
      <Sidebar />
      {/* placeholder for all of his children   */}
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
