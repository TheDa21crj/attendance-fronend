import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const email = useSelector((state) => state.user.email);
  return email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
