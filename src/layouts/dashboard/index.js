import { Stack } from "@mui/material";
import { Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }

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
