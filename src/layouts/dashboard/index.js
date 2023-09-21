import { Stack } from "@mui/material";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
    // return navigate("/auth/login");
  }
  // useEffect(() => {}, [isLoggedIn]);
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
