import { Stack, Typography, Link } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, Link as RouterLink, useNavigate } from "react-router-dom";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginForm from "../../sections/auth/LoginForm";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  // useEffect(() => {
  //   if (!isLoggedIn) return navigate("/auth/login");
  // }, [isLoggedIn]);
  return (
    <>
      <Stack spacing={2} sx={{ mb: 2, position: "relative" }}>
        <Typography variant="h4">Login to Tawk</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New User ?</Typography>
          <Link to="/auth/register" variant="subtitle2" component={RouterLink}>
            Create an account
          </Link>
        </Stack>
        {/* Login Form  */}
        <LoginForm />
        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
